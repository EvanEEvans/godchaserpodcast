import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CategoryPills } from "@/components/library/category-pills";
import { PostCard } from "@/components/library/post-card";
import { Pagination } from "@/components/library/pagination";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "The Library",
  description:
    "Teaching, testimony, and tools for the chase. Scripture-saturated essays on faith, doctrine, and Bible study.",
};

const PER_PAGE = 12;

export default async function LibraryIndex(props: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await props.searchParams;
  const currentPage = Math.max(1, parseInt(page ?? "1", 10) || 1);

  const allPosts = getAllPosts();
  const totalPages = Math.max(1, Math.ceil(allPosts.length / PER_PAGE));
  const start = (currentPage - 1) * PER_PAGE;
  const posts = allPosts.slice(start, start + PER_PAGE);

  return (
    <>
      <section className="pt-24 pb-12">
        <Container>
          <p className="text-xs tracking-[0.28em] uppercase text-text-muted">
            The Library
          </p>
          <h1 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight">
            Teaching, testimony, and tools for the chase.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-text-dim">
            Essays on the Word, the gospel, the way of Jesus. Bible-first.
            Plain-English. Scripture cited every time.
          </p>
        </Container>
      </section>

      <CategoryPills />

      <section className="py-12">
        <Container>
          {posts.length === 0 ? (
            <p className="text-text-dim">No posts yet — check back soon.</p>
          ) : (
            <>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((p) => (
                  <PostCard key={p.slug} post={p} />
                ))}
              </div>
              <Pagination
                basePath="/library"
                currentPage={currentPage}
                totalPages={totalPages}
              />
            </>
          )}
        </Container>
      </section>
    </>
  );
}
