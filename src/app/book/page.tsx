import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { MDXContent } from "@/components/mdx/mdx-content";
import { BookCover } from "@/components/book-cover";
import { readBookChapter } from "@/lib/book";

const STRIPE_URL = "https://buy.stripe.com/9B68wPd7udUC7rSeQr4ZG00";

export const metadata: Metadata = {
  title: "The Godchaser — a novel by Evan Evans",
  description:
    "The Godchaser: a novel by Evan Evans. Elian's hands are dying. Beyond the gates, the chase begins.",
};

export default function BookPage() {
  const chapter = readBookChapter("chapter-1.mdx");

  return (
    <>
      {/* FEATURED BOOK */}
      <section className="pt-16 md:pt-20 pb-12">
        <Container>
          <div className="rounded-3xl bg-bg-elevated border border-line overflow-hidden">
            <div className="grid gap-10 md:gap-14 md:grid-cols-[1.1fr_0.9fr] md:items-center p-8 md:p-14">
              <div>
                <p className="text-[0.7rem] tracking-[0.32em] uppercase font-semibold text-purple">
                  The Book
                </p>
                <h1 className="mt-4 font-display uppercase text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[0.01em] text-text">
                  The Godchaser.
                </h1>
                <p className="mt-5 text-xl md:text-2xl italic text-accent-deep leading-snug">
                  &ldquo;Beyond this point, the old life ends.&rdquo;
                </p>
                <p className="mt-4 text-[0.7rem] tracking-[0.28em] uppercase font-semibold text-purple-deep">
                  A novel by Evan Evans
                </p>
                <p className="mt-6 text-text leading-relaxed" style={{ maxWidth: "60ch" }}>
                  Elian&rsquo;s hands are dying. In The Glittering, dying hands
                  mean worthless. But the words on his window claim him for
                  something else: &ldquo;You were supposed to be Mine.&rdquo;
                  What he finds beyond the gates will strip him bare and reveal
                  a truth more scandalous than grace — he&rsquo;s wanted. Not
                  because he&rsquo;s worthy, but because Love itself has been
                  chasing him all along.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                  <a
                    href={STRIPE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-bg-deep text-text-inverse px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.06em] hover:bg-accent hover:text-text transition-colors"
                  >
                    Get the book — $12.99 →
                  </a>
                  <a
                    href="#chapter-1"
                    className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-purple-deep hover:text-purple transition-colors"
                  >
                    Read Chapter 1 below ↓
                  </a>
                </div>
              </div>

              <div className="mx-auto max-w-[320px] w-full md:max-w-none md:w-[340px] md:ml-auto md:mr-0">
                <BookCover
                  variant="godchaser"
                  filename="godchaser-cover-book.png"
                  alt="The Godchaser — a novel by Evan Evans"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SAMPLE CHAPTER */}
      <Section id="chapter-1">
        <Container size="narrow">
          <div className="rounded-3xl bg-bg-elevated border border-line p-8 md:p-14">
            <p className="text-[0.7rem] tracking-[0.32em] uppercase font-semibold text-purple">
              Sample Chapter — The Godchaser
            </p>
            <div className="prose-reading prose-chapter mt-6 mx-auto">
              <MDXContent source={chapter.content} />
            </div>
          </div>
        </Container>
      </Section>

      {/* CLOSING CTA */}
      <Section tone="lavender">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="font-display uppercase text-3xl md:text-5xl tracking-[0.01em] text-text">
              Want to know what happens next?
            </h2>
            <p className="mt-6 mx-auto text-lg text-text leading-relaxed" style={{ maxWidth: "60ch" }}>
              This is just the beginning of Elian&rsquo;s journey. What he finds
              beyond the gates will strip him bare and reveal a truth more
              scandalous than grace: he&rsquo;s wanted. Not because he&rsquo;s
              worthy, but because Love itself has been chasing him all along.
            </p>
            <div className="mt-10">
              <a
                href={STRIPE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-bg-deep text-text-inverse px-8 py-4 text-sm font-semibold uppercase tracking-[0.06em] hover:bg-accent hover:text-text transition-colors"
              >
                Pre-order The Godchaser — $12.99 →
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* MORE FROM EVAN EVANS */}
      <Section>
        <Container>
          <p className="text-[0.7rem] tracking-[0.32em] uppercase font-semibold text-purple">
            More books
          </p>
          <h2 className="mt-3 font-display uppercase text-3xl md:text-4xl tracking-[0.01em] text-text">
            More from Evan Evans.
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {/* Card 1 — Love Lifted Me */}
            <article className="rounded-2xl bg-bg-elevated border border-line overflow-hidden flex flex-col">
              <div className="p-6 md:p-8 grid gap-6 sm:grid-cols-[180px_1fr] sm:items-start">
                <div className="relative w-[180px] mx-auto sm:mx-0">
                  <span className="absolute top-2 left-2 z-10 inline-flex items-center rounded-full bg-accent text-text px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] shadow-md">
                    Coming Soon
                  </span>
                  <BookCover
                    variant="love-lifted-me"
                    filename="love-lifted-me.webp"
                    alt="Love Lifted Me — a novel by Evan Evans (coming soon)"
                  />
                </div>
                <div>
                  <h3 className="font-display uppercase text-2xl md:text-3xl tracking-[0.01em] text-text">
                    Love Lifted Me
                  </h3>
                  <p className="mt-3 italic text-text-dim leading-snug">
                    She could see what was breaking her family. She could not
                    make them believe her.
                  </p>
                  <p className="mt-3 text-[0.7rem] tracking-[0.28em] uppercase font-semibold text-purple-deep">
                    A novel by Evan Evans
                  </p>
                  <p className="mt-4 text-text leading-relaxed">
                    A woman with a gift she can no longer aim. A daughter who
                    sees what no one else sees. A son two floors below being
                    courted by something beautiful and burned. In a Houston
                    hospital, a family that built an empire on borrowed gospel
                    finds out what&rsquo;s real — and what&rsquo;s been with
                    them all along.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/contact?subject=Notify%20me%20about%20Love%20Lifted%20Me"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-purple text-purple-deep px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.06em] hover:bg-purple hover:text-text-inverse transition-colors"
                    >
                      Notify me when it&rsquo;s out
                    </Link>
                  </div>
                </div>
              </div>

              <details className="group border-t border-line">
                <summary className="cursor-pointer list-none px-6 md:px-8 py-4 flex items-center justify-between text-sm font-semibold uppercase tracking-[0.14em] text-purple-deep hover:text-purple transition-colors">
                  <span>Read a preview</span>
                  <span aria-hidden className="transition-transform group-open:rotate-180">
                    ↓
                  </span>
                </summary>
                <div className="px-6 md:px-8 pb-8">
                  <div className="prose-reading prose-chapter">
                    <h4 className="font-display uppercase text-xl tracking-[0.02em] text-text">
                      Chapter One — The Sound of Machines
                    </h4>
                    <p>
                      The fluorescent tube above bed seven had been flickering
                      for forty minutes. It made a sound like a fingernail
                      tapping glass, irregular, almost alive, and the nurse had
                      stopped noticing it three hours ago. She had stopped
                      noticing most things in this wing. The smell of iodine
                      and human sweat. The wet rhythm of the ventilator pushing
                      air into lungs that would not breathe on their own. The
                      woman on the floor.
                    </p>
                    <p>The woman had been on the floor for nine hours.</p>
                    <p>
                      Not sitting. Not kneeling in any way the nurse recognised
                      as kneeling. She was face down on the tile beside the
                      bed, her body flat, her forehead pressed to the ground,
                      her hands open and spread wide like someone who had
                      fallen from a great height and not yet moved. Her lips
                      were working. Words came out of her in a language the
                      nurse had never heard, thick and guttural and rhythmic,
                      and when the woman paused to breathe the nurse could hear
                      something underneath the words. A moan. Low and
                      continuous. The kind of sound an animal makes when it has
                      been wounded and does not understand why.
                    </p>
                    <p>
                      The nurse had tried, twice, to get her into the chair.
                      The first time the woman did not respond. Did not lift
                      her head. Did not acknowledge the hand on her shoulder.
                      The second time the nurse crouched beside her and said
                      Ma&rsquo;am, you need to eat something, and the
                      woman&rsquo;s daughter answered from across the room
                      without looking up.
                    </p>
                    <p>She won&rsquo;t stop until it&rsquo;s done.</p>
                    <p>Until what is done, the nurse asked.</p>
                    <p>The girl did not answer.</p>
                    <p>
                      The girl was seventeen. She was sitting in the plastic
                      chair beside the window with her back straight and her
                      ankles crossed and her hands folded in her lap. She had
                      not cried. She had not raised her voice. When the doctors
                      came she spoke to them clearly, confirmed dates and
                      medications, signed forms where forms needed signing. She
                      called her grandmother in Harare at six in the morning
                      and spoke in Shona for twenty minutes and did not break.
                    </p>
                    <p>
                      She was seventeen and she was holding everything in this
                      room together, and no one in the building knew the real
                      reason she had not moved from that chair was that she was
                      afraid to take her eyes off the things that were standing
                      around her father&rsquo;s bed.
                    </p>
                    <p>There were seven of them.</p>
                  </div>
                  <p className="mt-8 text-sm italic text-text-muted">
                    Full chapter coming when the book launches.
                  </p>
                  <div className="mt-4">
                    <Link
                      href="/contact?subject=Notify%20me%20about%20Love%20Lifted%20Me"
                      className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-purple-deep hover:text-purple transition-colors"
                    >
                      Be the first to read it →
                    </Link>
                  </div>
                </div>
              </details>
            </article>

            {/* Card 2 — placeholder */}
            <article className="rounded-2xl bg-bg-elevated border-2 border-dashed border-line p-8 flex items-center justify-center min-h-[260px]">
              <p className="text-xl text-text-muted italic">More coming.</p>
            </article>
          </div>
        </Container>
      </Section>
    </>
  );
}
