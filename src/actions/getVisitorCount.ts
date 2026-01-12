'use server';

import { headers } from 'next/headers';
import { getPayload } from 'payload';
import config from '@payload-config';

export async function getVisitorCount() {
  const headersList = await headers();
  const forwardedFor = headersList.get('x-forwarded-for');
  const ip = forwardedFor ? forwardedFor.split(',')[0] : 'unknown';

  try {
    const payload = await getPayload({ config });

    // Fetch current statistics
    // Using depth: 0 for performance as we just need simple data
    const stats = await payload.findGlobal({
      slug: 'statistics',
      depth: 0,
    });

    // Initialize if needed (handling case where global might be empty initially)
    let visitorCount = stats.visitorCount || 0;
    const startCount = stats.startCount || 18;
    // Ensure ips is treated as an array
    const currentIps = Array.isArray(stats.ips) ? (stats.ips as string[]) : [];

    // Check if IP is new
    if (!currentIps.includes(ip) && ip !== 'unknown') {
      await payload.updateGlobal({
        slug: 'statistics',
        data: {
          visitorCount: visitorCount + 1,
          ips: [...currentIps, ip],
        },
      });
      visitorCount++;
    }

    return startCount + visitorCount;
  } catch (error) {
    console.error('Error tracking visitor:', error);
    // Fallback similar to previous implementation, but respecting the requested start number
    return 18;
  }
}
