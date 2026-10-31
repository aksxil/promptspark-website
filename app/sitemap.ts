import type { MetadataRoute } from 'next';

import { SITE } from '@/lib/site';

export const dynamic = 'force-static';

const PAGES: { path: string; priority: number }[] = [
  { path: '/', priority: 1 },
  { path: '/features/', priority: 0.8 },
  { path: '/categories/', priority: 0.8 },
  { path: '/about/', priority: 0.6 },
  { path: '/support/', priority: 0.6 },
  { path: '/privacy/', priority: 0.4 },
  { path: '/terms/', priority: 0.4 },
  { path: '/data-deletion/', priority: 0.4 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(({ path, priority }) => ({
    url: new URL(path, SITE.url).toString(),
    lastModified: SITE.legalUpdatedIso,
    changeFrequency: 'monthly',
    priority,
  }));
}
