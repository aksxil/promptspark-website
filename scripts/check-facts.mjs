// Optional: compares content/site-facts.ts and content/sample-prompts.ts with a local checkout of the
// PromptSpark app (default ../AiPhoto, or set APP_REPO). Read-only; the website never imports app code.
import { existsSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const app = resolve(process.env.APP_REPO ?? join(process.cwd(), '..', 'AiPhoto'));
const data = join(app, 'src', 'data');
if (!existsSync(data)) {
  console.log(`check-facts: app repo not found at ${app}; skipped.`);
  process.exit(0);
}

const counts = {};
const seeds = {};
for (const file of ['photo.ts', 'creator.ts', 'tech.ts', 'work.ts']) {
  const src = readFileSync(join(data, 'prompts', file), 'utf8');
  const blocks = {};
  for (const m of src.matchAll(/const (\w+): PromptSeed\[\] = \[([\s\S]*?)\n\];/g)) blocks[m[1]] = m[2];
  for (const m of src.matchAll(/buildPrompts\('([a-z-]+)', (\w+)\)/g)) {
    const list = blocks[m[2]].split(/\n  \{\n/).slice(1);
    const pro = list.filter((s) => /\n\s+packId:/.test(s)).length;
    counts[m[1]] = { total: list.length, free: list.length - pro, pro };
    for (const s of list) {
      const id = (s.match(/id: '([^']+)'/) || [])[1];
      const text = (s.match(/text: '((?:[^'\\]|\\.)*)'/) || [])[1]?.replace(/\\'/g, "'");
      seeds[id] = { text, pro: /\n\s+packId:/.test(s) };
    }
  }
}

const facts = readFileSync(join(process.cwd(), 'content', 'site-facts.ts'), 'utf8');
const problems = [];
for (const m of facts.matchAll(/\{ id: '([a-z-]+)',[^}]*total: (\d+), free: (\d+), pro: (\d+) \}/g)) {
  const [, id, total, free, pro] = m;
  const c = counts[id];
  if (!c) problems.push(`${id}: not in app`);
  else if (c.total !== +total || c.free !== +free || c.pro !== +pro) problems.push(`${id}: site ${total}/${free}/${pro}, app ${c.total}/${c.free}/${c.pro}`);
}
const samples = readFileSync(join(process.cwd(), 'content', 'sample-prompts.ts'), 'utf8');
for (const m of samples.matchAll(/id: '([a-z]+-\d+)',[\s\S]*?text: '((?:[^'\\]|\\.)*)'/g)) {
  const seed = seeds[m[1]];
  if (!seed) problems.push(`sample ${m[1]}: not in app`);
  else if (seed.pro) problems.push(`sample ${m[1]}: is a PRO prompt and must not be published`);
  else if (seed.text !== m[2].replace(/\\'/g, "'")) problems.push(`sample ${m[1]}: text differs from the app`);
}
if (problems.length) {
  console.error(`check-facts: ${problems.length} difference(s)\n- ${problems.join('\n- ')}`);
  process.exit(1);
}
console.log(`check-facts: ${Object.keys(counts).length} categories and all samples match the app (Free only).`);
