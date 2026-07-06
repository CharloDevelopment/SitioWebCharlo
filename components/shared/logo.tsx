import { cn } from "@/lib/utils";

type LogoVariant = "full" | "mark" | "wordmark";
type LogoTheme = "auto" | "light" | "dark";

type LogoProps = {
  variant?: LogoVariant;
  theme?: LogoTheme;
  className?: string;
  width?: number;
  height?: number;
};

export function Logo({ variant = "full", theme = "auto", className, width, height }: LogoProps) {
  const isDark = theme === "dark";
  const isLight = theme === "light";

  const colorClass = isDark
    ? "text-white"
    : isLight
      ? "text-foreground"
      : "text-foreground dark:text-white";

  const markFillClass = isDark
    ? "fill-white"
    : isLight
      ? "fill-foreground"
      : "fill-foreground dark:fill-white";

  if (variant === "mark") {
    return (
      <Mark className={cn(markFillClass, className)} width={width ?? 32} height={height ?? 32} />
    );
  }

  if (variant === "wordmark") {
    return (
      <span className={cn("text-xl font-semibold tracking-tight", colorClass, className)}>
        Charlo
      </span>
    );
  }

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <Mark className={markFillClass} width={width ?? 28} height={height ?? 28} />
      <span className={cn("text-xl font-semibold tracking-tight", colorClass)}>Charlo</span>
    </span>
  );
}

function Mark({ className, width, height }: { className?: string; width: number; height: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={width}
      height={height}
      aria-hidden="true"
      className={className}
    >
      <rect width="32" height="32" rx="8" className="fill-primary" />
      <path
        d="M22.5 11.5a6 6 0 0 0-9.6-1.6 6 6 0 0 0 0 8.4 6 6 0 0 0 7.6 1l-1.4-1.4a4 4 0 0 1-5.2-5.2 4 4 0 0 1 6.6-.6l2-2z"
        className="fill-primary-foreground"
      />
    </svg>
  );
}
