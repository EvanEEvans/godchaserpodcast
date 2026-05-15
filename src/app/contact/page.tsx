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
      <section className="pt-16 md:pt-20 pb-12">
        <Container>
          <p className="text-[0.7rem] tracking-[0.32em] uppercase font-semibold text-purple">
            Contact
          </p>
          <h1 className="mt-4 font-display uppercase text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[0.01em] text-text max-w-2xl">
            Send us a message.
          </h1>
          <p className="mt-6 text-lg text-text-dim max-w-xl leading-relaxed">
            We read everything that comes through. Whether you have a question,
            an invitation, or you just said yes to Jesus — we&rsquo;d love to
            hear from you.
          </p>
        </Container>
      </section>

      <Section>
        <Container size="narrow">
          <div className="rounded-3xl bg-bg-elevated border border-line p-8 md:p-12">
            <ContactForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
