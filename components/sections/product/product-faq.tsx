"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { FadeInUp } from "@/components/motion/fade-in-up";

type ProductFaqProps = {
  title: string;
  subtitle?: string;
  faqs: { question: string; answer: string }[];
};

export function ProductFaq({ title, subtitle, faqs }: ProductFaqProps) {
  return (
    <SectionWrapper spacing="lg" tone="muted">
      <Container size="md">
        <FadeInUp>
          <SectionHeading
            eyebrow="Preguntas frecuentes"
            title={title}
            subtitle={subtitle}
            size="md"
            className="mb-12"
          />
        </FadeInUp>

        <FadeInUp delay={0.15}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.question}
                value={`item-${i + 1}`}
                className="border-border/60"
              >
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeInUp>
      </Container>
    </SectionWrapper>
  );
}
