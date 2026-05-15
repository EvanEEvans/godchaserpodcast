import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { CategoryPills } from "@/components/library/category-pills";
import { PostCard } from "@/components/library/post-card";
import { Pagination } from "@/components/library/pagination";
import {
  categoryFromSlug,
  categorySlug,
  getPostsByCategory,
} from "@/lib/posts";
import { CATEGORIES } from "@/lib/site";

type Params = { cat: string };

const PER_PAGE = 12;

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({ cat: categorySlug(c) }));
}

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { cat } = await props.params;
  const category = categoryFromSlug(cat);
  if (!category) return { title: "Library" };
  return {
    title: category,
    description: `${category} — teaching from The Godchaser Library.`,
  };
}

export default async function CategoryPage(props: {
  params: Promise<Params>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { cat } = await props.params;
  const { page } = await props.searchParams;
  const category = categoryFromSlug(cat);
  if (!category) notFound();

  const currentPage = Math.max(1, parseInt(page ?? "1", 10) || 1);
  const allPosts = getPostsByCategory(category);
  const totalPages = Math.max(1, Math.ceil(allPosts.length / PER_PAGE));
  const start = (currentPage - 1) * PER_PAGE;
  const posts = allPosts.slice(start, start + PER_PAGE);

  return (
    <>
      <section className="pt-20 pb-12">
        <Container>
          <p className="text-[0.7rem] tracking-[0.32em] uppercase font-semibold text-purple">
            Category
          </p>
          <h1 className="mt-4 font-display uppercase text-4xl md:text-6xl leading-tight tracking-[0.01em] text-text">
            {category}.
          </h1>
        </Container>
      </section>

      <CategoryPills activeSlug={cat} />

      <section className="py-12">
        <Container>
          {posts.length === 0 ? (
            <p className="text-text-dim">No posts in this category yet.</p>
          ) : (
            <>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((p) => (
                  <PostCard key={p.slug} post={p} />
                ))}
              </div>
              <Pagination
                basePath={`/library/category/${cat}`}
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
