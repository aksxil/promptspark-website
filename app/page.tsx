import type { Metadata } from 'next';
import Link from 'next/link';

import {
  IconCheck,
  IconClose,
  IconCopy,
  IconDiamond,
  IconEdit,
  IconFolder,
  IconHeart,
  IconLayers,
  IconOffline,
  IconSearch,
} from '@/components/icons';
import { PromptCard } from '@/components/prompt-card';
import { AvailabilityPill, ButtonLink, Container, Eyebrow, SectionHeading } from '@/components/ui';
import { HERO_PROMPT } from '@/content/sample-prompts';
import { CATEGORIES, PRO_COLLECTIONS, TOTALS } from '@/content/site-facts';
import { pageMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'AI Prompt Library for Android',
    description: SITE.description,
    path: '/',
  }),
  title: { absolute: `${SITE.name}: AI Prompt Library for Android` },
};

const STEPS = [
  { icon: IconSearch, title: 'Find a prompt', body: 'Browse 12 categories, search by title, tag or use case, and filter by Free, Pro or level.' },
  { icon: IconEdit, title: 'Fill in the blanks', body: 'Many prompts mark the parts you change in [BRACKETS]. Fill them in inside the app, or after you paste.' },
  { icon: IconCopy, title: 'Copy into your AI tool', body: 'Copy or share the prompt and paste it into the chatbot, image editor or coding assistant you already use.' },
];

const HIGHLIGHTS = [
  { icon: IconLayers, title: `${TOTALS.prompts} curated prompts`, body: 'Written for real tasks, with tags, use cases and a difficulty level on every prompt.' },
  { icon: IconEdit, title: 'Customisable placeholders', body: 'Swap [TOPIC], [AUDIENCE] or [OUTFIT] for your own details before copying.' },
  { icon: IconHeart, title: 'Favourites and collections', body: 'Save prompts you like and group them into your own collections.' },
  { icon: IconOffline, title: 'Works offline', body: 'The whole library ships inside the app, so browsing and copying need no connection.' },
];

const groups = ['Photo & visuals', 'Creators', 'Code & web', 'Work & writing'] as const;

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MobileApplication',
      name: SITE.name,
      description: SITE.description,
      operatingSystem: 'Android',
      applicationCategory: 'ProductivityApplication',
      url: SITE.url,
      author: { '@type': 'Organization', name: SITE.developer },
    },
    {
      '@type': 'WebSite',
      name: SITE.name,
      url: SITE.url,
      publisher: { '@type': 'Organization', name: SITE.developer, email: SITE.supportEmail },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="grid-backdrop pointer-events-none absolute inset-0" aria-hidden />
        <div className="pointer-events-none absolute -top-48 left-[10%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(closest-side,rgba(124,108,242,0.35),transparent)] blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -top-24 right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(closest-side,rgba(94,168,255,0.22),transparent)] blur-3xl" aria-hidden />
        <Container className="relative grid items-center gap-12 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28">
          <div className="animate-rise">
            <AvailabilityPill />
            <h1 className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.04] tracking-tight text-ink sm:text-6xl">
              The prompt library <span className="spark-text">for every AI tool</span> you use.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted sm:text-xl">
              PromptSpark is an Android app with {TOTALS.prompts} curated AI prompts in {TOTALS.categories} categories.
              Find one, fill in the blanks, and copy it into the AI tool you already use.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/categories/">Browse the categories</ButtonLink>
              <ButtonLink href="/features/" variant="secondary">
                See the features
              </ButtonLink>
            </div>
            <p className="mt-6 flex items-center gap-2 text-sm text-subtle">
              <IconCheck width={16} height={16} className="text-ok" />
              {TOTALS.free} prompts free · No account needed · Works offline
            </p>
          </div>
          <div className="relative animate-rise [animation-delay:120ms]">
            <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-violet/25 via-transparent to-blue/20 blur-2xl" aria-hidden />
            <div className="relative">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-subtle">Try one from the library</p>
              <PromptCard prompt={HERO_PROMPT} headingLevel={2} />
            </div>
          </div>
        </Container>
      </section>

      {/* Numbers */}
      <section aria-label="PromptSpark in numbers" className="border-y border-line-soft bg-surface/40">
        <Container>
          <dl className="grid grid-cols-2 divide-line-soft py-8 sm:grid-cols-4 sm:divide-x">
            {[
              [String(TOTALS.prompts), 'curated prompts'],
              [String(TOTALS.categories), 'categories'],
              [String(TOTALS.free), 'free prompts'],
              ['0', 'accounts needed'],
            ].map(([value, label]) => (
              <div key={label} className="px-4 py-3 text-center" data-reveal>
                <dt className="sr-only">{label}</dt>
                <dd>
                  <span className="block font-display text-3xl font-semibold tabular-nums text-ink sm:text-4xl">{value}</span>
                  <span className="mt-1 block text-sm text-muted">{label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* How it works */}
      <section aria-labelledby="how" className="py-20 sm:py-28">
        <Container>
          <SectionHeading id="how" eyebrow="How it works" title="Three steps from idea to a great prompt." />
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <li key={step.title} className="glass relative rounded-2xl p-6" data-reveal>
                <span className="absolute right-5 top-5 font-display text-sm font-semibold text-subtle">0{i + 1}</span>
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-violet/15 text-[#c4bbff]">
                  <step.icon width={22} height={22} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-[0.95rem] text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* What it is / isn't */}
      <section aria-labelledby="clarity" className="pb-20 sm:pb-28">
        <Container>
          <div className="glass grid gap-10 rounded-3xl p-6 sm:p-10 lg:grid-cols-2">
            <div data-reveal>
              <Eyebrow>Good to know</Eyebrow>
              <h2 id="clarity" className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink">
                PromptSpark writes the prompt. <span className="spark-text">Your AI tool does the rest.</span>
              </h2>
              <p className="mt-4 text-muted">
                PromptSpark doesn’t contain an AI model and doesn’t generate images or text. It gives you carefully written
                prompts to paste into the AI tools you choose. The results come from those tools.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2" data-reveal>
              <div className="rounded-2xl border border-ok/25 bg-ok/5 p-5">
                <h3 className="font-semibold text-ink">PromptSpark is</h3>
                <ul className="mt-3 grid gap-2 text-[0.95rem] text-muted">
                  {['A curated prompt library', 'Ready to copy and share', 'Customisable with your details', 'Usable offline, no sign-in'].map((t) => (
                    <li key={t} className="flex gap-2">
                      <IconCheck width={18} height={18} className="mt-0.5 shrink-0 text-ok" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-line bg-bg/40 p-5">
                <h3 className="font-semibold text-ink">PromptSpark is not</h3>
                <ul className="mt-3 grid gap-2 text-[0.95rem] text-muted">
                  {['An image or text generator', 'A chatbot or AI model', 'Connected to any AI service', 'Affiliated with AI providers'].map((t) => (
                    <li key={t} className="flex gap-2">
                      <IconClose width={18} height={18} className="mt-0.5 shrink-0 text-subtle" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Categories preview */}
      <section aria-labelledby="cats" className="pb-20 sm:pb-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              id="cats"
              eyebrow="Explore"
              title={`${TOTALS.categories} categories, ${TOTALS.prompts} prompts.`}
              intro="From photo editing and portraits to Reels scripts, code reviews and polished emails."
            />
            <ButtonLink href="/categories/" variant="secondary">
              All categories
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {groups.map((group) => (
              <div key={group} className="glass rounded-2xl p-6" data-reveal>
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-subtle">{group}</h3>
                <ul className="mt-4 grid gap-3">
                  {CATEGORIES.filter((c) => c.group === group).map((c) => (
                    <li key={c.id}>
                      <Link href={`/categories/#${c.id}`} className="group flex items-center justify-between gap-3 rounded-lg">
                        <span className="font-medium text-ink group-hover:text-[#c4bbff]">{c.name}</span>
                        <span className="text-sm tabular-nums text-subtle">{c.total}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Highlights */}
      <section aria-labelledby="highlights" className="pb-20 sm:pb-28">
        <Container>
          <SectionHeading id="highlights" eyebrow="Inside the app" title="Built to make good prompts easy to reuse." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map((h) => (
              <div key={h.title} className="glass rounded-2xl p-6" data-reveal>
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-blue/12 text-blue">
                  <h.icon width={22} height={22} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">{h.title}</h3>
                <p className="mt-2 text-[0.95rem] text-muted">{h.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8" data-reveal>
            <Link href="/features/" className="inline-flex items-center gap-1 font-semibold text-blue hover:underline">
              See every feature →
            </Link>
          </p>
        </Container>
      </section>

      {/* Free vs Pro */}
      <section aria-labelledby="plans" className="pb-20 sm:pb-28">
        <Container>
          <SectionHeading id="plans" eyebrow="Free and Pro" title="Most of the library is free." intro="Pro is planned, but it isn’t available to buy yet." />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <div className="glass rounded-3xl p-7" data-reveal>
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-semibold text-ink">Free</h3>
                <span className="rounded-full bg-ok/10 px-3 py-1 text-sm font-semibold text-ok">Available</span>
              </div>
              <ul className="mt-6 grid gap-3 text-muted">
                {[
                  `${TOTALS.free} prompts across all ${TOTALS.categories} categories`,
                  'Search, filters, favourites and collections',
                  'Fill-in placeholders, copy and share',
                  'Works offline, no account',
                  'Includes ads from Google AdMob',
                ].map((t) => (
                  <li key={t} className="flex gap-2.5">
                    <IconCheck width={18} height={18} className="mt-1 shrink-0 text-ok" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-3xl border border-violet/30 bg-gradient-to-b from-violet/10 to-surface/60 p-7" data-reveal>
              <div className="flex items-center justify-between">
                <h3 className="flex items-center gap-2 font-display text-2xl font-semibold text-ink">
                  <IconDiamond width={22} height={22} className="text-[#c4bbff]" /> Pro
                </h3>
                <span className="rounded-full border border-line bg-bg/60 px-3 py-1 text-sm font-semibold text-muted">Not available yet</span>
              </div>
              <ul className="mt-6 grid gap-3 text-muted">
                {[
                  `${TOTALS.pro} more prompts in ${PRO_COLLECTIONS.length} curated collections`,
                  'Advanced customisation (tone, format, length and more)',
                  'No ads',
                ].map((t) => (
                  <li key={t} className="flex gap-2.5">
                    <IconFolder width={18} height={18} className="mt-1 shrink-0 text-[#c4bbff]" />
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-subtle">
                Pro can’t be purchased right now. If and when it launches, it will be sold through Google Play, and this page
                will be updated first.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section aria-labelledby="cta">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-surface/60 px-6 py-14 text-center sm:px-12" data-reveal>
            <div className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-64 w-[40rem] max-w-full rounded-full bg-[radial-gradient(closest-side,rgba(124,108,242,0.35),transparent)] blur-2xl" aria-hidden />
            <h2 id="cta" className="relative font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {SITE.tagline}
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-muted">
              PromptSpark is coming to Google Play for Android. Until then, explore the categories and try a few free prompts
              right here.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/categories/">Try free prompts</ButtonLink>
              <ButtonLink href="/support/" variant="secondary">
                Questions? Get support
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
