import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/home/hero-section";
import { ProblemSolutionSection } from "@/components/sections/home/problem-solution-section";
import { PlatformSolutionsSection } from "@/components/sections/home/platform-solutions-section";
import { HowItWorksSection } from "@/components/sections/home/how-it-works-section";
import { LogoCarouselSection } from "@/components/sections/home/logo-carousel-section";
import { FaqSection } from "@/components/sections/home/faq-section";
import { FinalCtaSection } from "@/components/sections/home/final-cta-section";
import { siteConfig } from "@/config/site";

const FAQS_SCHEMA = [
  {
    question: "¿Qué es exactamente Charló y qué hace por mi negocio?",
    answer:
      "Charló es una plataforma que automatiza tres procesos clave de tu negocio: la atención al cliente, la cobranza y la agenda. En vez de contestar WhatsApp manualmente, perseguir pagos y confirmar citas una por una, Charló lo hace por ti, 24/7.",
  },
  {
    question: "¿Cuánto tarda en estar funcionando?",
    answer:
      "La implementación toma menos de 24 horas. Una vez que nos das tu información, nuestro equipo configura la plataforma y la conecta con tu WhatsApp.",
  },
  {
    question: "¿Tengo que firmar contrato o comprometerme?",
    answer:
      "No. Charló se paga mes a mes. Si decides que no es para ti, cancelas y se acabó. Sin penalizaciones.",
  },
  {
    question: "¿Y si el agente no sabe qué responder?",
    answer:
      "Si Charló no entiende una pregunta, automáticamente escala la conversación a ti o a tu equipo con todo el historial.",
  },
  {
    question: "¿Funciona con mi WhatsApp actual?",
    answer:
      "Sí. Charló se integra con tu número de WhatsApp Business. No necesitas cambiar de línea.",
  },
  {
    question: "¿Cuánto cuesta y qué incluye?",
    answer:
      "Setup único de $499 MXN. Suscripción mensual desde $599 MXN. Sin contratos, sin costos ocultos.",
  },
];

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description:
    "Charló automatiza tu negocio. Atención, cobranza y agenda funcionando 24/7. Empieza en minutos, sin contratos.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description:
      "Charló automatiza tu negocio. Atención, cobranza y agenda funcionando 24/7. Empieza en minutos, sin contratos.",
    url: siteConfig.url,
  },
};

export default function HomePage() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    logo: `${siteConfig.url}/brand/logo.png`,
    sameAs: [
      siteConfig.social.twitter,
      siteConfig.social.linkedin,
      siteConfig.social.instagram,
    ].filter(Boolean),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: siteConfig.email,
      availableLanguage: ["Spanish", "es"],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS_SCHEMA.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: siteConfig.description,
    offers: {
      "@type": "Offer",
      price: "599",
      priceCurrency: "MXN",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema),
        }}
      />

      <HeroSection />
      <ProblemSolutionSection />
      <PlatformSolutionsSection />
      <HowItWorksSection />
      <LogoCarouselSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
