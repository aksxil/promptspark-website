import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { ImageResponse } from 'next/og';

import { TOTALS } from '@/content/site-facts';
import { SITE } from '@/lib/site';

// Rendered once at build time (static export).
export const dynamic = 'force-static';
export const alt = `${SITE.name}: ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpenGraphImage() {
  const icon = await readFile(join(process.cwd(), 'public/brand/icon-192.png'));
  const iconSrc = `data:image/png;base64,${icon.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: 'radial-gradient(circle at 18% 10%, #2a2470 0%, #0b1020 55%), #0b1020',
          color: '#eef1fa',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={iconSrc} width={96} height={96} style={{ borderRadius: 24 }} alt="" />
          <div style={{ fontSize: 52, fontWeight: 700, letterSpacing: -1 }}>{SITE.name}</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05, display: 'flex' }}>
            <span>Discover.&nbsp;</span>
            <span style={{ color: '#9a8cff' }}>Copy.&nbsp;</span>
            <span style={{ color: '#5ea8ff' }}>Create.</span>
          </div>
          <div style={{ fontSize: 32, color: '#aab3cc' }}>
            {`A curated AI prompt library for Android · ${TOTALS.prompts} prompts in ${TOTALS.categories} categories`}
          </div>
        </div>
        <div style={{ fontSize: 24, color: '#8792b0' }}>{`Developed by ${SITE.developer}`}</div>
      </div>
    ),
    size,
  );
}
