import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-bg hover:bg-accent-hover border border-accent",
  secondary:
    "bg-bg-elevated text-text hover:bg-bg-subtle border border-line",
  ghost:
    "bg-transparent text-text hover:text-accent border border-line hover:border-accent",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const base =
  "inline-flex items-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-60 disabled:cursor-not-allowed";

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
