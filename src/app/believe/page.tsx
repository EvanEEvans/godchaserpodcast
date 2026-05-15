import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { BELIEFS } from "@/lib/site";

export const metadata: Metadata = {
  title: "What We Believe",
  description:
    "The Godchaser Statement of Faith. Twelve things, all from the Book.",
};

export default function BelievePage() {
  return (
    <>
      <section className="hero-wash">
        <Container>
          <div className="pt-24 pb-16">
            <p className="text-xs tracking-[0.28em] uppercase text-accent">
              Statement of Faith
            </p>
            <h1 className="mt-4 font-serif text-4xl md:text-5xl font-bold tracking-tight">
              What we believe.
            </h1>
            <p className="mt-5 text-lg text-text-dim max-w-2xl">
              Twelve things, all from the Book. These are non-negotiable for us,
              and we believe they are clear in Scripture for any honest reader.
            </p>

            <blockquote className="mt-10 max-w-2xl border-l-2 border-accent pl-6 font-serif italic text-lg text-text-dim">
              For I am not ashamed of the gospel, for it is the power of God for
              salvation to everyone who believes.
              <span className="block mt-2 not-italic text-xs uppercase tracking-[0.24em] text-text-muted">
                — Romans 1:16
              </span>
            </blockquote>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <ol className="grid gap-6 md:grid-cols-2">
            {BELIEFS.map((b, i) => (
              <li
                key={b.title}
                className="rounded-2xl border border-line border-l-2 border-l-accent bg-bg-elevated p-6"
              >
                <p className="text-xs tracking-[0.24em] uppercase text-text-muted">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 font-serif text-2xl font-semibold text-text">
                  {b.title}
                </h2>
                <p className="mt-3 text-text-dim leading-relaxed">{b.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="elevated">
        <Container size="reading">
          <p className="text-xs tracking-[0.28em] uppercase text-accent">
            For the seeker
          </p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl font-semibold">
            Never said yes to Jesus?
          </h2>
          <p className="mt-4 text-lg text-text-dim leading-relaxed">
            Then everything above is news for you — good news. The simplest
            place to start is the next page.
          </p>
          <Link
            href="/believe/begin"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent text-bg px-6 py-3 font-medium hover:bg-accent-hover transition-colors"
          >
            Start here <span aria-hidden>→</span>
          </Link>
        </Container>
      </Section>
    </>
  );
}
