import Link from 'next/link';
import type { ReactNode } from 'react';

import { IconArrowRight } from '@/components/icons';

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#c4bbff]">
      {children}
    </p>
  );
}

export function SectionHeading({ eyebrow, title, intro, id }: { eyebrow?: string; title: ReactNode; intro?: ReactNode; id?: string }) {
  return (
    <div className="max-w-2xl" data-reveal>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 id={id} className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {intro ? <p className="mt-4 text-lg text-muted">{intro}</p> : null}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  className = '',
}: {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}) {
  const base =
    'inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 text-[0.95rem] font-semibold transition active:scale-[0.98]';
  const styles =
    variant === 'primary'
      ? 'bg-gradient-to-r from-violet-strong to-[#4f8ff0] text-white shadow-[0_12px_32px_-14px_rgba(124,108,242,0.95)] hover:brightness-110'
      : 'border border-line bg-surface/80 text-ink hover:border-violet/60';
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
      {variant === 'primary' ? <IconArrowRight width={18} height={18} /> : null}
    </Link>
  );
}

/** Honest availability label: the app is not on Google Play yet, so no store badge or link. */
export function AvailabilityPill() {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 text-sm text-muted">
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-pulse-soft rounded-full bg-blue" />
        <span className="relative inline-flex size-2 rounded-full bg-blue" />
      </span>
      Coming soon to Google Play · Android
    </p>
  );
}

/** Top block for inner pages. */
export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-line-soft">
      <div className="grid-backdrop pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[46rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(124,108,242,0.28),transparent)] blur-2xl"
        aria-hidden
      />
      <Container className="relative py-16 sm:py-20">
        <div className="max-w-3xl animate-rise">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">{title}</h1>
          <div className="mt-5 text-lg text-muted">{intro}</div>
        </div>
      </Container>
    </section>
  );
}

/** Layout for Privacy, Terms and Data deletion: a sticky table of contents on wide screens. */
export function LegalLayout({
  eyebrow,
  title,
  intro,
  updated,
  toc,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: ReactNode;
  updated: string;
  toc: { id: string; label: string }[];
  children: ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={<><p>{intro}</p><p className="mt-3 text-sm text-subtle">Last updated: {updated}</p></>} />
      <Container className="grid gap-12 py-14 lg:grid-cols-[15rem_1fr]">
        <nav aria-label="On this page" className="hidden lg:block">
          <div className="sticky top-24">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-subtle">On this page</p>
            <ul className="mt-3 grid gap-1.5 text-sm">
              {toc.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} className="inline-flex min-h-7 items-center text-muted hover:text-ink">{t.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <div className="prose-ps max-w-3xl">{children}</div>
      </Container>
    </>
  );
}

export function Callout({ children, tone = 'info' }: { children: ReactNode; tone?: 'info' | 'warn' }) {
  return (
    <div
      className={`rounded-2xl border p-5 text-[0.95rem] ${
        tone === 'warn' ? 'border-warn/30 bg-warn/5 text-[#f6dca6]' : 'border-blue/25 bg-blue/5 text-[#cfe3ff]'
      }`}
    >
      {children}
    </div>
  );
}
