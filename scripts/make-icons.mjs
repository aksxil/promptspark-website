// One-off: builds the site's icon sizes from brand-source/icon-1024.png (a copy of the app icon).
// Run with `node scripts/make-icons.mjs` after changing the source icon. Uses sharp, which Next.js installs.
import { mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const source = join(root, 'brand-source', 'icon-1024.png');

const outputs = [
  ['public/brand/icon-96.png', 96],
  ['public/brand/icon-192.png', 192],
  ['public/brand/icon-512.png', 512],
  ['app/icon.png', 192],
  ['app/apple-icon.png', 180],
];

for (const [file, size] of outputs) {
  const target = join(root, file);
  mkdirSync(dirname(target), { recursive: true });
  await sharp(source).resize(size, size).png({ compressionLevel: 9, palette: size <= 192 }).toFile(target);
  console.log('wrote', file, `${size}x${size}`);
}
