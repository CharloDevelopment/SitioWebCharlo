import type { Metadata } from "next";
import { Sparkles, Wrench, Zap } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/motion/fade-in-up";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Changelog — Charlo",
  description: "Novedades, mejoras y correcciones de Charlo. Conoce qué lanzamos cada semana.",
  alternates: {
    canonical: "/changelog",
  },
  openGraph: {
    title: "Changelog — Charlo",
    description: "Novedades, mejoras y correcciones de Charlo.",
    url: `${siteConfig.url}/changelog`,
  },
};

type ChangeType = "feature" | "improvement" | "fix";

type Release = {
  version: string;
  date: string;
  title: string;
  description: string;
  changes: { type: ChangeType; text: string }[];
};

const RELEASES: Release[] = [
  {
    version: "0.4.0",
    date: "Julio 2026",
    title: "Lanzamiento público de charlo.mx",
    description:
      "Estrenamos el sitio web oficial con la plataforma completa, productos, calculadora de ahorro y formulario de contacto.",
    changes: [
      {
        type: "feature",
        text: "Sitio web público con home, plataforma, productos y precios",
      },
      {
        type: "feature",
        text: "Calculadora de ahorro interactiva en /precios",
      },
      {
        type: "feature",
        text: "Demos interactivas de Charlo Atención, Cobranza y Agenda",
      },
      {
        type: "feature",
        text: "Formulario de contacto conectado a email",
      },
      {
        type: "feature",
        text: "Modo claro y oscuro con detección del sistema",
      },
    ],
  },
  {
    version: "0.3.0",
    date: "Junio 2026",
    title: "Sistema de diseño y primitivas",
    description:
      "Construimos el sistema de diseño completo: tokens, componentes, y primitivas reutilizables para acelerar el desarrollo futuro.",
    changes: [
      {
        type: "feature",
        text: "Paleta de colores turquesa + azul marino",
      },
      {
        type: "feature",
        text: "Componentes shadcn/ui instalados (26+)",
      },
      {
        type: "feature",
        text: "Primitivas: Container, SectionWrapper, SectionHeading, BentoGrid",
      },
      {
        type: "feature",
        text: "Animaciones con Framer Motion (respeta prefers-reduced-motion)",
      },
    ],
  },
  {
    version: "0.2.0",
    date: "Junio 2026",
    title: "Branding oficial",
    description:
      "Integramos el logo oficial, la paleta de colores de la marca y el sistema tipográfico Geist.",
    changes: [
      {
        type: "feature",
        text: "Logo oficial en navbar, footer y metadata",
      },
      {
        type: "feature",
        text: "Favicon, apple-icon y OpenGraph dinámicos",
      },
      {
        type: "improvement",
        text: "Tipografía Geist con display: swap para mejor performance",
      },
      {
        type: "improvement",
        text: "Colores de marca extraídos del logo oficial",
      },
    ],
  },
];

const TYPE_CONFIG: Record<ChangeType, { label: string; icon: typeof Sparkles; className: string }> =
  {
    feature: {
      label: "Nuevo",
      icon: Sparkles,
      className: "bg-primary/10 text-primary",
    },
    improvement: {
      label: "Mejora",
      icon: Zap,
      className: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    },
    fix: {
      label: "Fix",
      icon: Wrench,
      className: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
    },
  };

export default function ChangelogPage() {
  return (
    <>
      <SectionWrapper spacing="lg">
        <Container>
          <FadeInUp>
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <span className="border-border bg-muted/50 text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide">
                <Sparkles className="text-primary h-3.5 w-3.5" />
                Changelog
              </span>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
                Qué hay de nuevo en <span className="text-primary">Charlo.</span>
              </h1>
              <p className="text-muted-foreground mt-6 max-w-2xl text-base text-balance sm:text-lg">
                Novedades, mejoras y correcciones. Transparente, porque confías en nosotros.
              </p>
            </div>
          </FadeInUp>
        </Container>
      </SectionWrapper>

      <SectionWrapper spacing="lg" tone="muted">
        <Container size="md">
          <StaggerContainer className="flex flex-col gap-8">
            {RELEASES.map((release) => (
              <StaggerItem
                key={release.version}
                className="border-border bg-card relative rounded-2xl border p-6 sm:p-8"
              >
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="bg-primary/10 text-primary rounded-full px-3 py-1 font-mono text-sm font-semibold">
                    v{release.version}
                  </span>
                  <span className="text-muted-foreground text-sm">{release.date}</span>
                </div>
                <h2 className="text-2xl font-semibold tracking-tight">{release.title}</h2>
                <p className="text-muted-foreground mt-2">{release.description}</p>
                <ul className="mt-6 flex flex-col gap-2">
                  {release.changes.map((change, i) => {
                    const config = TYPE_CONFIG[change.type];
                    const Icon = config.icon;
                    return (
                      <li
                        key={i}
                        className="border-border/50 bg-background flex items-start gap-3 rounded-lg border p-3"
                      >
                        <span
                          className={`mt-0.5 inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium tracking-wide uppercase ${config.className}`}
                        >
                          <Icon className="h-2.5 w-2.5" />
                          {config.label}
                        </span>
                        <span className="text-sm">{change.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp delay={0.3}>
            <div className="mt-12 text-center">
              <Badge variant="secondary" className="text-xs">
                ¿Sugerencia? Escríbenos por{" "}
                <a href="https://wa.me/525500000000" className="text-primary hover:underline">
                  WhatsApp
                </a>
                .
              </Badge>
            </div>
          </FadeInUp>
        </Container>
      </SectionWrapper>
    </>
  );
}
