import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Button } from "@/components/button";
import { PLATFORMS, SITE, UNIVERSE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Ev Evans and the Godchaser ministry — a content hub and discipleship platform built on one Book.",
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-wash">
        <Container>
          <div className="pt-24 pb-12">
            <p className="text-xs tracking-[0.28em] uppercase text-accent">
              About
            </p>
            <h1 className="mt-4 font-serif text-4xl md:text-5xl font-bold tracking-tight max-w-3xl">
              A community shaped by one Book.
            </h1>
          </div>
        </Container>
      </section>

      <Section>
        <Container size="reading">
          <div className="prose-reading">
            <h2>Who is Ev?</h2>
            <p>
              Ev Evans hosts the Godchaser Podcast, wrote the Godchaser book,
              and built Bible Study Pro — a guided way through every book of
              Scripture, anchored on one principle: Scripture interprets
              Scripture. He is a believer first, a teacher second, and a writer
              third, in that order.
            </p>
            <p>
              The Godchaser project started as one show with one mission: help
              people meet Jesus through the Word, not through tradition or
              celebrity. Over time it grew into a hub — podcast, book, music,
              clothes, and the study tool. Different doors. One Door behind
              them.
            </p>

            <h2>What we make</h2>
            <p>
              Four things live under the Godchaser name. They all point the
              same way.
            </p>
          </div>

          <div className="not-prose mt-10 grid gap-4 sm:grid-cols-2">
            {UNIVERSE.map((u) => {
              const inner = (
                <div className="card-hover h-full rounded-2xl border border-line bg-bg-elevated p-6">
                  <h3 className="font-serif text-xl font-semibold text-text">
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

          <div className="prose-reading mt-16">
            <h2>How we work</h2>
            <p>
              Everything we publish is anchored in Scripture. We do not soften
              the text for comfort. We do not weaponize it for clicks. We do
              not push denominational labels — the gospel is the trunk, and the
              gospel is enough.
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
              The Godchaser Podcast lives on every major platform. Pick yours:
            </p>
          </div>

          <div className="not-prose mt-6 flex flex-wrap gap-3">
            {PLATFORMS.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-line bg-bg-elevated px-4 py-2 text-sm text-text-dim hover:text-accent hover:border-accent transition-colors"
              >
                {p.name}
              </a>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-accent/40 bg-bg-elevated p-8">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold">
              Connect
            </h2>
            <p className="mt-3 text-text-dim max-w-xl">
              Questions, speaking invitations, partnerships, or just a hello —
              the contact page is the fastest way to reach us.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact">Contact</Button>
              <Button href={SITE.bspUrl} external variant="ghost">
                Open Bible Study Pro
              </Button>
            </div>
          </div>

          <p className="mt-12 text-center font-serif italic text-accent">
            Soso lobi.
          </p>
        </Container>
      </Section>
    </>
  );
}
