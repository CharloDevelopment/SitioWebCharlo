export const siteConfig = {
  name: "Charló",
  tagline: "La inteligencia artificial, hecha simple.",
  description:
    "Charló automatiza tu negocio. Atención, cobranza y agenda funcionando 24/7. Empieza en minutos, sin contratos.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://charlo.mx",
  locale: "es_MX",
  ogImage: "/og/og.png",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hola@charlo.mx",
  whatsapp: {
    number: process.env.NEXT_PUBLIC_WA_NUMBER ?? "+525500000000",
    defaultMessage:
      process.env.NEXT_PUBLIC_WA_MESSAGE ??
      "Hola, quiero solicitar una demostración de Charlo para mi empresa.",
  },
  social: {
    twitter: "https://twitter.com/charlo",
    linkedin: "https://linkedin.com/company/charlo",
    instagram: "https://instagram.com/charlo",
  },
} as const;

export type SiteConfig = typeof siteConfig;
