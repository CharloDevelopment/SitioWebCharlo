import type { Metadata } from "next";
import {
  Briefcase,
  Building2,
  ChevronRight,
  Dumbbell,
  GraduationCap,
  HeartPulse,
  Hotel,
  Scissors,
  Stethoscope,
  Store,
  UtensilsCrossed,
} from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/shared/container";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/motion/fade-in-up";
import { siteConfig } from "@/config/site";
import { EmpresasDemoButton } from "./empresas-demo-button";

export const metadata: Metadata = {
  title: "Empresas — Soluciones por industria",
  description:
    "Charlo se adapta a tu industria. Clínicas, restaurantes, escuelas, gimnasios, despachos y más. Misma plataforma, configuración a la medida.",
  alternates: {
    canonical: "/empresas",
  },
  openGraph: {
    title: "Empresas — Soluciones por industria",
    description:
      "Charlo se adapta a clínicas, restaurantes, escuelas, gimnasios, despachos. La misma plataforma, la configuración que tu industria necesita.",
    url: `${siteConfig.url}/empresas`,
  },
};

const INDUSTRIES = [
  {
    icon: Stethoscope,
    title: "Clínicas y consultorios",
    description:
      "Atención a pacientes, agendado de citas, recordatorios de seguimiento. Cero llamadas perdidas.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurantes y cafeterías",
    description:
      "Reservaciones, menú del día, eventos especiales, atención por WhatsApp. Sin saturar a tu equipo.",
  },
  {
    icon: GraduationCap,
    title: "Escuelas y academias",
    description:
      "Inscripciones, comunicación con padres, cobranza de colegiaturas. Todo automatizado.",
  },
  {
    icon: Briefcase,
    title: "Despachos y servicios profesionales",
    description:
      "Atención a clientes, agendado de reuniones, seguimiento de cobranza. Más tiempo para tu trabajo real.",
  },
  {
    icon: Dumbbell,
    title: "Gimnasios y estudios",
    description:
      "Inscripciones, renovaciones, recordatorios de clases. Tu membresía no se vence sola.",
  },
  {
    icon: Store,
    title: "Tiendas y comercios",
    description:
      "Atención por WhatsApp, seguimiento de pedidos, devoluciones. Tu tienda abierta 24/7.",
  },
  {
    icon: Scissors,
    title: "Estéticas y spas",
    description: "Agendado de servicios, recordatorios, promociones. Agenda llena automáticamente.",
  },
  {
    icon: Building2,
    title: "Constructoras e inmobiliarias",
    description:
      "Atención a prospectos, seguimiento de leads, agendado de citas. No pierdes más clientes.",
  },
  {
    icon: Hotel,
    title: "Hoteles y hospedaje",
    description:
      "Reservaciones, atención al huésped, seguimiento post-estadía. Experiencia memorable.",
  },
  {
    icon: HeartPulse,
    title: "Salud y bienestar",
    description:
      "Psicólogos, nutriólogos, terapeutas. Recordatorios de citas y seguimiento de pacientes.",
  },
];

export default function EmpresasPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Empresas — Charlo",
    description:
      "Soluciones de Charlo por industria: clínicas, restaurantes, escuelas, gimnasios, despachos, y más.",
    url: `${siteConfig.url}/empresas`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <SectionWrapper spacing="lg">
        <Container>
          <FadeInUp>
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <span className="border-border bg-muted/50 text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide">
                Soluciones por industria
              </span>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
                Soluciones para <span className="text-primary">negocios reales.</span>
              </h1>
              <p className="text-muted-foreground mt-6 max-w-2xl text-base text-balance sm:text-lg">
                Charlo se adapta a tu industria, no al revés. La misma plataforma, la configuración
                que tu negocio necesita.
              </p>
            </div>
          </FadeInUp>
        </Container>
      </SectionWrapper>

      <SectionWrapper spacing="lg" tone="muted">
        <Container>
          <StaggerContainer
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            staggerDelay={0.06}
          >
            {INDUSTRIES.map((industry) => {
              const Icon = industry.icon;
              return (
                <StaggerItem
                  key={industry.title}
                  className="group border-border bg-card hover:border-primary/50 flex flex-col gap-3 rounded-2xl border p-6 transition-all hover:shadow-lg"
                >
                  <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{industry.title}</h3>
                  <p className="text-muted-foreground flex-1 text-sm">{industry.description}</p>
                  <Link
                    href="/contacto"
                    className="text-primary inline-flex items-center text-sm font-medium hover:underline"
                  >
                    Ver más
                    <ChevronRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
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
                ¿Tu industria no aparece?
              </h2>
              <p className="mt-6 max-w-2xl text-lg text-pretty opacity-90">
                Charlo se adapta a cualquier negocio que atienda clientes, cobre y agende. Si tienes
                un negocio real, Charlo funciona.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <EmpresasDemoButton />
                <Link
                  href="/contacto"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-white/30 bg-transparent px-6 text-sm font-medium text-white transition-colors hover:bg-white/10"
                >
                  Contactar al equipo
                </Link>
              </div>
            </div>
          </FadeInUp>
        </Container>
      </SectionWrapper>
    </>
  );
}
