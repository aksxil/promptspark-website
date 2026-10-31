/**
 * A few Free prompts from the app's library, shown word-for-word. [UPPER CASE] tokens are the
 * placeholders the app lets you fill in. Never add Pro prompt text here.
 */
export interface SamplePrompt {
  id: string;
  categoryId: string;
  category: string;
  title: string;
  description: string;
  text: string;
}

export const SAMPLE_PROMPTS: readonly SamplePrompt[] = [
  {
    id: 'wri-01',
    categoryId: 'writing-communication',
    category: 'Writing & Communication',
    title: 'Polish a Professional Email',
    description: 'Make an email clear, polite, and concise.',
    text: 'Rewrite this email to be clear, professional, and concise while keeping my meaning: [EMAIL]. The recipient is [RECIPIENT]. Keep it under [WORD LIMIT] words, use a specific subject line, and put the main request in the first two sentences. Then list the main changes you made.',
  },
  {
    id: 'ape-03',
    categoryId: 'ai-photo-editing',
    category: 'AI Photo Editing',
    title: 'Gentle Old Photo Restoration',
    description: 'Repair scratches, fading, and blur on an old family photograph.',
    text: 'Restore the attached old photograph. Remove scratches, dust, creases, and stains. Recover detail in faces while keeping each person recognisable and true to the original; do not invent new features or change expressions. Correct fading and balance contrast. Keep the original framing and the period-appropriate look of clothing and setting. If the photo is black and white, keep it black and white. Output at the highest resolution available.',
  },
  {
    id: 'soc-01',
    categoryId: 'social-media',
    category: 'Social Media Content',
    title: '30-Day Content Calendar',
    description: 'A month of varied post ideas organised by format and goal.',
    text: 'Act as a social media strategist. Create a 30-day content calendar for a [NICHE] account on [PLATFORM]. My audience is [AUDIENCE]. Mix formats (carousel, Reel or short video, single image, story, text post) and goals (educate, entertain, build trust, sell). Present it as a table with columns: day, format, topic, hook line, and call to action. Avoid repeating the same angle twice in a week.',
  },
  {
    id: 'cod-01',
    categoryId: 'coding-claude-code',
    category: 'Coding & Claude Code',
    title: 'Explore the Codebase Before Changing It',
    description: 'Have your coding assistant map the relevant code before it writes anything.',
    text: 'Before making any changes, explore this repository to understand how [FEATURE AREA] works. Read the relevant files, trace the data flow from entry point to storage, and identify the main modules, their responsibilities, and any tests that cover this area. Then give me a short summary with file paths, the key functions involved, and any risks or unclear parts. Do not edit any files yet.',
  },
  {
    id: 'ree-01',
    categoryId: 'instagram-reels',
    category: 'Instagram Reels',
    title: '10 Scroll-Stopping Hooks',
    description: 'Opening lines that make viewers stay past the first two seconds.',
    text: 'Write 10 hooks for an Instagram Reel about [TOPIC]. Each hook must be under 10 words and work as both spoken words and on-screen text. Use different techniques: a surprising fact, a bold claim, a question, a mistake to avoid, a before/after, and a "you are doing this wrong" angle. Label the technique used for each.',
  },
  {
    id: 'prd-01',
    categoryId: 'productivity',
    category: 'Productivity',
    title: 'Weekly Plan From a Messy Task List',
    description: 'Turn a brain dump into a realistic week.',
    text: 'Here is everything on my mind this week: [TASK LIST]. My fixed commitments are: [COMMITMENTS]. Organise this into a realistic weekly plan. Group similar tasks, estimate time for each, schedule the most important work in my best focus hours ([FOCUS HOURS]), leave buffer time, and list what should be postponed or dropped. Present it day by day.',
  },
];

export const HERO_PROMPT = SAMPLE_PROMPTS[0];
