import type { Metadata } from 'next';

import {
  IconCalendar,
  IconCopy,
  IconDiamond,
  IconEdit,
  IconFolder,
  IconHeart,
  IconLayers,
  IconMoon,
  IconOffline,
  IconSearch,
  IconShare,
  IconShield,
  IconSliders,
} from '@/components/icons';
import { ButtonLink, Callout, Container, PageHero, SectionHeading } from '@/components/ui';
import { ADVANCED_OPTIONS, PRO_COLLECTIONS, TOTALS } from '@/content/site-facts';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Features',
  description: `Everything PromptSpark does: ${TOTALS.prompts} curated AI prompts, search and filters, fill-in placeholders, copy and share, favourites, collections and offline access.`,
  path: '/features/',
});

const FREE_FEATURES = [
  {
    icon: IconLayers,
    title: 'A curated prompt library',
    body: `${TOTALS.prompts} prompts in ${TOTALS.categories} categories, each with a description, tags, use cases and a beginner or advanced level.`,
  },
  {
    icon: IconCalendar,
    title: 'Home that changes with you',
    body: 'A prompt of the day, a featured prompt, Editor’s Picks, Recently Added, and Essentials: a beginner-friendly starter prompt for every category.',
  },
  {
    icon: IconSearch,
    title: 'Search and filters',
    body: 'Search titles, tags and use cases. Filter by category, Free or Pro, and level. Sort by recently added, featured first or A–Z, in a grid or a list.',
  },
  {
    icon: IconEdit,
    title: 'Fill-in placeholders',
    body: 'Parts you change are marked in [BRACKETS]. Type your own details into simple fields and PromptSpark builds the final prompt for you.',
  },
  {
    icon: IconCopy,
    title: 'One-tap copy',
    body: 'Copy a prompt, or your customised version, to the clipboard and paste it into any AI tool. PromptSpark never reads your clipboard.',
  },
  {
    icon: IconShare,
    title: 'Share',
    body: 'Send a prompt to a friend or another app with the Android share sheet.',
  },
  {
    icon: IconHeart,
    title: 'Favourites',
    body: 'Save the prompts you come back to and search within them.',
  },
  {
    icon: IconFolder,
    title: 'Your own collections',
    body: 'Group prompts into collections for a project, a client or a habit, and rename or delete them any time.',
  },
  {
    icon: IconOffline,
    title: 'Works offline',
    body: 'The library is built into the app, so you can browse, customise and copy prompts without a connection.',
  },
  {
    icon: IconMoon,
    title: 'Light and dark themes',
    body: 'Follow your phone’s theme or choose one, with optional haptic feedback.',
  },
  {
    icon: IconShield,
    title: 'No account, no sign-in',
    body: 'Favourites, collections and settings stay on your device. Clear them any time from Settings.',
  },
  {
    icon: IconSliders,
    title: 'Clear free tier',
    body: `${TOTALS.free} of the ${TOTALS.prompts} prompts are free. Free use includes ads from Google AdMob, placed away from the Copy button.`,
  },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title={<>Everything you need to <span className="spark-text">reuse great prompts.</span></>}
        intro={
          <p>
            PromptSpark is a prompt library: it helps you find, adjust and copy prompts. It doesn’t generate images or text
            itself. You paste the prompt into the AI tool you choose.
          </p>
        }
      />

      <section aria-labelledby="free-features" className="py-16 sm:py-20">
        <Container>
          <SectionHeading id="free-features" eyebrow="Included for everyone" title="Free features" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FREE_FEATURES.map((f) => (
              <div key={f.title} className="glass rounded-2xl p-6" data-reveal>
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-violet/15 text-[#c4bbff]">
                  <f.icon width={22} height={22} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">{f.title}</h3>
                <p className="mt-2 text-[0.95rem] text-muted">{f.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="pro-features" className="pb-16 sm:pb-20">
        <Container>
          <SectionHeading
            id="pro-features"
            eyebrow="Planned"
            title={
              <span className="inline-flex items-center gap-3">
                <IconDiamond width={30} height={30} className="text-[#c4bbff]" /> PromptSpark Pro
              </span>
            }
            intro="These features exist in the app but are locked, because Pro can’t be purchased yet."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <div className="glass rounded-2xl p-6" data-reveal>
              <h3 className="font-display text-lg font-semibold text-ink">{TOTALS.pro} Pro prompts</h3>
              <p className="mt-2 text-[0.95rem] text-muted">In {PRO_COLLECTIONS.length} curated collections:</p>
              <ul className="mt-3 grid gap-2 text-[0.95rem]">
                {PRO_COLLECTIONS.map((c) => (
                  <li key={c.title}>
                    <span className="font-medium text-ink">{c.title}</span>
                    <span className="block text-sm text-subtle">{c.subtitle}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass rounded-2xl p-6" data-reveal>
              <h3 className="font-display text-lg font-semibold text-ink">Advanced customisation</h3>
              <p className="mt-2 text-[0.95rem] text-muted">Extra controls that add instructions to a prompt, depending on the prompt:</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {ADVANCED_OPTIONS.map((o) => (
                  <li key={o} className="rounded-full border border-line bg-bg/50 px-3 py-1 text-sm text-muted">
                    {o}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass rounded-2xl p-6" data-reveal>
              <h3 className="font-display text-lg font-semibold text-ink">No ads</h3>
              <p className="mt-2 text-[0.95rem] text-muted">Pro users won’t see ads anywhere in the app.</p>
            </div>
          </div>
          <div className="mt-8" data-reveal>
            <Callout>
              <strong className="text-ink">Pro isn’t available to buy yet.</strong> The app shows Pro prompts as short previews,
              and its Buy button is switched off, so nobody can be charged. If Pro launches, it will be sold through
              Google Play, and we’ll update this page and the Terms first.
            </Callout>
          </div>
        </Container>
      </section>

      <section aria-label="Next steps">
        <Container className="flex flex-wrap gap-3">
          <ButtonLink href="/categories/">Explore the categories</ButtonLink>
          <ButtonLink href="/support/" variant="secondary">
            Read the FAQ
          </ButtonLink>
        </Container>
      </section>
    </>
  );
}
