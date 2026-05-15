import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { MDXContent } from "@/components/mdx/mdx-content";
import {
  BSPCTA,
  BookCTA,
  NewsletterCTA,
} from "@/components/mdx/cta-blocks";
import { ReadingProgress } from "@/components/library/reading-progress";
import { ShareButtons } from "@/components/library/share-buttons";
import { PostHeroArt } from "@/components/library/post-hero-art";
import {
  formatDate,
  getAllPosts,
  getPostBySlug,
  relatedPosts,
} from "@/lib/posts";
import { splitMdxForInlineCTA } from "@/lib/split-mdx";
import { SITE } from "@/lib/site";

type Params = { slug: string };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      url: `${SITE.url}${post.href}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

function CTAFor({
  kind,
}: {
  kind: "bsp" | "book" | "newsletter" | null | undefined;
}) {
  if (kind === "bsp") return <BSPCTA />;
  if (kind === "book") return <BookCTA />;
  if (kind === "newsletter") return <NewsletterCTA />;
  return null;
}

export default async function PostPage(props: { params: Promise<Params> }) {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { before, after } = splitMdxForInlineCTA(post.body);
  const related = relatedPosts(post, 2);
  const canonicalUrl = `${SITE.url}${post.href}`;

  return (
    <>
      <ReadingProgress />
      <article className="pt-20 pb-24">
        <Container size="reading">
          <p className="text-xs tracking-[0.28em] uppercase text-accent">
            {post.category}
          </p>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight">
            {post.title}
          </h1>
          <p className="mt-5 text-text-dim text-lg leading-relaxed">
            {post.excerpt}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-text-muted">
            <span>{formatDate(post.publishedAt)}</span>
            <span aria-hidden>·</span>
            <span>{post.readingTime}</span>
          </div>
        </Container>

        <Container size="narrow" className="mt-12">
          <PostHeroArt slug={post.slug} category={post.category} />
        </Container>

        <Container size="reading" className="mt-16">
          <div className="prose-reading">
            <MDXContent source={before} />
          </div>

          {after && <CTAFor kind={post.cta} />}

          {after && (
            <div className="prose-reading">
              <MDXContent source={after} />
            </div>
          )}

          <hr className="my-16 border-t border-line" />

          <CTAFor kind={post.cta} />

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
            <p className="text-sm text-text-muted">
              Soso lobi.{" "}
              <span className="italic">
                — Only love. Ev signs off.
              </span>
            </p>
            <ShareButtons url={canonicalUrl} title={post.title} />
          </div>
        </Container>

        {related.length > 0 && (
          <Container className="mt-24">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold">
              Read next
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={p.href}
                  className="card-hover rounded-2xl border border-line bg-bg-elevated/50 p-6 group"
                >
                  <span className="text-[0.7rem] tracking-[0.24em] uppercase text-accent">
                    {p.category}
                  </span>
                  <h3 className="mt-3 font-serif text-xl font-semibold group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-text-dim text-[0.95rem]">
                    {p.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </Container>
        )}
      </article>
    </>
  );
}
