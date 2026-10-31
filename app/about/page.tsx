import type { Metadata } from 'next';

import { ButtonLink, Container, PageHero } from '@/components/ui';
import { TOTALS } from '@/content/site-facts';
import { pageMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'About',
  description: `Why PromptSpark exists, how the prompt library is written, and who builds it. Developed by ${SITE.developer}.`,
  path: '/about/',
});

const PRINCIPLES = [
  {
    title: 'Specific beats clever',
    body: 'Each prompt spells out the details AI tools need to do a good job: lighting and lens for photos, structure and audience for writing, scope and checks for code.',
  },
  {
    title: 'You stay in control',
    body: 'Prompts mark what to change in [BRACKETS], and many tell the AI what not to do, like keeping a face unchanged or not editing files yet.',
  },
  {
    title: 'Works with the tools you choose',
    body: 'PromptSpark isn’t tied to one AI provider. Use the prompts with any chatbot, image editor or coding assistant that fits the task.',
  },
  {
    title: 'Private by design',
    body: 'No accounts and no analytics SDK. Your favourites and collections stay on your phone.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={<>Good results start with <span className="spark-text">a good prompt.</span></>}
        intro={
          <p>
            AI tools are powerful, but a vague request gets a vague result. PromptSpark collects clear, detailed prompts for
            everyday tasks, so you can start from something that works instead of a blank box.
          </p>
        }
      />

      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_1.1fr]">
        <div className="prose-ps" data-reveal>
          <h2 className="!mt-0">What PromptSpark is</h2>
          <p>
            PromptSpark is an Android app with a curated library of {TOTALS.prompts} AI prompts in {TOTALS.categories}{' '}
            categories, from photo editing and portraits to social media, coding and professional writing. {TOTALS.free} of
            them are free.
          </p>
          <p>
            It is a <strong>prompt library</strong>, not an AI generator. The app doesn’t contain an AI model, doesn’t
            connect to any AI service, and doesn’t create images or text. You copy a prompt and paste it into the AI tool you
            already use, and that tool produces the result.
          </p>
          <h2>Who builds it</h2>
          <p>
            PromptSpark is developed by <strong>{SITE.developer}</strong>. It is an independent product and is not
            affiliated with OpenAI, Google, Anthropic or any other AI provider.
          </p>
          <p>
            Questions, ideas or a prompt that didn’t work as expected? Email{' '}
            <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {PRINCIPLES.map((p) => (
            <div key={p.title} className="glass rounded-2xl p-6" data-reveal>
              <h3 className="font-display text-lg font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 text-[0.95rem] text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </Container>

      <Container className="flex flex-wrap gap-3">
        <ButtonLink href="/features/">See the features</ButtonLink>
        <ButtonLink href="/support/" variant="secondary">
          Contact support
        </ButtonLink>
      </Container>
    </>
  );
}
