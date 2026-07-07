"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { useDemoModal } from "@/components/forms/demo-modal";
import { FadeInUp } from "@/components/motion/fade-in-up";

type ProductCtaProps = {
  title: string;
  subtitle: string;
  ctaLabel?: string;
  variant?: "primary" | "dark";
};

export function ProductCta({
  title,
  subtitle,
  ctaLabel = "Solicitar demostración",
  variant = "primary",
}: ProductCtaProps) {
  const { setOpen: setDemoOpen } = useDemoModal();

  return (
    <SectionWrapper spacing="lg" tone={variant} className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_30%_50%,oklch(1_0_0_/_0.15),transparent_50%)]"
      />
      <Container size="md" className="relative">
        <FadeInUp>
          <div className="flex flex-col items-center text-center">
            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              {title}
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-pretty opacity-90">{subtitle}</p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button
                size="lg"
                variant={variant === "primary" ? "secondary" : "default"}
                onClick={() => setDemoOpen(true)}
              >
                {ctaLabel}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </FadeInUp>
      </Container>
    </SectionWrapper>
  );
}
