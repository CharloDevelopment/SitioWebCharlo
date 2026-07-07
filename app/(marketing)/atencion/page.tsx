import type { Metadata } from "next";
import {
  Bell,
  CalendarCheck,
  CheckCircle2,
  Clock,
  HeartPulse,
  MessageSquareWarning,
  UserX,
} from "lucide-react";
import { ProductHero } from "@/components/sections/product/product-hero";
import { ProductProblem } from "@/components/sections/product/product-problem";
import { ProductDemo } from "@/components/sections/product/product-demo";
import { ProductFeatures } from "@/components/sections/product/product-features";
import { ProductBenefits } from "@/components/sections/product/product-benefits";
import { ProductCases } from "@/components/sections/product/product-cases";
import { ProductFaq } from "@/components/sections/product/product-faq";
import { ProductCta } from "@/components/sections/product/product-cta";
import { AtencionMockup } from "@/components/product/mockups/atencion-mockup";
import { Bot } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Charlo Atención — Atención al cliente con IA 24/7",
  description:
    "Nunca dejes a un cliente esperando. Charlo Atención responde preguntas frecuentes y atiende solicitudes automáticamente 24/7. Para PYMES.",
  alternates: {
    canonical: "/atencion",
  },
  openGraph: {
    title: "Charlo Atención — Atención al cliente con IA 24/7",
    description:
      "Responde preguntas frecuentes y atiende solicitudes automáticamente. 24/7, sin perder clientes.",
    url: `${siteConfig.url}/atencion`,
  },
};

const PROBLEMS = [
  {
    title: "Tardas en responder",
    description:
      "Pasas horas entre mensajes. Tus clientes se van a la competencia mientras tú duermes.",
    icon: <MessageSquareWarning className="h-5 w-5" />,
  },
  {
    title: "Pierdes clientes fuera de horario",
    description: "El 60% de los mensajes llegan fuera de horario. Sin respuesta = cliente perdido.",
    icon: <Clock className="h-5 w-5" />,
  },
  {
    title: "Preguntas repetitivas",
    description: "Respondes 50 veces al día lo mismo: precios, horarios, ubicación. Es agotador.",
    icon: <Bell className="h-5 w-5" />,
  },
  {
    title: "No hay escalación",
    description:
      "Cuando el bot falla (o no hay bot), el cliente se queda sin respuesta. Pierde confianza.",
    icon: <UserX className="h-5 w-5" />,
  },
];

const FEATURES = [
  {
    title: "Respuestas instantáneas 24/7",
    description: "Tu agente responde en segundos, a cualquier hora. Tus clientes nunca esperan.",
    icon: <Bot className="h-5 w-5" />,
  },
  {
    title: "Entrenado con tu negocio",
    description:
      "El agente conoce tus servicios, precios, políticas. Configuramos todo con tu información.",
    icon: <CheckCircle2 className="h-5 w-5" />,
  },
  {
    title: "Escalación a humano",
    description:
      "Cuando el cliente lo necesita, conecta con una persona real sin que se pierda el contexto.",
    icon: <UserX className="h-5 w-5" />,
  },
  {
    title: "Historial completo",
    description: "Todas las conversaciones guardadas. Revisa, mide y mejora tu atención.",
    icon: <Clock className="h-5 w-5" />,
  },
  {
    title: "Multi-canal",
    description: "WhatsApp, web, Instagram, Facebook. Un agente, todos los canales.",
    icon: <MessageSquareWarning className="h-5 w-5" />,
  },
  {
    title: "Métricas en tiempo real",
    description:
      "Sabes cuántas conversaciones se resolvieron, cuánto tiempo se ahorró y la satisfacción.",
    icon: <CheckCircle2 className="h-5 w-5" />,
  },
];

const BENEFITS = [
  {
    title: "Atiende 100% de los mensajes",
    description: "Ninguna consulta queda sin responder. Ni a las 3am ni en días festivos.",
    icon: <Clock className="h-5 w-5" />,
  },
  {
    title: "Recupera clientes perdidos",
    description: "El 35% de los clientes fuera de horario se recuperan con respuesta automática.",
    icon: <CheckCircle2 className="h-5 w-5" />,
  },
  {
    title: "Libera a tu equipo",
    description:
      "Tu equipo se enfoca en clientes que necesitan atención humana. El bot hace el resto.",
    icon: <UserX className="h-5 w-5" />,
  },
  {
    title: "Ahorra horas cada semana",
    description: "Promedio: 10+ horas semanales dedicadas a responder mensajes repetitivos.",
    icon: <CalendarCheck className="h-5 w-5" />,
  },
];

const CASES = [
  {
    title: "Clínicas y consultorios",
    description:
      "Responde preguntas sobre servicios, precios, ubicación. Agenda citas automáticamente.",
    icon: <HeartPulse className="h-6 w-6" />,
  },
  {
    title: "Restaurantes",
    description:
      "Reservaciones, menú del día, horarios, eventos especiales. Sin saturar tu WhatsApp.",
    icon: <Bot className="h-6 w-6" />,
  },
  {
    title: "Tiendas y comercios",
    description: "Disponibilidad de productos, envíos, devoluciones, métodos de pago.",
    icon: <CheckCircle2 className="h-6 w-6" />,
  },
];

const FAQS = [
  {
    question: "¿El agente suena como robot?",
    answer: "No. Configuramos el tono y estilo de tu marca. El agente habla como tu negocio.",
  },
  {
    question: "¿Puede responder sobre mis servicios específicos?",
    answer: "Sí. Entrenamos al agente con tu información: servicios, precios, políticas, FAQ.",
  },
  {
    question: "¿Qué pasa si no sabe responder?",
    answer:
      "Conecta con una persona real automáticamente. La conversación se transfiere con todo el contexto.",
  },
  {
    question: "¿Funciona con mi WhatsApp actual?",
    answer: "Sí. Se integra con tu número de WhatsApp Business. No necesitas cambiar de línea.",
  },
  {
    question: "¿Cuánto tarda en configurarse?",
    answer: "Menos de 24 horas. Tú nos das la información, nosotros configuramos todo.",
  },
];

export default function AtencionPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Charlo Atención",
    description:
      "Atención al cliente con IA 24/7. Responde preguntas frecuentes, agenda citas, y conecta con humanos cuando es necesario.",
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
        eyebrow="Charlo Atención"
        title={
          <>
            Atención al cliente con IA, <span className="text-primary">24/7.</span>
          </>
        }
        subtitle="Nunca dejes a un cliente esperando. Charlo Atención responde preguntas frecuentes y atiende solicitudes automáticamente."
        icon={<Bot className="text-primary h-3.5 w-3.5" />}
      />
      <ProductProblem
        title="Tu WhatsApp no puede esperar."
        subtitle="Estos son los problemas que viven las PYMES que atienden por chat."
        problems={PROBLEMS}
      />
      <ProductDemo
        title="Prueba el agente. Interactúa con él."
        subtitle="Pregúntale lo que sea. Respuestas instantáneas, escalación a humano cuando lo necesita."
      >
        <AtencionMockup />
      </ProductDemo>
      <ProductFeatures
        title="Todo lo que tu agente necesita."
        subtitle="Configurado para tu negocio, con tu información, en menos de 24 horas."
        features={FEATURES}
      />
      <ProductBenefits title="Resultados que verás desde el día 1." benefits={BENEFITS} />
      <ProductCases title="Pensado para negocios reales." cases={CASES} />
      <ProductFaq
        title="Preguntas frecuentes"
        subtitle="Lo que otros empresarios preguntan antes de empezar."
        faqs={FAQS}
      />
      <ProductCta
        title="Empieza a atender 24/7."
        subtitle="Solicita una demostración y descubre cómo Charlo Atención transforma tu WhatsApp."
      />
    </>
  );
}
