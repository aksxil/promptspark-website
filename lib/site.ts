/** Site-wide constants. Everything here is public. This site uses no secrets or environment keys. */
export const SITE = {
  name: 'PromptSpark',
  tagline: 'Discover. Copy. Create.',
  description:
    'PromptSpark is an Android app with a curated library of AI prompts. Browse 156 prompts in 12 categories, fill in the blanks, and copy them into the AI tools you already use.',
  url: 'https://promptspark.pages.dev',
  developer: 'Aksxil Studios',
  supportEmail: 'aksx3u@gmail.com',
  androidPackage: 'in.aksxil.promptspark',
  locale: 'en_IN',
  /** Effective date for the legal pages (Privacy, Terms, Data deletion). */
  legalUpdated: '31 October 2026',
  legalUpdatedIso: '2026-10-31',
} as const;

export const NAV = [
  { href: '/features/', label: 'Features' },
  { href: '/categories/', label: 'Categories' },
  { href: '/about/', label: 'About' },
  { href: '/support/', label: 'Support' },
] as const;

export const LEGAL_NAV = [
  { href: '/privacy/', label: 'Privacy Policy' },
  { href: '/terms/', label: 'Terms and Conditions' },
  { href: '/data-deletion/', label: 'Data deletion' },
] as const;
