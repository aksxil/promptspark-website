// Runs after `next build` (postbuild). With `output: 'export'`, Next.js 16 writes per-segment
// navigation data as  <page>/__next.<segment>/__PAGE__.txt  but the browser requests
// <page>/__next.<segment>.__PAGE__.txt  when prefetching. Static hosts don't rewrite, so those
// requests 404 and navigation falls back to full page loads. This copies each file to the flat name too.
import { copyFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const out = join(process.cwd(), 'out');
if (!existsSync(out)) {
  console.error('[rsc-paths] out/ not found.');
  process.exit(1);
}

let copied = 0;
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (!statSync(path).isDirectory()) continue;
    if (name.startsWith('__next.')) {
      for (const file of readdirSync(path)) {
        const src = join(path, file);
        if (statSync(src).isFile()) {
          copyFileSync(src, join(dir, `${name}.${file}`));
          copied++;
        }
      }
    }
    walk(path);
  }
})(out);
console.log(`[rsc-paths] Added ${copied} flat navigation-data file(s).`);
