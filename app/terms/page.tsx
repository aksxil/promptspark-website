import type { Metadata } from 'next';
import Link from 'next/link';

import { LegalLayout } from '@/components/ui';
import { pageMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Terms and Conditions',
  description: 'The terms for using the PromptSpark app and website, including how you may use the prompts, third-party AI tools, ads, purchases and governing law.',
  path: '/terms/',
});

const TOC = [
  { id: 'agreement', label: 'Agreement' },
  { id: 'service', label: 'What PromptSpark is' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'licence', label: 'Your licence to the app' },
  { id: 'prompts', label: 'Using the prompts' },
  { id: 'responsible', label: 'Responsible use' },
  { id: 'restrictions', label: 'Restrictions' },
  { id: 'third-party', label: 'Third-party AI tools' },
  { id: 'ads', label: 'Ads' },
  { id: 'pro', label: 'Pro and purchases' },
  { id: 'ip', label: 'Ownership' },
  { id: 'disclaimers', label: 'Disclaimers' },
  { id: 'liability', label: 'Limitation of liability' },
  { id: 'changes', label: 'Changes and termination' },
  { id: 'law', label: 'Governing law' },
  { id: 'contact', label: 'Contact' },
];

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms and Conditions"
      intro="Please read these terms before using PromptSpark. They’re written to be clear; if anything is unclear, email us."
      updated={SITE.legalUpdated}
      toc={TOC}
    >
      <h2 id="agreement">1. Agreement</h2>
      <p>
        These Terms and Conditions (“Terms”) are an agreement between you and {SITE.developer} (“we”, “us”) for your use of the
        PromptSpark Android app (“the app”) and the website at <a href={SITE.url}>{SITE.url.replace('https://', '')}</a>{' '}
        (together, “PromptSpark”). By installing or using PromptSpark, you agree to these Terms and to our{' '}
        <Link href="/privacy/">Privacy Policy</Link>. If you don’t agree, please don’t use PromptSpark.
      </p>

      <h2 id="service">2. What PromptSpark is</h2>
      <p>
        PromptSpark is a library of written prompts that you can browse, customise, copy and share. It doesn’t contain an AI
        model, doesn’t connect to AI services, and doesn’t generate images, text or any other content. Any output is produced
        by the third-party AI tool you choose to use the prompt with.
      </p>

      <h2 id="eligibility">3. Eligibility</h2>
      <p>
        PromptSpark is not intended for children under 13. If you are under 18 (or the age of majority where you live), use it
        only with the involvement and consent of a parent or guardian.
      </p>

      <h2 id="licence">4. Your licence to the app</h2>
      <p>
        We give you a personal, non-exclusive, non-transferable, revocable licence to install and use the app on Android
        devices you own or control, under these Terms and the terms of the store you downloaded it from (such as Google Play).
      </p>

      <h2 id="prompts">5. Using the prompts</h2>
      <p>
        You may copy, adapt and use individual prompts from PromptSpark for <strong>personal and commercial purposes</strong>,
        including creating content for your business or clients, <strong>subject to the terms and policies of the AI tools</strong>{' '}
        you use them with. You don’t need to credit PromptSpark.
      </p>
      <p>
        You are responsible for the content you create with any AI tool, including checking that it is accurate, lawful and
        suitable for your purpose, and that you have the rights you need to use it.
      </p>

      <h2 id="responsible">6. Responsible use</h2>
      <p>Don’t use PromptSpark, or content you create with its prompts, to:</p>
      <ul>
        <li>break any law or infringe anyone’s rights, including copyright, trademark, privacy and publicity rights;</li>
        <li>
          edit or create images of real people without the right to do so, or create deceptive or harmful depictions of
          anyone, including non-consensual intimate imagery;
        </li>
        <li>harass, defame, defraud or mislead others, or impersonate any person or organisation;</li>
        <li>create content that sexualises minors, promotes violence or hatred, or is otherwise unlawful or harmful.</li>
      </ul>
      <p>
        Many photo prompts ask an AI tool to edit an “attached photo”. Only upload photos you have the right to use, and
        follow the AI tool’s rules for images of people.
      </p>

      <h2 id="restrictions">7. Restrictions</h2>
      <p>You may not:</p>
      <ul>
        <li>
          republish, sell, sublicense or distribute the prompt library, or a substantial part of it, as a collection, for
          example in another app, website, e-book or prompt pack;
        </li>
        <li>scrape, bulk-copy or systematically extract prompts from the app or this website;</li>
        <li>
          copy, modify, decompile or reverse engineer the app, except where the law expressly allows it, or try to bypass any
          access controls such as Pro locks;
        </li>
        <li>use PromptSpark in a way that harms the service, other users or us.</li>
      </ul>

      <h2 id="third-party">8. Third-party AI tools</h2>
      <p>
        PromptSpark is independent and isn’t affiliated with, endorsed by or sponsored by OpenAI, Google, Anthropic or any
        other AI provider. Product names are used only to describe compatibility. Your use of any AI tool is governed by that
        tool’s own terms and privacy policy, and we aren’t responsible for its availability, behaviour or output.
      </p>

      <h2 id="ads">9. Ads</h2>
      <p>
        The free version shows ads provided by Google AdMob. Ads are the advertisers’ responsibility; we don’t endorse the
        products advertised. See the <Link href="/privacy/">Privacy Policy</Link> for how ad data is handled.
      </p>

      <h2 id="pro">10. Pro and purchases</h2>
      <p>
        <strong>PromptSpark Pro is not currently available for purchase.</strong> The app shows Pro content as previews and
        doesn’t accept payments. If we introduce Pro, it will be sold through Google Play, subject to Google Play’s terms,
        including its billing, cancellation and refund policies. We’ll update these Terms with the details before any purchase
        is offered.
      </p>

      <h2 id="ip">11. Ownership</h2>
      <p>
        PromptSpark, including the app, its design, the prompt library as a collection, the PromptSpark name and logo, and this
        website, belongs to {SITE.developer} and is protected by law. Except for the rights set out in sections 4 and 5, no
        rights are transferred to you. Feedback you send us may be used to improve PromptSpark without obligation to you.
      </p>

      <h2 id="disclaimers">12. Disclaimers</h2>
      <p>
        PromptSpark is provided “as is” and “as available”. To the extent permitted by law, we make no warranties, express or
        implied, including that the app will be uninterrupted or error-free, or that any prompt will produce a particular
        result in any AI tool. AI tools can produce inaccurate or unexpected output; review it before relying on it.
      </p>

      <h2 id="liability">13. Limitation of liability</h2>
      <p>
        To the extent permitted by law, {SITE.developer} won’t be liable for any indirect, incidental, special, consequential
        or punitive damages, or for loss of profits, data or goodwill, arising from your use of PromptSpark or of any content
        you create with third-party AI tools. Our total liability for any claim relating to PromptSpark is limited to the
        greater of the amount you paid us for PromptSpark in the 12 months before the claim and INR 1,000.
      </p>
      <p>
        Nothing in these Terms limits any rights you have as a consumer that cannot be limited by law, including under the
        Consumer Protection Act, 2019.
      </p>

      <h2 id="changes">14. Changes and termination</h2>
      <p>
        We may update PromptSpark and these Terms. If we make important changes, we’ll update the “Last updated” date and, where
        appropriate, tell you in the app. Continuing to use PromptSpark after changes take effect means you accept them. You
        can stop using PromptSpark at any time by uninstalling the app. We may suspend or end access if you seriously or
        repeatedly breach these Terms.
      </p>

      <h2 id="law">15. Governing law</h2>
      <p>
        These Terms are governed by the laws of India. Subject to any rights you have under consumer protection law, the courts
        of India have jurisdiction over any dispute arising from these Terms or PromptSpark. Before starting any formal
        dispute, please email us so we can try to resolve it.
      </p>

      <h2 id="contact">16. Contact</h2>
      <p>
        {SITE.developer} · <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>
      </p>
    </LegalLayout>
  );
}
