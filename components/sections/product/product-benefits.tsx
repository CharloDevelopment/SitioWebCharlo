"use client";

import type { ReactNode } from "react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/motion/fade-in-up";

type ProductBenefitsProps = {
  title: string;
  subtitle?: string;
  benefits: { title: string; description: string; icon: ReactNode }[];
};

export function ProductBenefits({ title, subtitle, benefits }: ProductBenefitsProps) {
  return (
    <SectionWrapper spacing="lg" tone="muted">
      <Container>
        <FadeInUp>
          <SectionHeading
            eyebrow="Beneficios"
            title={title}
            subtitle={subtitle}
            size="lg"
            className="mb-16"
          />
        </FadeInUp>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2" staggerDelay={0.1}>
          {benefits.map((benefit) => (
            <StaggerItem
              key={benefit.title}
              className="border-border bg-card flex flex-col gap-3 rounded-2xl border p-6"
            >
              <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-lg">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </SectionWrapper>
  );
}
