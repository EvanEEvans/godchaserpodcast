import { Section } from "@/components/section";
import { Container } from "@/components/container";
import { NewsletterSignup } from "@/components/newsletter-signup";

export function NewsletterSection() {
  return (
    <Section tone="lavender">
      <Container>
        <NewsletterSignup variant="section" />
      </Container>
    </Section>
  );
}
