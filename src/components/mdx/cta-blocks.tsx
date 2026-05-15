import Link from "next/link";
import { SITE } from "@/lib/site";
import { NewsletterSignup } from "@/components/newsletter-signup";

export function BSPCTA() {
  return (
    <aside className="my-12 rounded-2xl border border-accent/40 bg-bg-elevated p-8">
      <p className="text-xs tracking-[0.24em] uppercase text-accent">
        Bible Study Pro
      </p>
      <h3 className="mt-3 font-display text-2xl md:text-3xl font-semibold">
        Study Scripture with Scripture.
      </h3>
      <p className="mt-3 text-text-dim max-w-xl">
        Guided tracks, deep dives, every book of the Bible. Built on one
        principle: Scripture interprets Scripture.
      </p>
      <a
        href={SITE.bspUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent text-bg px-5 py-3 font-medium hover:bg-accent-hover transition-colors"
      >
        Open Bible Study Pro <span aria-hidden>→</span>
      </a>
    </aside>
  );
}

export function BookCTA() {
  return (
    <aside className="my-12 rounded-2xl border border-line bg-bg-elevated p-8">
      <p className="text-xs tracking-[0.24em] uppercase text-text-muted">
        The Book
      </p>
      <h3 className="mt-3 font-display text-2xl md:text-3xl font-semibold">
        Keep reading where this left off.
      </h3>
      <p className="mt-3 text-text-dim max-w-xl">
        The Godchaser book starts with a chapter you can read free. The rest is
        a few clicks away.
      </p>
      <Link
        href="/book"
        className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-bg px-5 py-3 font-medium text-text hover:border-accent hover:text-accent transition-colors"
      >
        Read the first chapter <span aria-hidden>→</span>
      </Link>
    </aside>
  );
}

export function NewsletterCTA() {
  return <NewsletterSignup variant="inline" />;
}
