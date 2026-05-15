import Link from "next/link";
import { Section } from "@/components/section";
import { Container } from "@/components/container";
import { PLATFORMS, UNIVERSE } from "@/lib/site";

export function Universe() {
  return (
    <Section>
      <Container>
        <div className="max-w-2xl">
          <p className="text-[0.7rem] tracking-[0.32em] uppercase font-semibold text-purple">
            Beyond this page
          </p>
          <h2 className="mt-3 font-display uppercase text-3xl md:text-4xl tracking-[0.01em] text-text">
            Other places we make disciples.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {UNIVERSE.map((card) => (
            <UniverseCard key={card.name} card={card} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function UniverseCard({
  card,
}: {
  card: (typeof UNIVERSE)[number];
}) {
  // The podcast card hosts inline platform pills, so it can't be a single anchor.
  if (card.showPlatforms) {
    return (
      <div className="rounded-2xl bg-bg-deep border border-bg-deep p-8 flex flex-col">
        <h3 className="font-display uppercase text-2xl md:text-3xl tracking-[0.02em] text-text-inverse">
          {card.name}
        </h3>
        <p className="mt-3 text-text-inverse/80 leading-relaxed">
          {card.blurb}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {PLATFORMS.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-text-inverse/20 px-3 py-1.5 text-xs font-medium text-text-inverse hover:bg-accent hover:text-text hover:border-accent transition-colors"
            >
              {p.short}
            </a>
          ))}
        </div>
      </div>
    );
  }

  const inner = (
    <div className="card-hover h-full rounded-2xl bg-bg-deep border-2 border-bg-deep group-hover:border-accent p-8 flex flex-col transition-colors">
      <h3 className="font-display uppercase text-2xl md:text-3xl tracking-[0.02em] text-text-inverse group-hover:text-accent transition-colors">
        {card.name}
      </h3>
      <p className="mt-3 text-text-inverse/80 leading-relaxed">{card.blurb}</p>
      <span className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
        Visit →
      </span>
    </div>
  );

  if (card.external) {
    return (
      <a
        href={card.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={card.href} className="group block">
      {inner}
    </Link>
  );
}
