import { cn } from "@/lib/cn";

type SectionProps = {
  className?: string;
  children: React.ReactNode;
  tone?: "default" | "elevated" | "navy" | "lavender";
  as?: "section" | "div";
  id?: string;
};

export function Section({
  className,
  children,
  tone = "default",
  as: Tag = "section",
  id,
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "py-16 md:py-24",
        tone === "elevated" && "bg-bg-elevated border-y border-line",
        tone === "navy" && "bg-bg-deep text-text-inverse",
        tone === "lavender" && "bg-bg-lavender text-text",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
