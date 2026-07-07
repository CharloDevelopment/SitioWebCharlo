import type { Metadata } from "next";
import {
  Activity,
  Brain,
  ChevronRight,
  Database,
  Layers,
  Lock,
  Plug,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/motion/fade-in-up";
import { BentoCard, BentoGrid } from "@/components/shared/bento-grid";
import { siteConfig } from "@/config/site";
import { PlatformDemoButton } from "./platform-demo-button";
import { PlatformCta } from "./platform-cta";

export const metadata: Metadata = {
  title: "Plataforma — Charlo Platform",
  description:
    "Charlo Platform es tu Centro de Control. Una sola plataforma con todas las soluciones que tu negocio necesita. Modular, escalable y segura.",
  alternates: {
    canonical: "/plataforma",
  },
  openGraph: {
    title: "Plataforma — Charlo Platform",
    description:
      "Un Centro de Control para tu negocio. Modular, escalable, segura. La tecnología desaparece para que tú solo pienses en tu negocio.",
    url: `${siteConfig.url}/plataforma`,
  },
};

const PLATFORM_SECTIONS = [
  {
    icon: Layers,
    title: "Una sola plataforma",
    description:
      "Charlo Platform reúne todas tus herramientas en un solo lugar. No más 10 apps distintas, no más Excel para todo.",
    details: [
      "Centro de Control unificado",
      "Dashboard con métricas en tiempo real",
      "Navegación simple y consistente",
      "Acceso desde cualquier dispositivo",
    ],
  },
  {
    icon: Activity,
    title: "Dashboard en vivo",
    description:
      "Tu negocio en un vistazo. Mensajes atendidos, cobros recuperados, citas agendadas — todo actualizado al segundo.",
    details: [
      "Métricas de atención al cliente",
      "Estado de cobranza en tiempo real",
      "Citas próximas y disponibilidad",
      "Alertas automáticas cuando algo requiere tu atención",
    ],
  },
  {
    icon: Shield,
    title: "Centro de Control",
    description:
      "Desde un solo panel configuras todo: respuestas automáticas, plantillas de cobranza, horarios de agenda, integraciones.",
    details: [
      "Editor de respuestas sin código",
      "Configuración de plantillas de mensaje",
      "Reglas de agendado automatizado",
      "Gestión de usuarios y permisos",
    ],
  },
  {
    icon: Users,
    title: "Usuarios y roles",
    description:
      "Tu equipo con acceso controlado. Cada quien ve solo lo que necesita. Auditas todo.",
    details: [
      "Roles personalizados",
      "Permisos granulares por funcionalidad",
      "Auditoría de acciones",
      "Acceso por usuario o equipo",
    ],
  },
  {
    icon: Brain,
    title: "Inteligencia Artificial",
    description:
      "IA entrenada con tu negocio. No usamos modelos genéricos. Tu agente sabe de tus servicios, precios y políticas.",
    details: [
      "Modelo entrenado con tu información",
      "Tono y personalidad de tu marca",
      "Escalación inteligente a humanos",
      "Mejora continua con cada conversación",
    ],
  },
  {
    icon: TrendingUp,
    title: "Escalabilidad sin dolor",
    description:
      "Empiezas con 1 solución, agregas 2 más cuando creces. Sin migraciones, sin重新 setups, sin perder nada.",
    details: [
      "Agrega módulos cuando los necesites",
      "Sin límites de usuarios o conversaciones",
      "Infraestructura que crece contigo",
      "Paga solo por lo que usas",
    ],
  },
  {
    icon: Lock,
    title: "Seguridad de nivel empresarial",
    description:
      "Encriptación end-to-end, servidores seguros, cumplimiento normativo. Tus datos y los de tus clientes están protegidos.",
    details: [
      "Encriptación en tránsito y reposo",
      "Cumplimiento con LFPDPPP",
      "Backups automáticos diarios",
      "Auditorías de seguridad regulares",
    ],
  },
  {
    icon: Plug,
    title: "Integraciones",
    description:
      "Se conecta con las herramientas que ya usas. WhatsApp, Google Calendar, Stripe, Mercado Pago, y más.",
    details: [
      "WhatsApp Business API",
      "Google Calendar / Outlook",
      "Stripe, Mercado Pago, OpenPay",
      "Zapier para conectar con miles de apps",
    ],
  },
];

export default function PlataformaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Charlo Platform",
    description:
      "Plataforma modular de IA para PYMES. Centro de Control unificado con atención, cobranza y agenda.",
    url: `${siteConfig.url}/plataforma`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="relative overflow-hidden pt-16 pb-20 sm:pt-20 sm:pb-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,oklch(0.42_0.27_264_/_0.10),transparent_60%)]"
        />
        <Container>
          <FadeInUp>
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <span className="border-border bg-muted/50 text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide">
                <Layers className="text-primary h-3.5 w-3.5" />
                Charlo Platform
              </span>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
                Una plataforma. Tu <span className="text-primary">Centro de Control.</span>
              </h1>
              <p className="text-muted-foreground mt-6 max-w-2xl text-base text-balance sm:text-lg">
                Charlo Platform es donde todo vive. Atención, cobranza, agenda y más — modulares,
                escalables, seguras. La tecnología desaparece para que tú solo pienses en tu
                negocio.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <PlatformDemoButton />
                <Button asChild size="lg" variant="outline">
                  <Link href="/precios">Ver planes y precios</Link>
                </Button>
              </div>
            </div>
          </FadeInUp>
        </Container>
      </section>

      <SectionWrapper spacing="lg" tone="muted">
        <Container>
          <FadeInUp>
            <SectionHeading
              eyebrow="El ecosistema"
              title="Todo lo que tu negocio necesita."
              subtitle="Una plataforma modular. Empiezas con lo que necesitas hoy, creces mañana."
              size="lg"
              className="mb-16"
            />
          </FadeInUp>

          <StaggerContainer>
            <BentoGrid>
              {PLATFORM_SECTIONS.map((section, i) => {
                const Icon = section.icon;
                const isWide = i === 0 || i === 4;
                return (
                  <StaggerItem key={section.title}>
                    <BentoCard span={isWide ? "wide" : "default"}>
                      <div className="flex h-full flex-col gap-4">
                        <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-lg">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{section.title}</h3>
                          <p className="text-muted-foreground mt-1 text-sm">
                            {section.description}
                          </p>
                        </div>
                        <ul className="mt-2 flex flex-col gap-1.5">
                          {section.details.map((detail) => (
                            <li key={detail} className="flex items-start gap-2 text-sm">
                              <ChevronRight className="text-primary mt-0.5 h-3.5 w-3.5 shrink-0" />
                              <span className="text-muted-foreground">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </BentoCard>
                  </StaggerItem>
                );
              })}
            </BentoGrid>
          </StaggerContainer>
        </Container>
      </SectionWrapper>

      <SectionWrapper spacing="lg">
        <Container size="md">
          <FadeInUp>
            <div className="flex flex-col items-center text-center">
              <Database className="text-primary h-10 w-10" />
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Tus datos son tuyos.
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl text-pretty sm:text-lg">
                Charlo Platform no es un extractor de datos. Tus conversaciones, clientes y métricas
                son tuyos. Si decides irte, te los llevas.
              </p>
            </div>
          </FadeInUp>
        </Container>
      </SectionWrapper>

      <SectionWrapper spacing="lg" tone="primary" className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_30%_50%,oklch(1_0_0_/_0.15),transparent_50%)]"
        />
        <Container size="md" className="relative">
          <FadeInUp>
            <div className="flex flex-col items-center text-center">
              <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
                Una plataforma. Tu Centro de Control.
              </h2>
              <p className="mt-6 max-w-2xl text-lg text-pretty opacity-90">
                Solicita una demostración y descubre cómo Charlo Platform transforma tu negocio.
              </p>
              <div className="mt-10">
                <PlatformCta />
              </div>
            </div>
          </FadeInUp>
        </Container>
      </SectionWrapper>
    </>
  );
}
