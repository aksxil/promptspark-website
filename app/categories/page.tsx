import type { Metadata } from 'next';

import { PromptCard } from '@/components/prompt-card';
import { Container, PageHero, SectionHeading } from '@/components/ui';
import { SAMPLE_PROMPTS } from '@/content/sample-prompts';
import { CATEGORIES, TOTALS } from '@/content/site-facts';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Explore Categories',
  description: `Browse PromptSpark’s ${TOTALS.categories} prompt categories: photo editing, portraits, cinematic photography, social media, Reels, YouTube, coding, web development, business, productivity and writing.`,
  path: '/categories/',
});

const groups = ['Photo & visuals', 'Creators', 'Code & web', 'Work & writing'] as const;

export default function CategoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Explore categories"
        title={<>{TOTALS.categories} categories. <span className="spark-text">{TOTALS.prompts} prompts.</span></>}
        intro={
          <p>
            Every category has {CATEGORIES[0].total} prompts, most of them free. {TOTALS.free} prompts are free and{' '}
            {TOTALS.pro} are part of Pro, which isn’t available to buy yet.
          </p>
        }
      />

      <Container className="py-16 sm:py-20">
        {groups.map((group) => (
          <section key={group} aria-labelledby={`g-${group}`} className="mb-14 last:mb-0">
            <h2 id={`g-${group}`} className="text-xs font-semibold uppercase tracking-[0.14em] text-subtle" data-reveal>
              {group}
            </h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {CATEGORIES.filter((c) => c.group === group).map((c) => (
                <article key={c.id} id={c.id} className="glass scroll-mt-24 rounded-2xl p-6" data-reveal>
                  <h3 className="font-display text-xl font-semibold text-ink">{c.name}</h3>
                  <p className="mt-2 text-muted">{c.description}</p>
                  <dl className="mt-5 flex flex-wrap gap-2 text-sm">
                    <div className="rounded-full border border-line bg-bg/50 px-3 py-1">
                      <dt className="sr-only">Total prompts</dt>
                      <dd className="text-ink">
                        <span className="tabular-nums">{c.total}</span> prompts
                      </dd>
                    </div>
                    <div className="rounded-full bg-ok/10 px-3 py-1">
                      <dt className="sr-only">Free prompts</dt>
                      <dd className="text-ok">
                        <span className="tabular-nums">{c.free}</span> free
                      </dd>
                    </div>
                    {c.pro > 0 ? (
                      <div className="rounded-full bg-violet/12 px-3 py-1">
                        <dt className="sr-only">Pro prompts</dt>
                        <dd className="text-[#c4bbff]">
                          <span className="tabular-nums">{c.pro}</span> Pro
                        </dd>
                      </div>
                    ) : null}
                  </dl>
                </article>
              ))}
            </div>
          </section>
        ))}
      </Container>

      <section aria-labelledby="samples" className="pb-8">
        <Container>
          <SectionHeading
            id="samples"
            eyebrow="Try before you install"
            title="A few free prompts, exactly as they appear in the app."
            intro="Copy one, paste it into your AI tool, and replace the [BRACKETED] parts with your own details."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SAMPLE_PROMPTS.map((p) => (
              <div key={p.id} data-reveal>
                <PromptCard prompt={p} />
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-subtle">
            Prompts that refer to “the attached photo” are meant for AI tools that accept an image you upload. PromptSpark
            itself never sees your photos.
          </p>
        </Container>
      </section>
    </>
  );
}
