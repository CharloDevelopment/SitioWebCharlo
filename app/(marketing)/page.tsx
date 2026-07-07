import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/home/hero-section";
import { ProblemsSection } from "@/components/sections/home/problems-section";
import { PlatformSolutionsSection } from "@/components/sections/home/platform-solutions-section";
import { BenefitsSection } from "@/components/sections/home/benefits-section";
import { HowItWorksSection } from "@/components/sections/home/how-it-works-section";
import { UseCasesSection } from "@/components/sections/home/use-cases-section";
import { TestimonialsSection } from "@/components/sections/home/testimonials-section";
import { FaqSection } from "@/components/sections/home/faq-section";
import { FinalCtaSection } from "@/components/sections/home/final-cta-section";
import { siteConfig } from "@/config/site";

const FAQS_SCHEMA = [
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
    question: "¿Funciona para mi tipo de negocio?",
    answer:
      "Sí. Charlo se adapta a tu industria. Trabajamos con clínicas, restaurantes, escuelas, despachos, gimnasios y más.",
  },
  {
    question: "¿Mis datos están seguros?",
    answer:
      "Sí. Usamos encriptación y servidores confiables. Tus datos y los de tus clientes están protegidos.",
  },
];

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description:
    "Charlo automatiza tu atención, cobranza y agenda para PYMES de 2 a 50 empleados. Empieza en minutos, sin contratos, sin procesos complicados.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description:
      "Plataforma de IA para PYMES. Automatiza atención, cobranza y agenda. Empieza en minutos, sin contratos.",
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
    offers: {
      "@type": "Offer",
      price: "599",
      priceCurrency: "MXN",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "599",
        priceCurrency: "MXN",
        referenceQuantity: {
          "@type": "QuantitativeValue",
          value: 1,
          unitText: "MONTH",
        },
      },
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
      <ProblemsSection />
      <PlatformSolutionsSection />
      <BenefitsSection />
      <HowItWorksSection />
      <UseCasesSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
