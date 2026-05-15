import Link from "next/link";
import { CATEGORIES } from "@/lib/site";
import { categorySlug } from "@/lib/posts";
import { cn } from "@/lib/cn";

type Props = {
  activeSlug?: string;
};

export function CategoryPills({ activeSlug }: Props) {
  return (
    <div className="sticky top-20 z-20 bg-bg-elevated border-b border-line">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8 py-4 flex flex-wrap gap-2">
        <Pill href="/library" label="All" active={!activeSlug} />
        {CATEGORIES.map((c) => {
          const slug = categorySlug(c);
          return (
            <Pill
              key={c}
              href={`/library/category/${slug}`}
              label={c}
              active={activeSlug === slug}
            />
          );
        })}
      </div>
    </div>
  );
}

function Pill({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "rounded-full border-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] transition-colors",
        active
          ? "bg-accent text-text border-accent"
          : "border-purple/30 text-purple hover:border-purple hover:bg-purple hover:text-text-inverse",
      )}
    >
      {label}
    </Link>
  );
}
