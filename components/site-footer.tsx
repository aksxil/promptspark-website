import Image from 'next/image';
import Link from 'next/link';

import { LEGAL_NAV, NAV, SITE } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line-soft bg-bg-deep/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5 rounded-lg">
            <Image src="/brand/icon-96.png" alt="" width={32} height={32} className="rounded-[9px]" />
            <span className="font-display text-lg font-semibold text-ink">{SITE.name}</span>
          </Link>
          <p className="mt-3 max-w-sm text-sm text-muted">
            A curated library of AI prompts for Android. Copy a prompt, fill in the blanks, and use it in the AI tool you
            already prefer.
          </p>
          <p className="mt-4 text-sm text-subtle">
            Developed by <span className="text-muted">{SITE.developer}</span>
          </p>
          <p className="mt-1 text-sm">
            <a href={`mailto:${SITE.supportEmail}`} className="inline-flex min-h-7 items-center text-blue underline-offset-4 hover:underline">
              {SITE.supportEmail}
            </a>
          </p>
        </div>

        <nav aria-label="Product">
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-subtle">Product</h2>
          <ul className="mt-3 grid gap-2 text-sm">
            <li><Link className="inline-flex min-h-7 items-center text-muted hover:text-ink" href="/">Home</Link></li>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link className="inline-flex min-h-7 items-center text-muted hover:text-ink" href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Legal">
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-subtle">Legal</h2>
          <ul className="mt-3 grid gap-2 text-sm">
            {LEGAL_NAV.map((item) => (
              <li key={item.href}>
                <Link className="inline-flex min-h-7 items-center text-muted hover:text-ink" href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-line-soft">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-subtle sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {SITE.developer}. All rights reserved.</p>
          <p>
            PromptSpark is a prompt library. It does not generate images or text, and it is not affiliated with OpenAI,
            Google, Anthropic, or any other AI provider.
          </p>
        </div>
      </div>
    </footer>
  );
}
