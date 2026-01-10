import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
import { withPayload } from '@payloadcms/next/withPayload';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here - cache buster: 2 */
};

export default withNextIntl(withPayload(nextConfig));
