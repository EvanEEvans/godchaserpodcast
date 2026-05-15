import { Hero } from "@/components/home/hero";
import { Manifesto } from "@/components/home/manifesto";
import { FeaturedLibrary } from "@/components/home/featured-library";
import { Universe } from "@/components/home/universe";
import { Beliefs } from "@/components/home/beliefs";
import { NewsletterSection } from "@/components/home/newsletter-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <FeaturedLibrary />
      <Universe />
      <Beliefs />
      <NewsletterSection />
    </>
  );
}
