"use client";

import type { ReactNode } from "react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/motion/fade-in-up";

type ProductCasesProps = {
  title: string;
  subtitle?: string;
  cases: { title: string; description: string; icon: ReactNode }[];
};

export function ProductCases({ title, subtitle, cases }: ProductCasesProps) {
  return (
    <SectionWrapper spacing="lg">
      <Container>
        <FadeInUp>
          <SectionHeading
            eyebrow="Casos de uso"
            title={title}
            subtitle={subtitle}
            size="lg"
            className="mb-16"
          />
        </FadeInUp>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
          {cases.map((useCase) => (
            <StaggerItem
              key={useCase.title}
              className="group border-border bg-card hover:border-primary/40 flex flex-col gap-3 rounded-2xl border p-6 text-center transition-colors"
            >
              <div className="bg-primary/10 text-primary mx-auto flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110">
                {useCase.icon}
              </div>
              <h3 className="text-lg font-semibold">{useCase.title}</h3>
              <p className="text-muted-foreground text-sm">{useCase.description}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </SectionWrapper>
  );
}
