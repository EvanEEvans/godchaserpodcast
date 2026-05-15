import Link from "next/link";
import type { Post } from "@/lib/posts";
import { formatDate } from "@/lib/posts";

type Props = {
  post: Post;
};

export function PostCard({ post }: Props) {
  return (
    <Link
      href={post.href}
      className="card-hover group flex flex-col rounded-2xl border border-line bg-bg-elevated p-6 h-full"
    >
      <span className="text-[0.7rem] tracking-[0.24em] uppercase text-accent">
        {post.category}
      </span>
      <h3 className="mt-3 font-serif text-xl md:text-2xl font-semibold leading-snug text-text group-hover:text-accent transition-colors">
        {post.title}
      </h3>
      <p className="mt-3 text-text-dim text-[0.95rem] leading-relaxed line-clamp-3">
        {post.excerpt}
      </p>
      <div className="mt-auto pt-6 flex items-center justify-between text-xs text-text-muted">
        <span>{formatDate(post.publishedAt)}</span>
        <span>{post.readingTime}</span>
      </div>
    </Link>
  );
}
