'use client';

import { useEffect, useRef, useState } from 'react';

import { IconCheck, IconCopy } from '@/components/icons';
import type { SamplePrompt } from '@/content/sample-prompts';

/** Splits prompt text so [PLACEHOLDER] tokens can be highlighted, as in the app. */
function parts(text: string) {
  return text.split(/(\[[A-Z0-9 ]+\])/g).filter(Boolean);
}

export function PromptCard({ prompt, compact = false, headingLevel = 3 }: { prompt: SamplePrompt; compact?: boolean; headingLevel?: 2 | 3 }) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'failed'>('idle');
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const Heading = headingLevel === 2 ? 'h2' : 'h3';

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(prompt.text);
      setStatus('copied');
    } catch {
      setStatus('failed');
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus('idle'), 2200);
  }

  return (
    <article className="glass group relative flex h-full flex-col rounded-2xl p-5 sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full border border-line bg-bg/60 px-2.5 py-0.5 text-xs font-medium text-muted">{prompt.category}</span>
        <span className="rounded-full bg-ok/10 px-2.5 py-0.5 text-xs font-semibold text-ok">Free</span>
      </div>
      <Heading className="mt-4 font-display text-lg font-semibold leading-snug text-ink">{prompt.title}</Heading>
      <p className="mt-1 text-sm text-subtle">{prompt.description}</p>
      <p className={`mt-4 flex-1 font-mono text-[0.8rem] leading-relaxed text-muted ${compact ? 'line-clamp-6' : ''}`}>
        {parts(prompt.text).map((part, i) =>
          /^\[[A-Z0-9 ]+\]$/.test(part) ? (
            <mark key={i} className="rounded bg-violet/15 px-1 py-px text-[#cfc8ff]">
              {part}
            </mark>
          ) : (
            <span key={i}>{part}</span>
          ),
        )}
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
        <button
          type="button"
          onClick={copy}
          className="inline-flex min-h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-xl bg-gradient-to-r from-violet-strong to-[#4f8ff0] px-4 text-sm font-semibold text-white shadow-[0_8px_24px_-12px_rgba(124,108,242,0.9)] transition hover:brightness-110 active:scale-[0.98]"
        >
          {status === 'copied' ? <IconCheck width={18} height={18} /> : <IconCopy width={18} height={18} />}
          {status === 'copied' ? 'Copied' : 'Copy prompt'}
        </button>
        <span className="text-xs text-subtle" aria-live="polite">
          {status === 'copied'
            ? 'Paste it into your AI tool and fill in the [BRACKETS].'
            : status === 'failed'
              ? 'Copy is blocked here. Select the text instead.'
              : 'Fill the [BRACKETS] after pasting.'}
        </span>
      </div>
    </article>
  );
}
