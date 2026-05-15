import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { MDXContent } from "@/components/mdx/mdx-content";
import { Button } from "@/components/button";
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
      <section className="hero-wash">
        <Container>
          <div className="pt-24 pb-16 grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
            <div>
              <p className="text-xs tracking-[0.28em] uppercase text-accent">
                The Book
              </p>
              <h1 className="mt-4 font-serif text-4xl md:text-5xl font-bold tracking-tight">
                The Godchaser.
              </h1>
              <p className="mt-5 text-lg text-text-dim max-w-xl">
                A book for people who have decided drifting won&rsquo;t do.
                Bible-soaked, Christ-centered, written for the chase.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="#sample" size="lg">
                  Read the first chapter ↓
                </Button>
                <Button
                  href="https://godchaser.faith"
                  external
                  variant="ghost"
                  size="lg"
                >
                  Buy the book
                </Button>
              </div>
              <p className="mt-3 text-xs text-text-muted">
                Buy links: Amazon and direct — Ev to confirm.
              </p>
            </div>

            <BookCover />
          </div>
        </Container>
      </section>

      <Section id="sample">
        <Container size="reading">
          <p className="text-xs tracking-[0.28em] uppercase text-text-muted">
            Sample Chapter
          </p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl font-semibold">
            Chapter One.
          </h2>
          <div className="prose-reading mt-10">
            <MDXContent source={chapterOne} />
          </div>
        </Container>
      </Section>

      <Section tone="elevated">
        <Container>
          <p className="text-xs tracking-[0.28em] uppercase text-text-muted">
            More books
          </p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl font-semibold">
            On the way.
          </h2>
          <p className="mt-4 max-w-xl text-text-dim">
            More titles are coming — companions for the chase, study guides,
            and devotionals. We&rsquo;ll announce them here first.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-2xl border border-line border-dashed bg-bg-elevated p-8 min-h-[180px] flex flex-col justify-between"
              >
                <p className="text-xs tracking-[0.24em] uppercase text-text-muted">
                  Coming soon
                </p>
                <p className="font-serif text-xl text-text-dim italic">
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
      <svg
        viewBox="0 0 300 400"
        className="w-full h-full drop-shadow-2xl"
        aria-hidden
      >
        <defs>
          <linearGradient id="cover-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2a2d5a" />
            <stop offset="100%" stopColor="#0f1226" />
          </linearGradient>
          <linearGradient id="cover-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e6c155" />
            <stop offset="100%" stopColor="#b89a3e" />
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
          fontFamily="serif"
          fontSize="22"
          letterSpacing="6"
          fill="#ffffff"
        >
          THE
        </text>
        <text
          x="150"
          y="310"
          textAnchor="middle"
          fontFamily="serif"
          fontSize="28"
          letterSpacing="2"
          fill="#ffffff"
        >
          GODCHASER
        </text>
        <text
          x="150"
          y="350"
          textAnchor="middle"
          fontFamily="serif"
          fontSize="10"
          letterSpacing="3"
          fill="#e6c155"
        >
          EV EVANS
        </text>
      </svg>
    </div>
  );
}
