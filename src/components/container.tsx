import { cn } from "@/lib/cn";

type ContainerProps = {
  size?: "default" | "narrow" | "reading";
  className?: string;
  children: React.ReactNode;
};

export function Container({
  size = "default",
  className,
  children,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-6 sm:px-8",
        size === "default" && "max-w-[1240px]",
        size === "narrow" && "max-w-[880px]",
        size === "reading" && "max-w-[68ch]",
        className,
      )}
    >
      {children}
    </div>
  );
}
