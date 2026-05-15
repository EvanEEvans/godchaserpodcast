import Link from "next/link";
import { Section } from "@/components/section";
import { Container } from "@/components/container";
import { PostCard } from "@/components/library/post-card";
import { getFeaturedPosts } from "@/lib/posts";

export function FeaturedLibrary() {
  const posts = getFeaturedPosts(3);
  if (posts.length === 0) return null;

  return (
    <Section tone="elevated">
      <Container>
        <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
          <div>
            <p className="text-xs tracking-[0.28em] uppercase text-text-muted">
              From the Library
            </p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl font-semibold">
              Latest teaching.
            </h2>
          </div>
          <Link
            href="/library"
            className="text-sm text-accent hover:text-accent-hover"
          >
            Browse the full Library →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
