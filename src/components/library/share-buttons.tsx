"use client";

import { useState } from "react";

type Props = {
  url: string;
  title: string;
};

export function ShareButtons({ url, title }: Props) {
  const [copied, setCopied] = useState(false);

  const tweetHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    title,
  )}&url=${encodeURIComponent(url)}`;

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  }

  return (
    <div className="flex items-center gap-3">
      <a
        href={tweetHref}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border-2 border-purple/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-purple hover:bg-purple hover:text-text-inverse hover:border-purple transition-colors"
      >
        Share on X
      </a>
      <button
        type="button"
        onClick={copy}
        className="rounded-full border-2 border-purple/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-purple hover:bg-purple hover:text-text-inverse hover:border-purple transition-colors"
      >
        {copied ? "Link copied" : "Copy link"}
      </button>
    </div>
  );
}
