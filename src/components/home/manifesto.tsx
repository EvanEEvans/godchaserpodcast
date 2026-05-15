import { Section } from "@/components/section";
import { Container } from "@/components/container";

export function Manifesto() {
  return (
    <Section>
      <Container size="reading">
        <div className="font-display text-[1.25rem] md:text-[1.4rem] leading-[1.7] text-text space-y-6">
          <p>
            Welcome. This is a home for people chasing God with everything they
            have.
          </p>
          <p>
            Not a denomination. Not a brand. A community shaped by one Book.
          </p>
          <p>
            Here you&rsquo;ll find teaching, the podcast, the books, the music —
            and a tool that will change how you study Scripture forever.
          </p>
          <p>
            If you&rsquo;ve never met Jesus, start with the gospel: He died for
            sin, He rose, He saves all who believe. That&rsquo;s the whole
            story.
          </p>
          <p className="text-accent italic">Soso lobi.</p>
        </div>
      </Container>
    </Section>
  );
}
