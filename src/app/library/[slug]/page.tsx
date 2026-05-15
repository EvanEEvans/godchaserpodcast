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
      <article className="pt-16 pb-24">
        <Container size="narrow">
          <div className="rounded-3xl bg-bg-elevated border border-line overflow-hidden">
            <header className="px-6 sm:px-10 md:px-16 pt-12 md:pt-16">
              <p className="text-[0.7rem] tracking-[0.32em] uppercase font-semibold text-purple">
                {post.category}
              </p>
              <h1 className="mt-4 font-display uppercase text-3xl sm:text-4xl md:text-5xl leading-[1.05] tracking-[0.01em] text-text">
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
            </header>

            <div className="mt-10 px-6 sm:px-10 md:px-16">
              <PostHeroArt slug={post.slug} category={post.category} />
            </div>

            <div className="px-6 sm:px-10 md:px-16 pt-12 md:pt-14 pb-12">
              <div className="prose-reading mx-auto">
                <MDXContent source={before} />
              </div>

              {after && (
                <div className="mx-auto max-w-[68ch]">
                  <CTAFor kind={post.cta} />
                </div>
              )}

              {after && (
                <div className="prose-reading mx-auto">
                  <MDXContent source={after} />
                </div>
              )}

              <hr className="my-14 border-t border-line w-24 mx-auto" />

              <div className="mx-auto max-w-[68ch]">
                <CTAFor kind={post.cta} />
              </div>

              <div className="mx-auto max-w-[68ch] mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
                <p className="text-sm text-text-muted italic">
                  Soso lobi. <span className="not-italic">— Ev</span>
                </p>
                <ShareButtons url={canonicalUrl} title={post.title} />
              </div>
            </div>
          </div>
        </Container>

        {related.length > 0 && (
          <Container className="mt-20">
            <p className="text-[0.7rem] tracking-[0.32em] uppercase font-semibold text-purple">
              Read next
            </p>
            <h2 className="mt-3 font-display uppercase text-3xl md:text-4xl tracking-[0.01em] text-text">
              Keep going.
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={p.href}
                  className="card-hover rounded-2xl border border-line bg-bg-elevated p-6 group"
                >
                  <span className="text-[0.7rem] tracking-[0.28em] uppercase font-semibold text-purple">
                    {p.category}
                  </span>
                  <h3 className="mt-3 font-display uppercase text-xl md:text-2xl leading-tight tracking-[0.01em] text-text group-hover:text-purple transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-text-dim text-[0.95rem]">
                    {p.excerpt}
                  </p>
                  <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.14em] text-accent-deep">
                    Read →
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        )}
      </article>
    </>
  );
}
