import { Section } from "@/components/section";
import { Container } from "@/components/container";

export function Manifesto() {
  return (
    <Section>
      <Container size="reading">
        <div
          className="rounded-3xl bg-bg-elevated border border-line px-8 md:px-12 py-10 md:py-14"
          style={{ boxShadow: "0 24px 48px -28px var(--purple-glow)" }}
        >
          <p className="text-[0.7rem] tracking-[0.32em] uppercase font-semibold text-purple">
            Welcome
          </p>
          <div className="mt-6 text-[1.15rem] md:text-[1.25rem] leading-[1.7] text-text space-y-5 font-medium">
            <p>
              This is a home for people chasing God with everything they have.
            </p>
            <p>
              Not a denomination. Not a brand. A community shaped by one Book.
            </p>
            <p>
              Here you&rsquo;ll find teaching, the podcast, the books, the
              music — and a tool that will change how you study Scripture
              forever.
            </p>
            <p>
              If you&rsquo;ve never met Jesus, start with the gospel: He died
              for sin, He rose, He saves all who believe. That&rsquo;s the
              whole story.
            </p>
          </div>
          <p className="mt-8 italic text-accent-deep">Soso lobi.</p>
        </div>
      </Container>
    </Section>
  );
}
