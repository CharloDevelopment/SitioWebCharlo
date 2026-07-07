"use client";

import type { ReactNode } from "react";
import { Container } from "@/components/shared/container";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { FadeInUp } from "@/components/motion/fade-in-up";

type ProductDemoProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function ProductDemo({ title, subtitle, children }: ProductDemoProps) {
  return (
    <SectionWrapper spacing="lg" tone="muted">
      <Container>
        <FadeInUp>
          <div className="mb-10 flex flex-col items-center text-center">
            <span className="border-primary/30 bg-primary/10 text-primary mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide uppercase">
              Demo interactiva
            </span>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              {title}
            </h2>
            {subtitle ? (
              <p className="text-muted-foreground mt-3 max-w-2xl text-pretty">{subtitle}</p>
            ) : null}
          </div>
        </FadeInUp>
        <FadeInUp delay={0.2}>{children}</FadeInUp>
      </Container>
    </SectionWrapper>
  );
}
