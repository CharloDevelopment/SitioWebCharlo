import { cn } from "@/lib/utils";
import Image from "next/image";

type LogoVariant = "full" | "mark" | "wordmark";
type LogoTheme = "auto" | "light" | "dark";

type LogoProps = {
  variant?: LogoVariant;
  theme?: LogoTheme;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

const BRAND_PATH = {
  full: "/brand/logo.svg",
  mark: "/brand/logo-mark.svg",
  dark: "/brand/logo-dark.svg",
} as const;

export function Logo({
  variant = "full",
  theme = "auto",
  className,
  width = 120,
  height = 32,
  priority = false,
}: LogoProps) {
  if (variant === "wordmark") {
    return (
      <span
        className={cn(
          "text-foreground text-xl font-semibold tracking-tight dark:text-white",
          className,
        )}
      >
        Charlo
      </span>
    );
  }

  const isDark = theme === "dark";
  const isLight = theme === "light";
  const useDarkVariant = theme === "dark" || theme === "auto";
  const src = useDarkVariant ? BRAND_PATH.dark : BRAND_PATH.full;

  if (variant === "mark") {
    return (
      <Mark
        className={cn("h-8 w-8", className)}
        width={width}
        height={height}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src={src}
      alt="Charlo"
      width={width}
      height={height}
      priority={priority}
      className={cn(
        isDark && "invert-0",
        isLight && "dark:invert-0",
        theme === "auto" && "dark:invert",
        className,
      )}
    />
  );
}

function Mark({
  className,
  width,
  height,
  priority,
}: {
  className?: string;
  width: number;
  height: number;
  priority?: boolean;
}) {
  return (
    <Image
      src={BRAND_PATH.mark}
      alt="Charlo"
      width={width}
      height={height}
      priority={priority}
      className={cn(className)}
    />
  );
}
