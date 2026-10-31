// Checks the built site in out/: every internal link and asset resolves to a file, every page has a
// title, description, canonical URL, one <h1>, lang attribute and no duplicate ids. Run after `next build`.
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const out = join(process.cwd(), 'out');
if (!existsSync(out)) {
  console.error('out/ not found. Run `npm run build` first.');
  process.exit(1);
}

const htmlFiles = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (name.endsWith('.html')) htmlFiles.push(p);
  }
})(out);

const problems = [];
const resolve = (href) => {
  const clean = decodeURIComponent(href.split('#')[0].split('?')[0]);
  if (clean === '' || clean === '/') return existsSync(join(out, 'index.html'));
  const path = join(out, clean);
  return existsSync(path) && statSync(path).isFile() ? true : existsSync(join(path, 'index.html'));
};

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const page = '/' + relative(out, file).replace(/\\/g, '/');
  const is404 = page === '/404.html' || page.endsWith('/404/index.html') || page === '/_not-found/index.html' || page === '/_not-found.html';

  for (const [, attr, value] of html.matchAll(/\s(href|src)="([^"]+)"/g)) {
    if (!value.startsWith('/') || value.startsWith('//')) continue;
    if (!resolve(value)) problems.push(`${page}: broken ${attr} ${value}`);
  }
  if (!/<html[^>]*\slang="en"/.test(html)) problems.push(`${page}: missing lang`);
  if (!/<title>[^<]{5,}<\/title>/.test(html)) problems.push(`${page}: missing <title>`);
  if (!is404) {
    if (!/<meta name="description" content="[^"]{50,}"/.test(html)) problems.push(`${page}: missing/short meta description`);
    if (!/<link rel="canonical" href="https:\/\/promptspark\.pages\.dev\/[^"]*"/.test(html)) problems.push(`${page}: missing canonical`);
    if (!/<meta property="og:image"/.test(html)) problems.push(`${page}: missing og:image`);
  }
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) problems.push(`${page}: ${h1s} <h1> elements`);
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
  const dupes = [...new Set(ids.filter((id, i) => ids.indexOf(id) !== i))];
  if (dupes.length) problems.push(`${page}: duplicate ids ${dupes.join(', ')}`);
  for (const [, alt] of html.matchAll(/<img(?![^>]*\salt=)[^>]*>/g)) problems.push(`${page}: <img> without alt ${alt ?? ''}`);
}

for (const required of ['robots.txt', 'sitemap.xml', 'manifest.webmanifest', '_headers', 'opengraph-image', 'twitter-image']) {
  if (!existsSync(join(out, required))) problems.push(`missing ${required}`);
}

if (problems.length) {
  console.error(`check-links: ${problems.length} problem(s)\n- ${problems.join('\n- ')}`);
  process.exit(1);
}
console.log(`check-links: ${htmlFiles.length} pages OK (links, assets, titles, descriptions, canonicals, one h1, unique ids).`);
