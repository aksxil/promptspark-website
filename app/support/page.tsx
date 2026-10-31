import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';

import { IconMail } from '@/components/icons';
import { Container, PageHero } from '@/components/ui';
import { TOTALS } from '@/content/site-facts';
import { pageMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Contact and Support',
  description: 'Get help with PromptSpark: answers to common questions about prompts, Pro, ads, offline use and your data, plus how to contact support.',
  path: '/support/',
});

const FAQ: { q: string; a: ReactNode; text: string }[] = [
  {
    q: 'Does PromptSpark generate images or text?',
    text: 'No. PromptSpark is a prompt library. It does not contain an AI model and does not generate images or text. You copy a prompt into the AI tool you use, and that tool produces the result.',
    a: (
      <p>
        No. PromptSpark is a prompt library. It doesn’t contain an AI model and doesn’t generate images or text. You copy a
        prompt into the AI tool you use, and that tool produces the result.
      </p>
    ),
  },
  {
    q: 'Which AI tools can I use the prompts with?',
    text: 'Any tool that fits the task: chatbots for writing and planning, image-capable AI tools for photo prompts, and coding assistants for the coding prompts. PromptSpark is not affiliated with any AI provider.',
    a: (
      <p>
        Any tool that fits the task: chatbots for writing and planning, image-capable AI tools for the photo prompts, and
        coding assistants for the coding prompts. PromptSpark isn’t affiliated with any AI provider, and results depend on
        the tool you use.
      </p>
    ),
  },
  {
    q: 'What are the [BRACKETS] in a prompt?',
    text: 'They are placeholders such as [TOPIC] or [AUDIENCE]. Replace them with your own details. In the app you can fill them in before copying.',
    a: <p>They’re placeholders such as [TOPIC] or [AUDIENCE]. Replace them with your own details. In the app, you can fill them in before copying.</p>,
  },
  {
    q: 'Is PromptSpark free?',
    text: `Yes. ${TOTALS.free} of the ${TOTALS.prompts} prompts and all core features are free. Free use includes ads from Google AdMob.`,
    a: (
      <p>
        Yes. {TOTALS.free} of the {TOTALS.prompts} prompts and all the core features are free. Free use includes ads from
        Google AdMob.
      </p>
    ),
  },
  {
    q: 'Can I buy PromptSpark Pro?',
    text: 'Not yet. Pro purchases are not available, and the app will not charge you. If Pro launches, it will be sold through Google Play.',
    a: (
      <p>
        Not yet. Pro purchases aren’t available, and the app won’t charge you. If Pro launches, it will be sold through Google
        Play and we’ll update the <Link href="/terms/">Terms</Link> first.
      </p>
    ),
  },
  {
    q: 'Do I need an account or an internet connection?',
    text: 'No account is needed. The prompt library is built into the app, so browsing, customising and copying work offline. Ads need a connection.',
    a: <p>No account is needed. The prompt library is built into the app, so browsing, customising and copying work offline. Ads need a connection.</p>,
  },
  {
    q: 'Why do I see ads, and how are they handled?',
    text: 'Ads from Google AdMob keep the free version free. They appear in a few places and never next to the Copy button. Where the law requires it, the app asks for your consent first.',
    a: (
      <p>
        Ads from Google AdMob keep the free version free. They appear in a few places and never next to the Copy button.
        Where the law requires it, the app asks for your consent first. See the <Link href="/privacy/">Privacy Policy</Link>.
      </p>
    ),
  },
  {
    q: 'Can I use the prompts for commercial work?',
    text: 'Yes, subject to the terms of the AI tool you use them with and our Terms and Conditions. You may not republish the library as a competing collection.',
    a: (
      <p>
        Yes, subject to the terms of the AI tool you use them with and our <Link href="/terms/">Terms and Conditions</Link>.
        You may not republish or resell the library as a competing prompt collection.
      </p>
    ),
  },
  {
    q: 'How do I delete my data?',
    text: 'Open Settings, then Clear local data in the app, or uninstall it. See the Data deletion page for details.',
    a: (
      <p>
        In the app, open Settings › Clear local data, or uninstall the app. See <Link href="/data-deletion/">Data deletion</Link>{' '}
        for everything that’s covered.
      </p>
    ),
  },
  {
    q: 'Where can I download PromptSpark?',
    text: 'PromptSpark is coming soon to Google Play for Android. This page will link to the store listing once it is live.',
    a: <p>PromptSpark is coming soon to Google Play for Android. We’ll link to the store listing here once it’s live.</p>,
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.text } })),
};

export default function SupportPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageHero
        eyebrow="Contact and support"
        title={<>How can we <span className="spark-text">help?</span></>}
        intro={<p>Find quick answers below, or email us and we’ll get back to you.</p>}
      />

      <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[0.8fr_1.2fr]">
        <aside aria-labelledby="contact" className="lg:sticky lg:top-24 lg:self-start" data-reveal>
          <div className="glass rounded-2xl p-6">
            <h2 id="contact" className="font-display text-xl font-semibold text-ink">Email support</h2>
            <p className="mt-2 text-[0.95rem] text-muted">
              For help, feedback, prompt suggestions, privacy questions or data requests.
            </p>
            <a
              href={`mailto:${SITE.supportEmail}?subject=${encodeURIComponent('PromptSpark support')}`}
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-strong to-[#4f8ff0] px-5 font-semibold text-white hover:brightness-110"
            >
              <IconMail width={18} height={18} /> {SITE.supportEmail}
            </a>
            <p className="mt-4 text-sm text-subtle">
              Helpful to include: your phone model, Android version, the PromptSpark version (Settings › About PromptSpark), and what you
              expected to happen.
            </p>
          </div>
        </aside>

        <section aria-labelledby="faq">
          <h2 id="faq" className="font-display text-2xl font-semibold text-ink" data-reveal>
            Frequently asked questions
          </h2>
          <div className="mt-6 grid gap-3">
            {FAQ.map((f) => (
              <details key={f.q} className="glass group rounded-2xl px-5 py-4 [&_summary::-webkit-details-marker]:hidden" data-reveal>
                <summary className="flex min-h-8 cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
                  {f.q}
                  <span aria-hidden className="text-xl text-subtle transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="prose-ps mt-3 text-[0.95rem]">{f.a}</div>
              </details>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
