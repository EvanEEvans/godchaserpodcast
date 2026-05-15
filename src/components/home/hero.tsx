import { Button } from "@/components/button";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden hero-wash">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8 pt-24 md:pt-40 pb-20 md:pb-32">
        <p className="fade-in-up text-xs tracking-[0.32em] uppercase text-accent">
          Introducing — Bible Study Pro
        </p>

        <h1 className="fade-in-up delay-100 mt-6 font-serif text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.05] tracking-tight max-w-[18ch]">
          Study the Bible like you&rsquo;ve never studied it before.
        </h1>

        <p className="fade-in-up delay-200 mt-6 text-lg md:text-xl text-text-dim max-w-[64ch] leading-relaxed">
          A guided, Spirit-led way through every book of Scripture. Tracks for
          new believers, deep-divers, and disciple-makers. Built around one
          principle — Scripture interprets Scripture.
        </p>

        <div className="fade-in-up delay-300 mt-10 flex flex-wrap items-center gap-4">
          <Button href={SITE.bspUrl} external size="lg">
            Open Bible Study Pro <span aria-hidden>→</span>
          </Button>
          <Button href="/about" variant="ghost" size="lg">
            Watch the 90-second tour
          </Button>
        </div>

        <dl className="fade-in-up delay-300 mt-16 grid gap-6 sm:grid-cols-3 max-w-3xl">
          {[
            ["66 books · 1,189 chapters", "one Author"],
            ["Free", "to start"],
            ["Built by a believer", "for believers"],
          ].map(([primary, secondary]) => (
            <div
              key={primary}
              className="rounded-2xl border border-line bg-bg-elevated p-5"
            >
              <dt className="font-serif text-base text-text">{primary}</dt>
              <dd className="text-xs uppercase tracking-[0.24em] text-text-muted mt-2">
                {secondary}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
