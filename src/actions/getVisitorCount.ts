'use server';

import fs from 'fs';
import path from 'path';
import { headers } from 'next/headers';

const DATA_FILE = path.join(process.cwd(), 'src/data/visitors.json');

// Ensure directory exists
const ensureDirectoryExistence = (filePath: string) => {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
};

export async function getVisitorCount() {
  const headersList = await headers();
  const forwardedFor = headersList.get('x-forwarded-for');
  const ip = forwardedFor ? forwardedFor.split(',')[0] : 'unknown';

  let data = { count: 0, ips: [] as string[] }; // Start with a base count of 0

  try {
    if (fs.existsSync(DATA_FILE)) {
      const fileContent = fs.readFileSync(DATA_FILE, 'utf-8');
      data = JSON.parse(fileContent);
    } else {
        // Create dir if needed
        const dirname = path.dirname(DATA_FILE);
        if (!fs.existsSync(dirname)) {
             fs.mkdirSync(dirname, { recursive: true });
        }
    }

    if (!data.ips.includes(ip)) {
      data.ips.push(ip);
      data.count += 1;
      fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    }

    return data.count;
  } catch (error) {
    console.error('Error tracking visitor:', error);
    return 1000; // Fallback
  }
}
