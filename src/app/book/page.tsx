import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { MDXContent } from "@/components/mdx/mdx-content";
import { readBookFile } from "@/lib/book";

export const metadata: Metadata = {
  title: "The Book",
  description:
    "The Godchaser book — read the first chapter free. The chase begins with a Person, not a program.",
};

export default function BookPage() {
  const chapterOne = readBookFile("chapter-1.mdx");

  return (
    <>
      <section className="pt-16 md:pt-20 pb-12">
        <Container>
          <div className="rounded-3xl bg-bg-elevated border border-line overflow-hidden">
            <div className="grid gap-10 md:gap-12 md:grid-cols-[1.1fr_1fr] md:items-center p-8 md:p-14">
              <div>
                <p className="text-[0.7rem] tracking-[0.32em] uppercase font-semibold text-purple">
                  The Book
                </p>
                <h1 className="mt-4 font-display uppercase text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[0.01em] text-text">
                  The Godchaser.
                </h1>
                <p className="mt-6 text-lg text-text-dim max-w-xl leading-relaxed">
                  A book for people who have decided drifting won&rsquo;t do.
                  Bible-soaked, Christ-centered, written for the chase.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#sample"
                    className="inline-flex items-center gap-2 rounded-full bg-purple text-text-inverse px-6 py-3 text-sm font-semibold uppercase tracking-[0.06em] hover:bg-purple-hover transition-colors"
                  >
                    Read the first chapter ↓
                  </a>
                  <a
                    href="https://godchaser.faith"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-accent text-text px-6 py-3 text-sm font-semibold uppercase tracking-[0.06em] hover:bg-accent-deep transition-colors"
                  >
                    Buy the book
                  </a>
                </div>
                <p className="mt-3 text-xs text-text-muted">
                  Buy links: Amazon and direct — Ev to confirm.
                </p>
              </div>

              <BookCover />
            </div>
          </div>
        </Container>
      </section>

      <Section id="sample">
        <Container size="narrow">
          <div className="rounded-3xl bg-bg-elevated border border-line p-8 md:p-14">
            <p className="text-[0.7rem] tracking-[0.32em] uppercase font-semibold text-purple">
              Sample Chapter
            </p>
            <h2 className="mt-3 font-display uppercase text-4xl md:text-5xl tracking-[0.01em] text-text">
              Chapter One.
            </h2>
            <div className="prose-reading mt-10 mx-auto">
              <MDXContent source={chapterOne} />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <p className="text-[0.7rem] tracking-[0.32em] uppercase font-semibold text-purple">
            More books
          </p>
          <h2 className="mt-3 font-display uppercase text-3xl md:text-4xl tracking-[0.01em] text-text">
            On the way.
          </h2>
          <p className="mt-4 max-w-xl text-text-dim leading-relaxed">
            More titles are coming — companions for the chase, study guides,
            and devotionals. We&rsquo;ll announce them here first.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-2xl bg-bg-elevated border-2 border-dashed border-line p-8 min-h-[180px] flex flex-col justify-between"
              >
                <p className="text-[0.7rem] tracking-[0.28em] uppercase font-semibold text-text-muted">
                  Coming soon
                </p>
                <p className="text-xl text-text-muted italic">
                  Title in progress
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

function BookCover() {
  return (
    <div className="relative aspect-[3/4] max-w-sm w-full mx-auto md:ml-auto md:mr-0">
      <div
        aria-hidden
        className="absolute -inset-4 rounded-[2rem] blur-2xl"
        style={{ background: "var(--purple-glow)" }}
      />
      <svg
        viewBox="0 0 300 400"
        className="relative w-full h-full drop-shadow-2xl rounded"
        aria-hidden
      >
        <defs>
          <linearGradient id="cover-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2a2d5a" />
            <stop offset="100%" stopColor="#0f1226" />
          </linearGradient>
          <linearGradient id="cover-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f6e979" />
            <stop offset="100%" stopColor="#d4c54a" />
          </linearGradient>
        </defs>
        <rect width="300" height="400" rx="6" fill="url(#cover-bg)" />
        <rect
          x="10"
          y="10"
          width="280"
          height="380"
          rx="4"
          fill="none"
          stroke="url(#cover-stroke)"
          strokeWidth="0.8"
          opacity="0.5"
        />
        <g
          stroke="url(#cover-stroke)"
          strokeWidth="1"
          fill="none"
          opacity="0.7"
        >
          <circle cx="150" cy="170" r="60" />
          <circle cx="150" cy="170" r="42" opacity="0.6" />
          <circle cx="150" cy="170" r="22" opacity="0.4" />
        </g>
        <text
          x="150"
          y="280"
          textAnchor="middle"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize="20"
          letterSpacing="6"
          fontWeight="600"
          fill="#ffffff"
        >
          THE
        </text>
        <text
          x="150"
          y="312"
          textAnchor="middle"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize="30"
          letterSpacing="3"
          fontWeight="700"
          fill="#ffffff"
        >
          GODCHASER
        </text>
        <text
          x="150"
          y="352"
          textAnchor="middle"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize="10"
          letterSpacing="3"
          fontWeight="600"
          fill="#f6e979"
        >
          EV EVANS
        </text>
      </svg>
    </div>
  );
}
