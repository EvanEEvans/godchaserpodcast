import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  basePath: string;
  currentPage: number;
  totalPages: number;
};

export function Pagination({ basePath, currentPage, totalPages }: Props) {
  if (totalPages <= 1) return null;

  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  const pageHref = (n: number) =>
    n === 1 ? basePath : `${basePath}?page=${n}`;

  return (
    <nav
      className="mt-16 flex items-center justify-between border-t border-line pt-8"
      aria-label="Library pagination"
    >
      <PaginationLink
        href={prevPage ? pageHref(prevPage) : "#"}
        disabled={!prevPage}
      >
        ← Newer
      </PaginationLink>

      <span className="text-sm text-text-muted">
        Page {currentPage} of {totalPages}
      </span>

      <PaginationLink
        href={nextPage ? pageHref(nextPage) : "#"}
        disabled={!nextPage}
      >
        Older →
      </PaginationLink>
    </nav>
  );
}

function PaginationLink({
  href,
  disabled,
  children,
}: {
  href: string;
  disabled: boolean;
  children: React.ReactNode;
}) {
  const classes = cn(
    "rounded-full border px-5 py-2 text-sm transition-colors",
    disabled
      ? "border-line-soft text-text-muted opacity-40 pointer-events-none"
      : "border-line-soft text-text-dim hover:text-accent hover:border-accent",
  );
  if (disabled)
    return (
      <span className={classes} aria-disabled>
        {children}
      </span>
    );
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
