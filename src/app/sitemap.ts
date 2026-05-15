import type { MetadataRoute } from "next";
import { getAllPosts, categorySlug } from "@/lib/posts";
import { CATEGORIES, SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const lastMod = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/library",
    "/book",
    "/believe",
    "/believe/begin",
    "/about",
    "/contact",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: lastMod,
    changeFrequency: "weekly",
    priority: path === "" ? 1.0 : 0.7,
  }));

  const categoryRoutes: MetadataRoute.Sitemap = CATEGORIES.map((c) => ({
    url: `${base}/library/category/${categorySlug(c)}`,
    lastModified: lastMod,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const postRoutes: MetadataRoute.Sitemap = getAllPosts().map((p) => ({
    url: `${base}${p.href}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...categoryRoutes, ...postRoutes];
}
