import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { PLATFORMS, SITE, UNIVERSE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Ev Evans and the Godchaser ministry — a content hub and discipleship platform built on one Book.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-16 md:pt-20 pb-12">
        <Container>
          <p className="text-[0.7rem] tracking-[0.32em] uppercase font-semibold text-purple">
            About
          </p>
          <h1 className="mt-4 font-display uppercase text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[0.01em] text-text max-w-3xl">
            A community shaped by one Book.
          </h1>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="rounded-3xl bg-bg-elevated border border-line overflow-hidden">
            <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center p-8 md:p-12">
              <div className="relative w-full max-w-[320px] aspect-square mx-auto md:mx-0">
                <div
                  aria-hidden
                  className="absolute -inset-4 rounded-[2rem] blur-2xl"
                  style={{ background: "var(--purple-glow)" }}
                />
                <Image
                  src="/godchaser-cover.png"
                  alt="The Godchaser Podcast with Evan Evans"
                  width={1024}
                  height={1024}
                  sizes="(max-width: 768px) 80vw, 320px"
                  className="relative rounded-2xl border border-line w-full h-auto"
                />
              </div>
              <div className="prose-reading">
                <h2>Who is Ev?</h2>
                <p>
                  Ev Evans hosts the Godchaser Podcast, wrote the Godchaser
                  book, and built Bible Study Pro — a guided way through every
                  book of Scripture, anchored on one principle: Scripture
                  interprets Scripture. He is a believer first, a teacher
                  second, and a writer third, in that order.
                </p>
                <p>
                  The Godchaser project started as one show with one mission:
                  help people meet Jesus through the Word, not through tradition
                  or celebrity. Over time it grew into a hub — podcast, book,
                  music, clothes, and the study tool. Different doors. One Door
                  behind them.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <p className="text-[0.7rem] tracking-[0.32em] uppercase font-semibold text-purple">
            What we make
          </p>
          <h2 className="mt-3 font-display uppercase text-3xl md:text-4xl tracking-[0.01em] text-text">
            Four doors. One Door behind them.
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {UNIVERSE.map((u) => {
              const inner = (
                <div className="card-hover h-full rounded-2xl bg-bg-elevated border border-line p-6">
                  <h3 className="font-display uppercase text-xl tracking-[0.02em] text-text">
                    {u.name}
                  </h3>
                  <p className="mt-2 text-text-dim text-[0.95rem]">{u.blurb}</p>
                </div>
              );
              return u.external ? (
                <a
                  key={u.name}
                  href={u.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {inner}
                </a>
              ) : (
                <Link key={u.name} href={u.href}>
                  {inner}
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="reading">
          <div className="rounded-3xl bg-bg-elevated border border-line p-8 md:p-12">
            <div className="prose-reading">
              <h2>How we work</h2>
              <p>
                Everything we publish is anchored in Scripture. We do not
                soften the text for comfort. We do not weaponize it for clicks.
                We do not push denominational labels — the gospel is the trunk,
                and the gospel is enough.
              </p>
              <p>
                The teaching is free. Bible Study Pro is free to start. The
                podcast is everywhere. The book is at cost or close to it. If
                something ever costs money on this site, it is because the cost
                of making it is real — never because we are trying to gate the
                gospel.
              </p>

              <h2>Listen anywhere</h2>
              <p>
                The Godchaser Podcast lives on every major platform. Pick
                yours:
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {PLATFORMS.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border-2 border-purple/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-purple hover:bg-purple hover:text-text-inverse hover:border-purple transition-colors"
                >
                  {p.name}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="navy">
        <Container size="reading">
          <p className="text-[0.7rem] tracking-[0.32em] uppercase font-semibold text-accent">
            Connect
          </p>
          <h2 className="mt-3 font-display uppercase text-3xl md:text-5xl tracking-[0.01em] text-text-inverse">
            Say hello.
          </h2>
          <p className="mt-4 text-lg text-text-inverse/80 max-w-xl leading-relaxed">
            Questions, speaking invitations, partnerships, or just a hello —
            the contact page is the fastest way to reach us.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent text-text px-6 py-3 text-sm font-semibold uppercase tracking-[0.06em] hover:bg-accent-deep transition-colors"
            >
              Contact
            </Link>
            <a
              href={SITE.bspUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-text-inverse/30 text-text-inverse px-6 py-3 text-sm font-medium hover:bg-text-inverse hover:text-text hover:border-text-inverse transition-colors"
            >
              Open Bible Study Pro
            </a>
          </div>
          <p className="mt-10 italic text-accent">Soso lobi.</p>
        </Container>
      </Section>
    </>
  );
}
