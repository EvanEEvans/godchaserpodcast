import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

/**
 * primary   — gold pill, navy text (the headline action)
 * secondary — purple pill, white text (alternate action)
 * ghost     — transparent with purple outline, purple text (light surfaces only)
 */
const variants: Record<Variant, string> = {
  primary: "bg-accent text-text hover:bg-accent-hover border-2 border-accent",
  secondary:
    "bg-purple text-text-inverse hover:bg-purple-hover border-2 border-purple",
  ghost:
    "bg-transparent text-purple border-2 border-purple/30 hover:bg-purple hover:text-text-inverse hover:border-purple",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-xs",
  lg: "px-7 py-3.5 text-sm",
};

const base =
  "inline-flex items-center gap-2 rounded-full font-semibold uppercase tracking-[0.06em] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-60 disabled:cursor-not-allowed";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type LinkProps = CommonProps & {
  href: string;
  external?: boolean;
};

type ButtonElProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button(props: LinkProps | ButtonElProps) {
  const variant = props.variant ?? "primary";
  const size = props.size ?? "md";
  const className = cn(base, variants[variant], sizes[size], props.className);

  if ("href" in props && props.href) {
    if (props.external || props.href.startsWith("http")) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {props.children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={className}>
        {props.children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, ...rest } = props as ButtonElProps;
  return (
    <button className={className} {...rest}>
      {props.children}
    </button>
  );
}
