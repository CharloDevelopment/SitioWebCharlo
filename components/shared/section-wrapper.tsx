import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SectionWrapperProps = HTMLAttributes<HTMLElement> & {
  as?: "section" | "div" | "article" | "aside";
  spacing?: "sm" | "md" | "lg" | "xl";
  tone?: "default" | "muted" | "primary" | "dark";
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
};

const spacingMap = {
  sm: "py-12 sm:py-16",
  md: "py-16 sm:py-20",
  lg: "py-20 sm:py-28",
  xl: "py-24 sm:py-36",
};

const toneMap = {
  default: "bg-background text-foreground",
  muted: "bg-muted/40 text-foreground",
  primary: "bg-primary text-primary-foreground",
  dark: "bg-foreground text-background",
};

export function SectionWrapper({
  as: Tag = "section",
  spacing = "lg",
  tone = "default",
  className,
  children,
  ...props
}: SectionWrapperProps) {
  return (
    <Tag className={cn(spacingMap[spacing], toneMap[tone], className)} {...props}>
      {children}
    </Tag>
  );
}
