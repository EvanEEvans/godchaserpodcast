import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { CATEGORIES, type Category } from "@/lib/site";

export type PostFrontmatter = {
  title: string;
  slug: string;
  category: Category;
  tags?: string[];
  excerpt: string;
  publishedAt: string;
  readingTime?: string;
  featured?: boolean;
  cta?: "bsp" | "book" | "newsletter" | null;
};

export type Post = PostFrontmatter & {
  body: string;
  readingTime: string;
  href: string;
};

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

function readPostFile(filename: string): Post | null {
  const fullPath = path.join(POSTS_DIR, filename);
  const raw = fs.readFileSync(fullPath, "utf8");
  const parsed = matter(raw);
  const data = parsed.data as Partial<PostFrontmatter>;
  if (!data.slug || !data.title) return null;

  const computedReadingTime =
    data.readingTime ?? readingTime(parsed.content).text;

  return {
    title: data.title,
    slug: data.slug,
    category: (data.category ?? "Foundations") as Category,
    tags: data.tags ?? [],
    excerpt: data.excerpt ?? "",
    publishedAt: data.publishedAt ?? new Date().toISOString().slice(0, 10),
    readingTime: computedReadingTime,
    featured: data.featured ?? false,
    cta: data.cta ?? null,
    body: parsed.content,
    href: `/library/${data.slug}`,
  };
}

let cachedPosts: Post[] | null = null;

export function getAllPosts(): Post[] {
  if (cachedPosts) return cachedPosts;

  if (!fs.existsSync(POSTS_DIR)) {
    cachedPosts = [];
    return cachedPosts;
  }

  const files = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const posts = files
    .map((f) => readPostFile(f))
    .filter((p): p is Post => p !== null)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );

  cachedPosts = posts;
  return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getPostsByCategory(category: Category): Post[] {
  return getAllPosts().filter((p) => p.category === category);
}

export function getFeaturedPosts(limit = 3): Post[] {
  const all = getAllPosts();
  const featured = all.filter((p) => p.featured);
  if (featured.length >= limit) return featured.slice(0, limit);
  return all.slice(0, limit);
}

export function categorySlug(category: Category): string {
  return category.toLowerCase().replace(/\s+/g, "-");
}

export function categoryFromSlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => categorySlug(c) === slug);
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function relatedPosts(post: Post, limit = 2): Post[] {
  return getAllPosts()
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, limit);
}
