import Link from "next/link";
import { Section } from "@/components/section";
import { Container } from "@/components/container";
import { BELIEFS } from "@/lib/site";

export function Beliefs() {
  return (
    <Section tone="elevated">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.28em] uppercase text-text-muted">
            Statement of Faith
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold">
            What we believe.
          </h2>
          <p className="mt-4 text-text-dim">Twelve things, all from the Book.</p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BELIEFS.map((b) => (
            <li
              key={b.title}
              className="rounded-xl border border-line border-l-2 border-l-accent bg-bg-elevated px-5 py-4"
            >
              <h3 className="font-display text-base font-medium text-text">
                {b.title}
              </h3>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <Link
            href="/believe"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover"
          >
            Read the full Statement <span aria-hidden>→</span>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
