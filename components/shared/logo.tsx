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
  full: "/brand/logo.png",
  mark: "/brand/logo-mark.png",
  dark: "/brand/logo-dark.png",
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
        Charlo
      </span>
    );
  }

  if (variant === "mark") {
    return (
      <Image
        src={BRAND_PATH.mark}
        alt="Charlo"
        width={width}
        height={height}
        priority={priority}
        className={cn("h-8 w-8 object-contain", className)}
      />
    );
  }

  const useDark = theme === "dark";
  const src = useDark ? BRAND_PATH.dark : BRAND_PATH.full;

  return (
    <Image
      src={src}
      alt="Charlo"
      width={width}
      height={height}
      priority={priority}
      className={cn("h-8 w-auto object-contain", className)}
    />
  );
}
