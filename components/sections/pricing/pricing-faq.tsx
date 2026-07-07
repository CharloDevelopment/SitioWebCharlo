"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/shared/container";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeInUp } from "@/components/motion/fade-in-up";

const FAQS = [
  {
    question: "¿Por qué cobran un setup único?",
    answer:
      "El setup cubre el tiempo de nuestro equipo para configurar la plataforma, entrenar al agente con tu información y acompañarte en los primeros 14 días. Es lo que nos permite ofrecer precios mensuales accesibles sin cobrarte por horas de consultoría.",
  },
  {
    question: "¿Qué pasa si cancelo?",
    answer:
      "Cancelas cuando quieras. Sin penalizaciones, sin preguntas incómodas. Tu acceso sigue activo hasta el final del período pagado. Tus datos te los llevas.",
  },
  {
    question: "¿Puedo cambiar de plan después?",
    answer:
      "Sí. Empiezas con Inicial y subes a Crecimiento cuando lo necesites. El cambio es inmediato y solo pagas la diferencia prorrateada.",
  },
  {
    question: "¿Qué incluye el setup de $499?",
    answer:
      "Configuración de la plataforma, entrenamiento del agente con tu información, integración con tu WhatsApp/Calendar/sistema de pago, y 14 días de onboarding dedicado. Es lo que hace que Charlo funcione desde el día 1.",
  },
  {
    question: "¿Hay descuento por pago anual?",
    answer:
      "Sí. Si pagas anual, te damos 2 meses gratis (pagas 10 en lugar de 12). Escríbenos para más detalles.",
  },
  {
    question: "¿Necesito tarjeta de crédito para empezar?",
    answer:
      "Para el setup sí (o transferencia bancaria). Para la suscripción mensual, puedes elegir entre tarjeta o transferencia.",
  },
  {
    question: "¿El plan Empresa es negociable?",
    answer:
      "Sí. El precio base de $5,499 MXN/mes es para configuraciones estándar. Si necesitas algo más complejo o más simple, hablamos y ajustamos.",
  },
  {
    question: "¿Qué pasa si excedo el límite de conversaciones?",
    answer:
      "Te avisamos cuando estás cerca del límite. Si llegas, puedes upgrade de plan o pagar conversaciones adicionales. Nunca te cortamos el servicio sin avisarte.",
  },
];

export function PricingFaq() {
  return (
    <SectionWrapper spacing="lg" tone="muted">
      <Container size="md">
        <FadeInUp>
          <SectionHeading
            eyebrow="Preguntas frecuentes"
            title="Sobre precios y planes."
            subtitle="Lo que otros empresarios preguntan antes de contratar."
            size="md"
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
