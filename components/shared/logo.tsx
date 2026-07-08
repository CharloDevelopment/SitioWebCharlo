import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoVariant = "full" | "mark" | "wordmark" | "vertical";
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
  full: "/brand/logo.png",
  mark: "/brand/logo-mark.png",
  markWhite: "/brand/logo-mark-white.png",
  vertical: "/brand/logo-vertical.png",
} as const;

export function Logo({
  variant = "full",
  theme = "auto",
  className,
  width = 140,
  height = 60,
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
        Charló
      </span>
    );
  }

  if (variant === "mark") {
    const useWhiteMark = theme === "dark";
    return (
      <Image
        src={useWhiteMark ? BRAND_PATH.markWhite : BRAND_PATH.mark}
        alt="Charló"
        width={width}
        height={height}
        priority={priority}
        className={cn("h-8 w-8 object-contain", className)}
      />
    );
  }

  if (variant === "vertical") {
    return (
      <Image
        src={BRAND_PATH.vertical}
        alt="Charló"
        width={width}
        height={height}
        priority={priority}
        className={cn("h-12 w-12 shrink-0 object-contain", className)}
      />
    );
  }

  const useDark = theme === "dark";
  const src = useDark ? "/brand/logo-dark.png" : BRAND_PATH.full;

  return (
    <Image
      src={src}
      alt="Charló"
      width={width}
      height={height}
      priority={priority}
      className={cn("h-8 w-auto object-contain", className)}
    />
  );
}
