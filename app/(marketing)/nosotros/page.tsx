import type { Metadata } from "next";
import { Eye, Heart, Lightbulb, Rocket, Shield, Sparkles, Target, Users } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/motion/fade-in-up";
import { siteConfig } from "@/config/site";
import { NosotrosDemoButton } from "./nosotros-demo-button";

export const metadata: Metadata = {
  title: "Nosotros — Charlo",
  description:
    "Charlo nace para que cualquier PYME pueda acceder a tecnología avanzada. Conoce nuestra historia, misión, visión y equipo.",
  alternates: {
    canonical: "/nosotros",
  },
  openGraph: {
    title: "Nosotros — Charlo",
    description:
      "Construimos tecnología para empresas que quieren avanzar. Democratizamos la IA para PYMES.",
    url: `${siteConfig.url}/nosotros`,
  },
};

const PRINCIPLES = [
  {
    icon: Heart,
    title: "Humanidad primero",
    description:
      "La tecnología debe servir a las personas, no reemplazarlas. Diseñamos pensando en el usuario real.",
  },
  {
    icon: Lightbulb,
    title: "Simplicidad radical",
    description:
      "Lo complejo es fácil. Lo simple requiere trabajo. Hacemos el trabajo para que tú no lo hagas.",
  },
  {
    icon: Shield,
    title: "Confianza ganada",
    description:
      "Tus datos son tuyos. La transparencia no es opcional, es el piso de cualquier relación.",
  },
  {
    icon: Rocket,
    title: "Velocidad con cuidado",
    description: "Iteramos rápido pero sin romper lo que funciona. Crecemos sin perder calidad.",
  },
];

const TEAM = [
  {
    name: "Fundador/a",
    role: "CEO & Co-founder",
    initials: "F",
    bio: "Apasionado por democratizar la tecnología para PYMES.",
  },
  {
    name: "Co-founder",
    role: "CTO & Co-founder",
    initials: "C",
    bio: "Ingeniero con 10+ años construyendo productos que la gente usa.",
  },
  {
    name: "Head of Product",
    role: "Producto",
    initials: "P",
    bio: "Diseña experiencias simples para problemas complejos.",
  },
  {
    name: "Head of Customer Success",
    role: "Customer Success",
    initials: "S",
    bio: "Se asegura de que cada cliente ame Charlo.",
  },
];

export default function NosotrosPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Nosotros — Charlo",
    description:
      "Construimos tecnología para empresas que quieren avanzar. Democratizamos la IA para PYMES de LATAM.",
    url: `${siteConfig.url}/nosotros`,
    mainEntity: {
      "@type": "Organization",
      name: "Charlo",
      url: siteConfig.url,
    },
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
                <Sparkles className="text-primary h-3.5 w-3.5" />
                Nuestra historia
              </span>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
                Construimos tecnología para empresas que quieren{" "}
                <span className="text-primary">avanzar.</span>
              </h1>
              <p className="text-muted-foreground mt-6 max-w-2xl text-base text-balance sm:text-lg">
                Durante años, la tecnología avanzada estuvo reservada para grandes empresas. Charlo
                nace para cambiar eso. Creemos que cualquier negocio debería poder acceder a
                herramientas inteligentes sin importar su tamaño o experiencia tecnológica.
              </p>
            </div>
          </FadeInUp>
        </Container>
      </SectionWrapper>

      <SectionWrapper spacing="lg" tone="muted">
        <Container size="md">
          <div className="grid gap-6 md:grid-cols-2">
            <FadeInUp delay={0.1}>
              <div className="border-border bg-card flex h-full flex-col gap-4 rounded-2xl border p-8">
                <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-lg">
                  <Target className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-semibold tracking-tight">Nuestra misión</h2>
                <p className="text-muted-foreground">
                  Democratizar el acceso a la inteligencia artificial para que cualquier PYME pueda
                  competir con las mismas herramientas que las grandes empresas, sin necesidad de
                  contratar equipos técnicos caros ni pasar meses en implementaciones.
                </p>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="border-border bg-card flex h-full flex-col gap-4 rounded-2xl border p-8">
                <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-lg">
                  <Eye className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-semibold tracking-tight">Nuestra visión</h2>
                <p className="text-muted-foreground">
                  Ser el compañero digital de las PYMES en LATAM. Un mundo donde ningún negocio se
                  queda atrás por no tener acceso a la tecnología, y donde los dueños pueden
                  enfocarse en lo que aman: hacer crecer su negocio.
                </p>
              </div>
            </FadeInUp>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper spacing="lg">
        <Container>
          <FadeInUp>
            <div className="mb-12 text-center">
              <span className="border-border bg-muted/50 text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide">
                <Heart className="text-primary h-3.5 w-3.5" />
                Nuestros principios
              </span>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Cómo pensamos, cómo trabajamos.
              </h2>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {PRINCIPLES.map((principle) => {
              const Icon = principle.icon;
              return (
                <StaggerItem
                  key={principle.title}
                  className="border-border bg-card flex flex-col gap-3 rounded-2xl border p-6"
                >
                  <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-lg">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{principle.title}</h3>
                  <p className="text-muted-foreground text-sm">{principle.description}</p>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </SectionWrapper>

      <SectionWrapper spacing="lg" tone="muted">
        <Container>
          <FadeInUp>
            <div className="mb-12 text-center">
              <span className="border-border bg-muted/50 text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide">
                <Users className="text-primary h-3.5 w-3.5" />
                El equipo
              </span>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Personas detrás de Charlo.
              </h2>
              <p className="text-muted-foreground mx-auto mt-4 max-w-2xl">
                Un equipo pequeño pero poderoso, obsesionado con hacer tecnología simple para PYMES.
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {TEAM.map((member) => (
              <StaggerItem
                key={member.role}
                className="border-border bg-card flex flex-col items-center gap-4 rounded-2xl border p-6 text-center"
              >
                <Avatar className="h-20 w-20">
                  <AvatarFallback className="bg-primary/10 text-primary text-lg font-semibold">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-primary text-sm">{member.role}</p>
                </div>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <p className="text-muted-foreground mt-8 text-center text-xs">
            * Equipo ilustrativo. Próximamente fotos y bios reales.
          </p>
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
                ¿Listo para ser parte de la historia?
              </h2>
              <p className="mt-6 max-w-2xl text-lg text-pretty opacity-90">
                Únete a las PYMES que ya están usando Charlo para crecer. Solicita una demostración.
              </p>
              <div className="mt-10">
                <NosotrosDemoButton />
              </div>
            </div>
          </FadeInUp>
        </Container>
      </SectionWrapper>
    </>
  );
}
