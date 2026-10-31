/**
 * Facts about the PromptSpark app, copied from the app's bundled library
 * (AiPhoto/src/data). Keep this in sync when the app's library changes:
 * `npm run check:facts` compares it with a local checkout of the app.
 * Only Free prompt text is ever published on this site.
 */

export interface CategoryFact {
  id: string;
  name: string;
  shortName: string;
  description: string;
  group: 'Photo & visuals' | 'Creators' | 'Code & web' | 'Work & writing';
  total: number;
  free: number;
  pro: number;
}

export const CATEGORIES: readonly CategoryFact[] = [
  { id: 'ai-photo-editing', name: 'AI Photo Editing', shortName: 'Photo Editing', description: 'Edit, restyle, and retouch your own photos with image-capable AI tools.', group: 'Photo & visuals', total: 13, free: 12, pro: 1 },
  { id: 'portrait-photography', name: 'Portrait Photography', shortName: 'Portraits', description: 'Studio, outdoor, and editorial portrait looks with precise lighting language.', group: 'Photo & visuals', total: 13, free: 10, pro: 3 },
  { id: 'couple-romantic', name: 'Couple & Romantic Prompts', shortName: 'Couples', description: 'Tasteful, warm scenes for couples, anniversaries, and celebrations.', group: 'Photo & visuals', total: 13, free: 13, pro: 0 },
  { id: 'cinematic-photography', name: 'Cinematic Photography', shortName: 'Cinematic', description: 'Film-inspired frames, colour grades, and dramatic storytelling shots.', group: 'Photo & visuals', total: 13, free: 10, pro: 3 },
  { id: 'social-media', name: 'Social Media Content', shortName: 'Social Media', description: 'Captions, content calendars, and post ideas for every platform.', group: 'Creators', total: 13, free: 11, pro: 2 },
  { id: 'instagram-reels', name: 'Instagram Reels', shortName: 'Reels', description: 'Hooks, scripts, and shot lists for short-form vertical video.', group: 'Creators', total: 13, free: 11, pro: 2 },
  { id: 'youtube-thumbnails', name: 'YouTube & Thumbnails', shortName: 'YouTube', description: 'Titles, scripts, descriptions, and thumbnail concepts that earn the click.', group: 'Creators', total: 13, free: 11, pro: 2 },
  { id: 'coding-claude-code', name: 'Coding & Claude Code', shortName: 'Coding', description: 'Prompts for coding assistants: planning, debugging, reviews, and refactors.', group: 'Code & web', total: 13, free: 10, pro: 3 },
  { id: 'web-development', name: 'Website Development', shortName: 'Web Dev', description: 'Landing pages, components, accessibility, and performance work.', group: 'Code & web', total: 13, free: 11, pro: 2 },
  { id: 'business-marketing', name: 'Business & Marketing', shortName: 'Business', description: 'Positioning, campaigns, offers, and customer research.', group: 'Work & writing', total: 13, free: 9, pro: 4 },
  { id: 'productivity', name: 'Productivity', shortName: 'Productivity', description: 'Planning, prioritising, studying, and getting focused work done.', group: 'Work & writing', total: 13, free: 12, pro: 1 },
  { id: 'writing-communication', name: 'Writing & Communication', shortName: 'Writing', description: 'Emails, editing, presentations, and clear professional writing.', group: 'Work & writing', total: 13, free: 12, pro: 1 },
];

export const TOTALS = {
  prompts: CATEGORIES.reduce((n, c) => n + c.total, 0),
  free: CATEGORIES.reduce((n, c) => n + c.free, 0),
  pro: CATEGORIES.reduce((n, c) => n + c.pro, 0),
  categories: CATEGORIES.length,
} as const;

/** The four Pro collections in the app. Pro purchases are not available yet. */
export const PRO_COLLECTIONS = [
  { title: 'Cinematic Portrait Studio', subtitle: 'Editorial lighting and film looks' },
  { title: 'Creator Growth Kit', subtitle: 'Hooks, series, and repurposing systems' },
  { title: 'Claude Code Power Workflows', subtitle: 'Plan, test, refactor, and ship' },
  { title: 'Small Business Launch Kit', subtitle: 'Offers, pricing, and launch messaging' },
] as const;

/** Advanced customisation options in the app (a Pro feature, not available yet). */
export const ADVANCED_OPTIONS = ['Aspect ratio', 'Detail level', 'Response length', 'Tone', 'Output format'] as const;
