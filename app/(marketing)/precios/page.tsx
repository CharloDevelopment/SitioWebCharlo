import type { Metadata } from "next";
import { PricingHero } from "@/components/sections/pricing/pricing-hero";
import { PricingCards } from "@/components/sections/pricing/pricing-cards";
import { PricingComparator } from "@/components/sections/pricing/pricing-comparator";
import { SavingsCalculator } from "@/components/sections/pricing/savings-calculator";
import { PricingFaq } from "@/components/sections/pricing/pricing-faq";
import { ProductCta } from "@/components/sections/product/product-cta";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Precios — Charlo",
  description:
    "Planes simples para PYMES. Setup $499 MXN único. Inicial $599, Crecimiento $1,499, Empresa desde $5,499 MXN/mes. Sin contratos.",
  alternates: {
    canonical: "/precios",
  },
  openGraph: {
    title: "Precios — Charlo",
    description: "Empieza pequeño, crece cuando quieras. Sin contratos. Sin costos ocultos.",
    url: `${siteConfig.url}/precios`,
  },
};

export default function PreciosPage() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Charlo Platform",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "Plataforma de IA para PYMES. Automatiza atención al cliente, cobranza y agenda.",
    offers: [
      {
        "@type": "Offer",
        name: "Plan Inicial",
        price: "599",
        priceCurrency: "MXN",
        description: "Para empresas que apenas comienzan. 1 solución incluida.",
      },
      {
        "@type": "Offer",
        name: "Plan Crecimiento",
        price: "1499",
        priceCurrency: "MXN",
        description:
          "Para empresas que quieren automatizar más. 3 soluciones (Atención + Cobranza + Agenda).",
      },
      {
        "@type": "Offer",
        name: "Plan Empresa",
        price: "5499",
        priceCurrency: "MXN",
        description: "Soluciones personalizadas, integraciones a medida, soporte dedicado con SLA.",
      },
    ],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Charlo Platform",
    description: "Plataforma de IA para PYMES con tres planes: Inicial, Crecimiento y Empresa.",
    brand: { "@type": "Brand", name: "Charlo" },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "599",
      highPrice: "5499",
      priceCurrency: "MXN",
      offerCount: 3,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <PricingHero />
      <PricingCards />
      <SavingsCalculator />
      <PricingComparator />
      <PricingFaq />
      <ProductCta
        title="Empieza pequeño. Crece cuando quieras."
        subtitle="Solicita una demostración y descubre cómo Charlo se adapta a tu negocio."
      />
    </>
  );
}
