import type { Metadata } from 'next';

import { ButtonLink, Container, Eyebrow } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-start justify-center py-24">
      <Eyebrow>404</Eyebrow>
      <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">This page doesn’t exist.</h1>
      <p className="mt-4 max-w-xl text-lg text-muted">The link may be old or mistyped. Try the home page or browse the prompt categories.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/">Go to the home page</ButtonLink>
        <ButtonLink href="/categories/" variant="secondary">
          Browse categories
        </ButtonLink>
      </div>
    </Container>
  );
}
