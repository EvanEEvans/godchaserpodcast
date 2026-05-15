import Link from "next/link";
import { SITE } from "@/lib/site";
import { NewsletterSignup } from "@/components/newsletter-signup";

export function BSPCTA() {
  return (
    <aside className="my-12 rounded-2xl bg-bg-deep p-8 md:p-10 text-text-inverse">
      <p className="text-[0.7rem] tracking-[0.32em] uppercase font-semibold text-accent">
        Bible Study Pro
      </p>
      <h3 className="mt-3 font-display uppercase text-2xl md:text-3xl tracking-[0.01em] text-text-inverse">
        Study Scripture with Scripture.
      </h3>
      <p className="mt-3 text-text-inverse/80 max-w-xl leading-relaxed">
        Guided tracks, deep dives, every book of the Bible. Built on one
        principle: Scripture interprets Scripture.
      </p>
      <a
        href={SITE.bspUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent text-text px-6 py-3 font-semibold uppercase tracking-[0.06em] text-sm hover:bg-accent-deep transition-colors"
      >
        Open Bible Study Pro <span aria-hidden>→</span>
      </a>
    </aside>
  );
}

export function BookCTA() {
  return (
    <aside className="my-12 rounded-2xl bg-bg-subtle border-l-4 border-l-purple p-8 md:p-10">
      <p className="text-[0.7rem] tracking-[0.32em] uppercase font-semibold text-purple">
        The Book
      </p>
      <h3 className="mt-3 font-display uppercase text-2xl md:text-3xl tracking-[0.01em] text-text">
        Keep reading where this left off.
      </h3>
      <p className="mt-3 text-text-dim max-w-xl leading-relaxed">
        The Godchaser book starts with a chapter you can read free. The rest is
        a few clicks away.
      </p>
      <Link
        href="/book"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-purple text-text-inverse px-6 py-3 font-semibold uppercase tracking-[0.06em] text-sm hover:bg-purple-hover transition-colors"
      >
        Read the first chapter <span aria-hidden>→</span>
      </Link>
    </aside>
  );
}

export function NewsletterCTA() {
  return <NewsletterSignup variant="inline" />;
}
