import Image from "next/image";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden hero-navy">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8 pt-20 md:pt-28 pb-16 md:pb-24">
        <div className="grid gap-10 md:gap-16 md:grid-cols-[1.05fr_0.95fr] items-center">
          {/* LEFT — text */}
          <div className="order-2 md:order-1">
            <div className="fade-in-up">
              <span className="text-[0.7rem] tracking-[0.32em] uppercase font-semibold text-text-inverse">
                Introducing — Bible Study Pro
              </span>
              <span
                aria-hidden
                className="mt-2 block h-[2px] w-12 bg-accent"
              />
            </div>

            <h1 className="fade-in-up delay-100 mt-7 font-display uppercase text-[clamp(2.6rem,5.6vw,4.6rem)] leading-[1.0] tracking-[0.01em] text-text-inverse">
              Study the Bible like you&rsquo;ve never studied it before.
            </h1>

            <p className="fade-in-up delay-200 mt-6 text-lg md:text-xl text-text-inverse/85 max-w-[58ch] leading-relaxed">
              A guided, Spirit-led way through every book of Scripture. Tracks
              for new believers, deep-divers, and disciple-makers. Built around
              one principle — Scripture interprets Scripture.
            </p>

            <div className="fade-in-up delay-300 mt-10 flex flex-wrap items-center gap-3">
              <a
                href={SITE.bspUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent text-text px-7 py-3.5 text-base font-semibold uppercase tracking-[0.06em] hover:bg-accent-deep transition-colors"
              >
                Open Bible Study Pro
                <span aria-hidden>→</span>
              </a>
              <a
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border-2 border-text-inverse/30 text-text-inverse px-7 py-3.5 text-base font-medium hover:border-text-inverse hover:bg-text-inverse hover:text-text transition-colors"
              >
                Watch the 90-second tour
              </a>
            </div>

            <dl className="fade-in-up delay-300 mt-12 grid gap-5 sm:grid-cols-3 max-w-2xl">
              {[
                ["66 books · 1,189 chapters", "one Author"],
                ["Free", "to start"],
                ["Built by a believer", "for believers"],
              ].map(([primary, secondary]) => (
                <div key={primary} className="flex flex-col">
                  <dt className="text-sm md:text-[0.95rem] text-text-inverse font-medium leading-snug">
                    {primary}
                  </dt>
                  <dd className="mt-1 text-[0.65rem] uppercase tracking-[0.24em] text-accent">
                    {secondary}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* RIGHT — podcast cover */}
          <div className="order-1 md:order-2 relative flex justify-center md:justify-end">
            <div className="relative w-full max-w-[440px] aspect-square">
              <div
                aria-hidden
                className="absolute -inset-6 rounded-[2rem] blur-2xl"
                style={{ background: "var(--purple-glow)" }}
              />
              <div
                aria-hidden
                className="absolute -inset-3 rounded-[1.5rem] blur-xl"
                style={{ background: "var(--accent-glow)" }}
              />
              <Image
                src="/godchaser-cover.png"
                alt="The Godchaser Podcast with Evan Evans"
                width={1024}
                height={1024}
                priority
                sizes="(max-width: 768px) 80vw, 440px"
                className="relative rounded-2xl shadow-2xl border border-text-inverse/10 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Soft lavender transition strip into the next section */}
      <div
        aria-hidden
        className="h-8 -mb-[1px]"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, var(--bg) 100%)",
        }}
      />
    </section>
  );
}
