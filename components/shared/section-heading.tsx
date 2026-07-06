import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
};

const sizeMap = {
  sm: "text-2xl sm:text-3xl",
  md: "text-3xl sm:text-4xl",
  lg: "text-4xl sm:text-5xl",
  xl: "text-5xl sm:text-6xl",
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  as: HeadingTag = "h2",
  size = "lg",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        align === "left" && "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <span className="border-border bg-muted/50 text-muted-foreground rounded-full border px-3 py-1 text-xs font-medium tracking-wide uppercase">
          {eyebrow}
        </span>
      ) : null}
      <HeadingTag
        className={cn("max-w-3xl font-semibold tracking-tight text-balance", sizeMap[size])}
      >
        {title}
      </HeadingTag>
      {subtitle ? (
        <p className="text-muted-foreground max-w-2xl text-base text-pretty sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
