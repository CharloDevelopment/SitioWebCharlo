"use client";

import { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { FadeInUp } from "@/components/motion/fade-in-up";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const TESTIMONIALS = [
  {
    quote:
      "Pasamos de perseguir cobros 3 días a la semana a olvidarnos del tema. Charlo Cobranza recuperó lo que nos debían en automático.",
    name: "Mariana Reyes",
    role: "Directora · Clínica Dental Sonríe",
    initials: "MR",
  },
  {
    quote:
      "Mis pacientes ya no esperan. El agente responde a las 3am si hace falta. Y las citas se confirman solas.",
    name: "Dr. Andrés Castillo",
    role: "Médico Particular",
    initials: "AC",
  },
  {
    quote:
      "Lo mejor es que no tuve que aprender nada técnico. El equipo de Charlo lo configuró y empezó a funcionar.",
    name: "Lucía Hernández",
    role: "Dueña · Academia de Inglés",
    initials: "LH",
  },
  {
    quote:
      "La calculadora de ahorro me mostró que estaba perdiendo $8,000 MXN al mes en tareas manuales. Charlo me los devolvió.",
    name: "Roberto Vázquez",
    role: "Socio · Despacho Contable",
    initials: "RV",
  },
];

export function TestimonialsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <SectionWrapper spacing="lg">
      <Container>
        <FadeInUp>
          <SectionHeading
            eyebrow="Testimonios"
            title="Lo que dicen nuestros clientes."
            subtitle="Empresas reales que recuperaron tiempo con Charlo."
            size="lg"
            className="mb-16"
          />
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <Carousel
            setApi={setApi}
            opts={{ loop: true, align: "start" }}
            className="mx-auto w-full max-w-3xl"
          >
            <CarouselContent>
              {TESTIMONIALS.map((testimonial) => (
                <CarouselItem key={testimonial.name}>
                  <div className="border-border bg-card flex flex-col gap-6 rounded-2xl border p-8 sm:p-12">
                    <Quote className="text-primary/40 h-8 w-8" aria-hidden="true" />
                    <blockquote className="text-lg leading-relaxed text-balance sm:text-xl">
                      “{testimonial.quote}”
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold">{testimonial.name}</span>
                        <span className="text-muted-foreground text-xs">{testimonial.role}</span>
                      </div>
                      <div className="ml-auto flex gap-0.5" aria-label="5 de 5 estrellas">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-6 flex items-center justify-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  aria-label={`Ir al testimonio ${i + 1}`}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    current === i
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2",
                  )}
                />
              ))}
            </div>
            <div className="sr-only">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </FadeInUp>
      </Container>
    </SectionWrapper>
  );
}
