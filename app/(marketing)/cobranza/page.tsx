import type { Metadata } from "next";
import {
  CreditCard,
  Clock,
  TrendingDown,
  Users,
  MessageCircle,
  CheckCircle2,
  Wallet,
  CalendarCheck,
  Briefcase,
  GraduationCap,
  UtensilsCrossed,
} from "lucide-react";
import { ProductHero } from "@/components/sections/product/product-hero";
import { ProductProblem } from "@/components/sections/product/product-problem";
import { ProductDemo } from "@/components/sections/product/product-demo";
import { ProductFeatures } from "@/components/sections/product/product-features";
import { ProductBenefits } from "@/components/sections/product/product-benefits";
import { ProductCases } from "@/components/sections/product/product-cases";
import { ProductFaq } from "@/components/sections/product/product-faq";
import { ProductCta } from "@/components/sections/product/product-cta";
import { CobranzaMockup } from "@/components/product/mockups/cobranza-mockup";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Charlo Cobranza — Recupera pagos sin perseguir a nadie",
  description:
    "Automatiza recordatorios de pago por email, SMS y WhatsApp. Charlo Cobranza trabaja por ti sin perder tu toque humano.",
  alternates: {
    canonical: "/cobranza",
  },
  openGraph: {
    title: "Charlo Cobranza — Recupera pagos sin perseguir a nadie",
    description:
      "Automatiza recordatorios de pago, seguimiento de promesas de pago y enlaces de cobro. Sin perder tu toque humano.",
    url: `${siteConfig.url}/cobranza`,
  },
};

const PROBLEMS = [
  {
    title: "Persigues pagos uno por uno",
    description:
      "Pasas horas mandando mensajes: ¿ya pagaste? ¿cuándo pagas? Es agotador y se siente incómodo.",
    icon: <MessageCircle className="h-5 w-5" />,
  },
  {
    title: "Pagos se vencen sin recordatorio",
    description:
      "Clientes que pagan siempre, pero un día se les olvida. Sin recordatorio, el pago se retrasa.",
    icon: <Clock className="h-5 w-5" />,
  },
  {
    title: "Cobros manuales y dispersos",
    description:
      "Excel, WhatsApp, emails, recordatorios verbales. Nada se conecta. Pierdes visibilidad.",
    icon: <CreditCard className="h-5 w-5" />,
  },
  {
    title: "Cobrador humano es caro",
    description:
      "Contratar a alguien solo para cobrar no tiene sentido. Pero alguien tiene que hacerlo.",
    icon: <Users className="h-5 w-5" />,
  },
];

const FEATURES = [
  {
    title: "Recordatorios automáticos",
    description:
      "Email, SMS y WhatsApp programados. Antes del vencimiento, el día del vencimiento, y después.",
    icon: <Clock className="h-5 w-5" />,
  },
  {
    title: "Mensajes con tu tono",
    description: "Configuramos el tono con tu marca. Nunca se siente como un robot persiguiendo.",
    icon: <MessageCircle className="h-5 w-5" />,
  },
  {
    title: "Promesas de pago",
    description: "El cliente promete pagar el día X. Charlo hace seguimiento automático.",
    icon: <CalendarCheck className="h-5 w-5" />,
  },
  {
    title: "Links de pago",
    description:
      "Cada recordatorio incluye link directo a pagar. Stripe, Mercado Pago, transferencia.",
    icon: <CreditCard className="h-5 w-5" />,
  },
  {
    title: "Dashboard en vivo",
    description: "Ves quién pagó, quién debe, quién prometió. Todo actualizado en tiempo real.",
    icon: <CheckCircle2 className="h-5 w-5" />,
  },
  {
    title: "Reportes automáticos",
    description:
      "Cada semana sabes cuánto cobraste, cuánto falta, y la efectividad de los recordatorios.",
    icon: <TrendingDown className="h-5 w-5" />,
  },
];

const BENEFITS = [
  {
    title: "Cobra sin esfuerzo",
    description: "Charlo trabaja por ti. Tú te enteras cuando pagan, no cuando persigues.",
    icon: <Wallet className="h-5 w-5" />,
  },
  {
    title: "Recupera pagos vencidos",
    description: "Promedio: recuperamos el 40% de pagos que se dieron por perdidos.",
    icon: <TrendingDown className="h-5 w-5" />,
  },
  {
    title: "Mejora tu flujo de caja",
    description: "Menos pagos retrasados = más estabilidad financiera para tu negocio.",
    icon: <CheckCircle2 className="h-5 w-5" />,
  },
  {
    title: "Ahorra 5+ horas semanales",
    description: "Lo que dedicabas a perseguir pagos, ahora lo dedicas a crecer tu negocio.",
    icon: <Clock className="h-5 w-5" />,
  },
];

const CASES = [
  {
    title: "Despachos y servicios",
    description: "Cobros recurrentes, honorarios mensuales, consultas. Flujo constante de pagos.",
    icon: <Briefcase className="h-6 w-6" />,
  },
  {
    title: "Escuelas y academias",
    description: "Colegiaturas, inscripciones, materiales. Padres siempre al día.",
    icon: <GraduationCap className="h-6 w-6" />,
  },
  {
    title: "Comercios y restaurantes",
    description: "Cuentas por cobrar a clientes corporativos. Sin perder la relación.",
    icon: <UtensilsCrossed className="h-6 w-6" />,
  },
];

const FAQS = [
  {
    question: "¿El cliente siente que le está cobrando una máquina?",
    answer:
      "No. Configuramos el tono y estilo con tu marca. El mensaje se siente personal, profesional y amable.",
  },
  {
    question: "¿Puedo incluir link de pago?",
    answer: "Sí. Stripe, Mercado Pago, transferencia, link personalizado. Lo que uses.",
  },
  {
    question: "¿Y si el cliente promete pagar y no paga?",
    answer:
      "Charlo hace seguimiento automático. Si no cumple, escala a recordatorio más firme y te notifica.",
  },
  {
    question: "¿Necesito cambiar mi forma actual de cobrar?",
    answer: "No. Charlo se adapta a tu proceso. Solo automatiza los recordatorios.",
  },
  {
    question: "¿Puedo excluir a ciertos clientes?",
    answer: "Sí. Configuras excepciones para clientes VIP, pagos manuales, o lo que necesites.",
  },
];

export default function CobranzaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Charlo Cobranza",
    description:
      "Automatiza recordatorios de pago por email, SMS y WhatsApp. Recupera pagos sin perseguir a nadie.",
    brand: { "@type": "Brand", name: "Charlo" },
    offers: {
      "@type": "Offer",
      price: "599",
      priceCurrency: "MXN",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ProductHero
        eyebrow="Charlo Cobranza"
        title={
          <>
            Cobra sin perseguir a <span className="text-primary">nadie.</span>
          </>
        }
        subtitle="Charlo Cobranza automatiza recordatorios de pago por email, SMS y WhatsApp. Trabaja por ti sin perder tu toque humano."
        icon={<CreditCard className="text-primary h-3.5 w-3.5" />}
      />
      <ProductProblem
        title="Cobrar no debería ser tu trabajo."
        subtitle="Tu trabajo es hacer crecer tu negocio. No perseguir pagos."
        problems={PROBLEMS}
      />
      <ProductDemo
        title="Mira tu cobranza trabajar sola."
        subtitle="Filtra por estado, envía recordatorios, marca como cobrado. Todo en un panel."
      >
        <CobranzaMockup />
      </ProductDemo>
      <ProductFeatures
        title="Tu cobrador automático 24/7."
        subtitle="Configurado en minutos, funcionando desde el día 1."
        features={FEATURES}
      />
      <ProductBenefits title="Lo que ganas desde la primera semana." benefits={BENEFITS} />
      <ProductCases title="Funciona para tu industria." cases={CASES} />
      <ProductFaq
        title="Preguntas frecuentes"
        subtitle="Lo que otros empresarios preguntan antes de automatizar su cobranza."
        faqs={FAQS}
      />
      <ProductCta
        title="Recupera lo que te deben."
        subtitle="Solicita una demostración y descubre cómo Charlo Cobranza mejora tu flujo de caja."
      />
    </>
  );
}
