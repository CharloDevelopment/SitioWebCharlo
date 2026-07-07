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

const FAQS = [
  {
    question: "¿Necesito saber de tecnología?",
    answer:
      "No. Charlo está hecho para empresarios, no para ingenieros. Nosotros configuramos todo por ti.",
  },
  {
    question: "¿Cuánto tarda en implementarse?",
    answer:
      "Menos de un día. Después de la demostración, configuramos la plataforma y la adaptamos a tus procesos.",
  },
  {
    question: "¿Tengo que firmar contrato?",
    answer:
      "No. Puedes cancelar cuando quieras. Creemos que el valor se demuestra con el uso, no con cláusulas.",
  },
  {
    question: "¿Puedo cancelar cuando quiera?",
    answer:
      "Sí. Sin penalizaciones, sin preguntas incómodas. Tu decides si Charlo sigue siendo para ti.",
  },
  {
    question: "¿Funciona para mi tipo de negocio?",
    answer:
      "Sí. Charlo se adapta a tu industria. Trabajamos con clínicas, restaurantes, escuelas, despachos, gimnasios, veterinarias y más.",
  },
  {
    question: "¿Mis datos están seguros?",
    answer:
      "Sí. Usamos encriptación y servidores confiables. Tus datos y los de tus clientes están protegidos.",
  },
  {
    question: "¿Necesito cambiar de WhatsApp?",
    answer:
      "No. Charlo se integra con tu número de WhatsApp actual. Conservas tu marca y tu línea.",
  },
  {
    question: "¿Qué pasa después de contratar?",
    answer:
      "Te acompañamos 14 días con onboarding, configuración y soporte dedicado para asegurar que Charlo funcione desde el día 1.",
  },
];

export function FaqSection() {
  return (
    <SectionWrapper spacing="lg" tone="muted" id="faq">
      <Container size="md">
        <FadeInUp>
          <SectionHeading
            eyebrow="Preguntas frecuentes"
            title="Resolvemos tus dudas."
            subtitle="Las preguntas más comunes de otros empresarios como tú."
            size="lg"
            className="mb-12"
          />
        </FadeInUp>

        <FadeInUp delay={0.15}>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, i) => (
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
