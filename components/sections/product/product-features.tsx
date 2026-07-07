"use client";

import type { ReactNode } from "react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/motion/fade-in-up";

type ProductFeaturesProps = {
  title: string;
  subtitle?: string;
  features: { title: string; description: string; icon: ReactNode }[];
};

export function ProductFeatures({ title, subtitle, features }: ProductFeaturesProps) {
  return (
    <SectionWrapper spacing="lg">
      <Container>
        <FadeInUp>
          <SectionHeading
            eyebrow="Características"
            title={title}
            subtitle={subtitle}
            size="lg"
            className="mb-16"
          />
        </FadeInUp>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
          {features.map((feature) => (
            <StaggerItem
              key={feature.title}
              className="group border-border bg-card hover:border-primary/40 flex flex-col gap-3 rounded-2xl border p-6 transition-colors"
            >
              <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-lg transition-transform group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </SectionWrapper>
  );
}
