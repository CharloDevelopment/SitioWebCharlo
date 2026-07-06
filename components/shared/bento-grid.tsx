import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BentoGridProps = {
  children: ReactNode;
  className?: string;
};

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[auto_auto]",
        className,
      )}
    >
      {children}
    </div>
  );
}

type BentoCardProps = {
  children: ReactNode;
  className?: string;
  span?: "default" | "wide" | "tall" | "big";
  href?: string;
};

const spanMap = {
  default: "col-span-1 row-span-1",
  wide: "col-span-1 sm:col-span-2 row-span-1",
  tall: "col-span-1 row-span-1 sm:row-span-2",
  big: "col-span-1 sm:col-span-2 row-span-1 sm:row-span-2",
};

export function BentoCard({ children, className, span = "default" }: BentoCardProps) {
  return (
    <div
      className={cn(
        "group border-border bg-card text-card-foreground hover:border-primary/50 relative overflow-hidden rounded-2xl border p-6 transition-all hover:shadow-lg",
        spanMap[span],
        className,
      )}
    >
      {children}
    </div>
  );
}
