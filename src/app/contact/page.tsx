import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Send the Godchaser a message — questions, speaking, partnerships, or just hello.",
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-wash">
        <Container>
          <div className="pt-24 pb-12">
            <p className="text-xs tracking-[0.28em] uppercase text-accent">
              Contact
            </p>
            <h1 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight max-w-2xl">
              Send us a message.
            </h1>
            <p className="mt-5 text-lg text-text-dim max-w-xl">
              We read everything that comes through. Whether you have a
              question, an invitation, or you just said yes to Jesus — we&rsquo;d
              love to hear from you.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <Container size="narrow">
          <div className="rounded-2xl border border-line bg-bg-elevated p-8 md:p-10">
            <ContactForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
