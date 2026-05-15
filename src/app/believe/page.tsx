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
      <section className="pt-16 md:pt-20 pb-12">
        <Container>
          <p className="text-[0.7rem] tracking-[0.32em] uppercase font-semibold text-purple">
            Statement of Faith
          </p>
          <h1 className="mt-4 font-display uppercase text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[0.01em] text-text">
            What we believe.
          </h1>
          <p className="mt-6 text-lg text-text-dim max-w-2xl leading-relaxed">
            Twelve things, all from the Book. These are non-negotiable for us,
            and we believe they are clear in Scripture for any honest reader.
          </p>

          <blockquote className="mt-10 max-w-2xl border-l-4 border-accent pl-6 italic text-lg text-text-dim">
            For I am not ashamed of the gospel, for it is the power of God for
            salvation to everyone who believes.
            <span className="block mt-3 not-italic text-[0.7rem] uppercase tracking-[0.28em] font-semibold text-accent-deep">
              — Romans 1:16
            </span>
          </blockquote>
        </Container>
      </section>

      <Section>
        <Container>
          <ol className="grid gap-6 md:grid-cols-2">
            {BELIEFS.map((b, i) => (
              <li
                key={b.title}
                className="rounded-2xl bg-bg-elevated border border-line border-l-4 border-l-purple p-6"
              >
                <p className="text-[0.7rem] tracking-[0.28em] uppercase font-semibold text-purple">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 font-display uppercase text-2xl md:text-3xl tracking-[0.01em] text-text">
                  {b.title}
                </h2>
                <p className="mt-3 text-text-dim leading-relaxed">{b.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="navy">
        <Container size="reading">
          <p className="text-[0.7rem] tracking-[0.32em] uppercase font-semibold text-accent">
            For the seeker
          </p>
          <h2 className="mt-3 font-display uppercase text-3xl md:text-5xl tracking-[0.01em] text-text-inverse">
            Never said yes to Jesus?
          </h2>
          <p className="mt-4 text-lg text-text-inverse/80 leading-relaxed">
            Then everything above is news for you — good news. The simplest
            place to start is the next page.
          </p>
          <Link
            href="/believe/begin"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent text-text px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.06em] hover:bg-accent-deep transition-colors"
          >
            Start here <span aria-hidden>→</span>
          </Link>
        </Container>
      </Section>
    </>
  );
}
