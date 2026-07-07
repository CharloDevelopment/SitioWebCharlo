import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Calculator, FileText, PlayCircle, Sparkles, Video } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaBanner } from "@/components/shared/cta-banner";
import { Button } from "@/components/ui/button";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/motion/fade-in-up";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Aprende — Charlo",
  description:
    "Aprende cómo la tecnología puede ayudar a tu negocio. Guías, calculadoras, casos reales, videos y plantillas.",
  alternates: {
    canonical: "/aprende",
  },
  openGraph: {
    title: "Aprende — Charlo",
    description:
      "La inteligencia artificial no tiene que ser complicada. Aprende cómo empresas como la tuya usan nuevas herramientas para crecer.",
    url: `${siteConfig.url}/aprende`,
  },
};

const SECTIONS = [
  {
    icon: BookOpen,
    title: "Guías prácticas",
    description:
      "Tutoriales paso a paso para que implementes automatizaciones en tu negocio sin ayuda técnica.",
    comingSoon: true,
    cta: { label: "Explorar guías", href: "/aprende" },
  },
  {
    icon: Calculator,
    title: "Calculadora de ahorro",
    description:
      "Descubre cuánto tiempo y dinero puedes recuperar automatizando tareas manuales de tu negocio.",
    comingSoon: false,
    cta: { label: "Calcular ahorro", href: "/precios#calculadora" },
  },
  {
    icon: FileText,
    title: "Casos reales",
    description: "Historias de PYMES como la tuya que ya están usando Charlo para crecer.",
    comingSoon: true,
    cta: { label: "Ver casos", href: "/aprende" },
  },
  {
    icon: PlayCircle,
    title: "Videos tutoriales",
    description:
      "Aprende viendo. Videos cortos de 2-5 minutos sobre conceptos clave y funcionalidades.",
    comingSoon: true,
    cta: { label: "Ver videos", href: "/aprende" },
  },
  {
    icon: Sparkles,
    title: "Plantillas listas",
    description: "Prompts, flujos y respuestas prediseñadas que puedes usar desde el día 1.",
    comingSoon: true,
    cta: { label: "Ver plantillas", href: "/aprende" },
  },
  {
    icon: Video,
    title: "Academia Charlo",
    description:
      "Cursos completos para dominar la automatización de tu negocio, desde básico hasta avanzado.",
    comingSoon: true,
    cta: { label: "Ver academia", href: "/aprende" },
  },
];

export default function AprendePage() {
  return (
    <>
      <SectionWrapper spacing="lg">
        <Container>
          <FadeInUp>
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <span className="border-border bg-muted/50 text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide">
                <BookOpen className="text-primary h-3.5 w-3.5" />
                Academia Charlo
              </span>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
                Aprende cómo la tecnología puede <span className="text-primary">ayudarte.</span>
              </h1>
              <p className="text-muted-foreground mt-6 max-w-2xl text-base text-balance sm:text-lg">
                La inteligencia artificial no tiene que ser complicada. Aprende cómo empresas como
                la tuya pueden utilizar nuevas herramientas para ahorrar tiempo y mejorar procesos.
              </p>
            </div>
          </FadeInUp>
        </Container>
      </SectionWrapper>

      <SectionWrapper spacing="lg" tone="muted">
        <Container>
          <FadeInUp>
            <SectionHeading
              eyebrow="Lo que vas a encontrar"
              title="Recursos para cada etapa."
              subtitle="Aprende a tu ritmo, con el formato que prefieras."
              size="md"
              className="mb-12"
            />
          </FadeInUp>

          <StaggerContainer
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            staggerDelay={0.08}
          >
            {SECTIONS.map((section) => {
              const Icon = section.icon;
              return (
                <StaggerItem
                  key={section.title}
                  className="group border-border bg-card hover:border-primary/40 flex flex-col gap-4 rounded-2xl border p-6 transition-all hover:shadow-lg"
                >
                  <div className="flex items-start justify-between">
                    <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>
                    {section.comingSoon ? (
                      <Badge variant="secondary" className="text-[10px]">
                        Próximamente
                      </Badge>
                    ) : null}
                  </div>
                  <h3 className="text-lg font-semibold">{section.title}</h3>
                  <p className="text-muted-foreground flex-1 text-sm">{section.description}</p>
                  {section.comingSoon ? (
                    <Button variant="ghost" size="sm" disabled className="w-fit">
                      Próximamente
                    </Button>
                  ) : (
                    <Button asChild variant="outline" size="sm" className="w-fit">
                      <Link href={section.cta.href}>{section.cta.label}</Link>
                    </Button>
                  )}
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </SectionWrapper>

      <CtaBanner
        eyebrow="¿No encontraste lo que buscabas?"
        title="Pregúntale a Charlo directamente."
        subtitle="Solicita una demostración y te mostramos exactamente cómo aplicar todo esto a tu negocio."
        primaryCta={{
          label: "Solicitar demostración",
          href: "#",
        }}
        secondaryCta={{
          label: "Hablar por WhatsApp",
          href: "https://wa.me/525500000000",
        }}
      />
    </>
  );
}
