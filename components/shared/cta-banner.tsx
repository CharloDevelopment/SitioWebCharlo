import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";

type CtaBannerProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  tone?: "primary" | "dark" | "muted";
  className?: string;
};

const toneMap = {
  primary: "bg-primary text-primary-foreground",
  dark: "bg-foreground text-background",
  muted: "bg-muted text-foreground",
};

export function CtaBanner({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  tone = "primary",
  className,
}: CtaBannerProps) {
  return (
    <section className={cn("py-16 sm:py-24", toneMap[tone], className)}>
      <Container>
        <div className="flex flex-col items-center gap-6 text-center">
          {eyebrow ? (
            <span
              className={cn(
                "rounded-full border px-3 py-1 text-xs font-medium tracking-wide uppercase",
                tone === "primary" || tone === "dark"
                  ? "border-white/20 bg-white/10"
                  : "border-border bg-background",
              )}
            >
              {eyebrow}
            </span>
          ) : null}
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">
            {title}
          </h2>
          {subtitle ? (
            <p
              className={cn(
                "max-w-2xl text-base text-pretty sm:text-lg",
                tone === "primary" || tone === "dark" ? "opacity-90" : "text-muted-foreground",
              )}
            >
              {subtitle}
            </p>
          ) : null}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button asChild size="lg" variant={tone === "primary" ? "secondary" : "default"}>
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            {secondaryCta ? (
              <Button
                asChild
                size="lg"
                variant="outline"
                className={
                  tone === "primary" || tone === "dark"
                    ? "border-white/30 bg-transparent hover:bg-white/10"
                    : ""
                }
              >
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
