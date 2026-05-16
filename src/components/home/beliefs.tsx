import Link from "next/link";
import { Section } from "@/components/section";
import { Container } from "@/components/container";
import { BELIEFS } from "@/lib/site";

export function Beliefs() {
  return (
    <Section>
      <Container>
        <div className="max-w-2xl">
          <p className="text-[0.7rem] tracking-[0.32em] uppercase font-semibold text-purple">
            Statement of Faith
          </p>
          <h2 className="mt-3 font-display uppercase text-3xl md:text-4xl tracking-[0.01em] text-text">
            What we believe.
          </h2>
          <p className="mt-4 text-text-dim">Twelve things, all from the Book.</p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BELIEFS.map((b) => (
            <li key={b.slug}>
              <Link
                href={`/believe#${b.slug}`}
                className="block h-full rounded-xl bg-bg-elevated border border-line border-l-4 border-l-purple px-5 py-4 hover:border-l-accent-deep hover:bg-bg-subtle transition-colors"
              >
                <h3 className="font-display uppercase text-lg tracking-[0.02em] text-text">
                  {b.title}
                </h3>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <Link
            href="/believe"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-accent-deep hover:text-accent transition-colors"
          >
            Read the full Statement <span aria-hidden>→</span>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
