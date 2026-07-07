"use client";

import type { ReactNode } from "react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/motion/fade-in-up";

type ProductProblemProps = {
  title: string;
  subtitle?: string;
  problems: { title: string; description: string; icon?: ReactNode }[];
};

export function ProductProblem({ title, subtitle, problems }: ProductProblemProps) {
  return (
    <SectionWrapper spacing="lg" tone="muted">
      <Container>
        <FadeInUp>
          <SectionHeading
            eyebrow="El problema"
            title={title}
            subtitle={subtitle}
            size="lg"
            className="mb-16"
          />
        </FadeInUp>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
          {problems.map((problem) => (
            <StaggerItem
              key={problem.title}
              className="border-border bg-card flex flex-col gap-3 rounded-2xl border p-6"
            >
              {problem.icon ? (
                <div className="bg-destructive/10 text-destructive flex h-10 w-10 items-center justify-center rounded-lg">
                  {problem.icon}
                </div>
              ) : null}
              <h3 className="text-lg font-semibold">{problem.title}</h3>
              <p className="text-muted-foreground text-sm">{problem.description}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </SectionWrapper>
  );
}
