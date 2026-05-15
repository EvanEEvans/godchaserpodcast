import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Button } from "@/components/button";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Start Here",
  description:
    "If you have never said yes to Jesus, here is the simplest place to start — from Scripture itself.",
};

export default function BeginPage() {
  return (
    <>
      <section className="hero-gradient">
        <Container size="reading">
          <div className="pt-24 pb-12">
            <p className="text-xs tracking-[0.28em] uppercase text-accent">
              Start Here
            </p>
            <h1 className="mt-4 font-serif text-4xl md:text-5xl font-bold tracking-tight">
              The simplest place to start.
            </h1>
            <p className="mt-5 text-lg text-text-dim">
              Six short steps. Every claim is from the Bible. Read it slowly.
              Then read it again with a Bible open.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <Container size="reading">
          <div className="prose-reading">
            <Step number="01" verse="Romans 3:23">
              <h2>God made you, and He is good.</h2>
              <p>
                You were made on purpose, by a God who is holy, who is just, and
                who is love. Everything else in this letter is reaction to that
                one fact. He is the source. You are the made.
              </p>
              <p className="text-text-dim italic">
                &ldquo;In the beginning, God created the heavens and the
                earth.&rdquo; — Genesis 1:1
              </p>
            </Step>

            <Step number="02" verse="Romans 3:23">
              <h2>Something is broken.</h2>
              <p>
                You did not need anyone to tell you this. You feel it. The world
                feels it. Sin is the Bible&rsquo;s word for the brokenness —
                missing the mark, going our own way, the gap between us and the
                God who made us.
              </p>
              <p className="text-text-dim italic">
                &ldquo;For all have sinned and fall short of the glory of
                God.&rdquo; — Romans 3:23
              </p>
            </Step>

            <Step number="03" verse="Romans 6:23">
              <h2>The cost is real.</h2>
              <p>
                Sin separates us from God now and forever. The Bible calls this
                death — not just the body dying, but a deeper death, a being
                cut off from the only Source of life. We cannot fix this on our
                own. No amount of trying harder will close the gap.
              </p>
              <p className="text-text-dim italic">
                &ldquo;For the wages of sin is death.&rdquo; — Romans 6:23
              </p>
            </Step>

            <Step number="04" verse="Romans 5:8">
              <h2>Jesus crossed the gap.</h2>
              <p>
                God did not leave us in the gap. He came across it. Jesus —
                fully God and fully man — lived the life we could not live,
                died the death we deserved, and walked out of the grave on the
                third day. The cross is where justice and love kissed. The empty
                tomb is where everything changed forever.
              </p>
              <p className="text-text-dim italic">
                &ldquo;But God shows his love for us in that while we were still
                sinners, Christ died for us.&rdquo; — Romans 5:8
              </p>
            </Step>

            <Step number="05" verse="Romans 10:9">
              <h2>You respond by believing and confessing.</h2>
              <p>
                Salvation is not earned. It is received. You do not need a
                priest, a building, a perfect prayer, or a clean record. You
                need to turn — from running your own life, to running to Jesus.
                You believe He is who He said He is, and you say so.
              </p>
              <p className="text-text-dim italic">
                &ldquo;Because, if you confess with your mouth that Jesus is
                Lord and believe in your heart that God raised him from the
                dead, you will be saved.&rdquo; — Romans 10:9
              </p>
              <p>
                There are no magic words. But if you have never spoken to Jesus,
                you could say something like this:
              </p>
              <blockquote>
                Jesus, I believe You are the Son of God. I believe You died for
                my sin and rose from the dead. I have been running my own life
                and I have failed. I am surrendering. I am Yours. Lead me. Save
                me. Change me. I trust You.
              </blockquote>
            </Step>

            <Step number="06" verse="Acts 2:42">
              <h2>The next step is not alone.</h2>
              <p>
                If you said yes — even quietly, even shakily — heaven heard it.
                The Holy Spirit is now in you. Tell another believer. Get a
                Bible and start reading the gospel of John. Find a Bible-teaching
                church. The chase has begun, and you are not running it alone.
              </p>
              <p className="text-text-dim italic">
                &ldquo;And they devoted themselves to the apostles&rsquo;
                teaching and the fellowship, to the breaking of bread and the
                prayers.&rdquo; — Acts 2:42
              </p>
            </Step>
          </div>

          <div className="mt-16 rounded-2xl border border-accent/40 bg-bg-elevated/70 p-8">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold">
              Did you say yes? Tell us.
            </h2>
            <p className="mt-3 text-text-dim">
              We&rsquo;d love to pray for you and point you to next steps. No
              sales pitch. No follow-up campaign. Just a brother or sister on
              the other end.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact">Tell us</Button>
              <Button href={SITE.bspUrl} external variant="ghost">
                Open Bible Study Pro
              </Button>
              <Button href="/library" variant="ghost">
                Read the Library
              </Button>
            </div>
          </div>

          <p className="mt-12 text-center font-serif italic text-text-dim">
            Welcome home.
          </p>
          <p className="mt-2 text-center font-serif italic text-accent">
            Soso lobi.
          </p>

          <p className="mt-10 text-center">
            <Link
              href="/believe"
              className="text-sm text-text-muted hover:text-accent"
            >
              ← Back to What We Believe
            </Link>
          </p>
        </Container>
      </Section>
    </>
  );
}

function Step({
  number,
  verse,
  children,
}: {
  number: string;
  verse: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-line pt-10 mt-10 first:border-0 first:pt-0 first:mt-0">
      <div className="flex items-baseline gap-3 text-xs tracking-[0.24em] uppercase text-text-muted">
        <span className="text-accent">{number}</span>
        <span>· {verse}</span>
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}
