import type { Metadata } from "next";
import {
  CalendarCheck,
  CalendarX,
  Clock,
  AlertCircle,
  Bell,
  CheckCircle2,
  HeartPulse,
  Briefcase,
  Scissors,
  Users,
  Repeat,
  Smartphone,
} from "lucide-react";
import { ProductHero } from "@/components/sections/product/product-hero";
import { ProductProblem } from "@/components/sections/product/product-problem";
import { ProductDemo } from "@/components/sections/product/product-demo";
import { ProductFeatures } from "@/components/sections/product/product-features";
import { ProductBenefits } from "@/components/sections/product/product-benefits";
import { ProductCases } from "@/components/sections/product/product-cases";
import { ProductFaq } from "@/components/sections/product/product-faq";
import { ProductCta } from "@/components/sections/product/product-cta";
import { AgendaMockup } from "@/components/product/mockups/agenda-mockup";
import { CalendarClock } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Charlo Agenda — Citas sin esfuerzo",
  description:
    "Permite que tus clientes agenden, confirmen y gestionen citas automáticamente. Sin olvidos, sin llamadas, sin estrés.",
  alternates: {
    canonical: "/agenda",
  },
  openGraph: {
    title: "Charlo Agenda — Citas sin esfuerzo",
    description:
      "Agendado automático 24/7. Confirmaciones, recordatorios y reagendados sin intervención humana.",
    url: `${siteConfig.url}/agenda`,
  },
};

const PROBLEMS = [
  {
    title: "Se te olvidan citas",
    description: "Tienes 5 pacientes/clientes al día y se te traspapela uno. Tu reputación sufre.",
    icon: <CalendarX className="h-5 w-5" />,
  },
  {
    title: "Confirmar por WhatsApp toma horas",
    description: "Lunes: 30 mensajes confirmando citas del martes. Es trabajo que no agrega valor.",
    icon: <Clock className="h-5 w-5" />,
  },
  {
    title: "Clientes no se presentan",
    description: "Sin recordatorio, el 30% de las citas se olvidan. Tiempo y dinero perdido.",
    icon: <AlertCircle className="h-5 w-5" />,
  },
  {
    title: "Reagendar es un caos",
    description:
      "Si cancelan, tienes que mover manualmente, notificar al siguiente, llenar el hueco.",
    icon: <Bell className="h-5 w-5" />,
  },
];

const FEATURES = [
  {
    title: "Agendado 24/7",
    description:
      "Tus clientes agendan a cualquier hora, desde cualquier dispositivo. Sin llamarte.",
    icon: <CalendarClock className="h-5 w-5" />,
  },
  {
    title: "Confirmaciones automáticas",
    description:
      "Charlo confirma con cada cliente. Si confirma, agenda. Si no, reagenda con el siguiente.",
    icon: <CheckCircle2 className="h-5 w-5" />,
  },
  {
    title: "Recordatorios inteligentes",
    description: "24h antes y 1h antes. Por WhatsApp, email o SMS. Lo que prefieras.",
    icon: <Bell className="h-5 w-5" />,
  },
  {
    title: "Sincronización con calendarios",
    description: "Google Calendar, Outlook, Apple Calendar. Charlo se integra sin duplicar citas.",
    icon: <CalendarCheck className="h-5 w-5" />,
  },
  {
    title: "Reagendado automático",
    description: "Si cancelan, ofreces el slot a la lista de espera. El hueco se llena solo.",
    icon: <Repeat className="h-5 w-5" />,
  },
  {
    title: "Pagos anticipados",
    description: "Cobra una señal al agendar. Reduce no-shows hasta 70%.",
    icon: <Smartphone className="h-5 w-5" />,
  },
];

const BENEFITS = [
  {
    title: "Cero citas olvidadas",
    description: "Los recordatorios automáticos reducen los no-shows hasta en 70%.",
    icon: <CheckCircle2 className="h-5 w-5" />,
  },
  {
    title: "Agenda llena automáticamente",
    description: "Mientras tú duermes, tus clientes agendan. Llegas con el día lleno.",
    icon: <CalendarCheck className="h-5 w-5" />,
  },
  {
    title: "Ahorra 8+ horas semanales",
    description: "Lo que dedicabas a confirmar y reagendar, ahora es automático.",
    icon: <Clock className="h-5 w-5" />,
  },
  {
    title: "Mejora la experiencia",
    description: "Tus clientes agendan cuando quieren, sin esperar horario de oficina.",
    icon: <Users className="h-5 w-5" />,
  },
];

const CASES = [
  {
    title: "Clínicas y consultorios",
    description: "Pacientes agendan sus consultas. Confirmaciones y recordatorios automáticos.",
    icon: <HeartPulse className="h-6 w-6" />,
  },
  {
    title: "Despachos profesionales",
    description: "Reuniones con clientes, consultas legales, sesiones de trabajo. Todo agendado.",
    icon: <Briefcase className="h-6 w-6" />,
  },
  {
    title: "Estéticas y spas",
    description: "Servicios, profesionales, horarios. El cliente elige y agenda.",
    icon: <Scissors className="h-6 w-6" />,
  },
];

const FAQS = [
  {
    question: "¿Mis clientes pueden agendar solos?",
    answer: "Sí. Les envías un link o lo pones en tu web/WhatsApp. Eligen servicio, fecha y hora.",
  },
  {
    question: "¿Y si no confirman?",
    answer: "Charlo les recuerda 24h antes. Si no confirman, el slot se libera automáticamente.",
  },
  {
    question: "¿Funciona con Google Calendar?",
    answer: "Sí. Sincronización bidireccional con Google Calendar, Outlook y Apple Calendar.",
  },
  {
    question: "¿Puedo cobrar al agendar?",
    answer: "Sí. Configuras una señal o el pago completo. Stripe, Mercado Pago, transferencia.",
  },
  {
    question: "¿Necesito cambiar mi forma actual de agendar?",
    answer: "No. Charlo se conecta a tu sistema actual. Solo automatiza lo que haces manual.",
  },
];

export default function AgendaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Charlo Agenda",
    description:
      "Permite que tus clientes agenden, confirmen y gestionen citas automáticamente. Sin olvidos, sin llamadas.",
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
        eyebrow="Charlo Agenda"
        title={
          <>
            Tu agenda llena, <span className="text-primary">sin esfuerzo.</span>
          </>
        }
        subtitle="Permite que tus clientes agenden, confirmen y gestionen citas automáticamente. Sin olvidos, sin llamadas, sin estrés."
        icon={<CalendarClock className="text-primary h-3.5 w-3.5" />}
      />
      <ProductProblem
        title="Las citas no deberían ser caóticas."
        subtitle="Si tu agenda te estresa, hay un problema. Estos son los más comunes."
        problems={PROBLEMS}
      />
      <ProductDemo
        title="Una agenda que trabaja sola."
        subtitle="Click en un slot vacío para agregar una cita. Observa cómo se llena la semana."
      >
        <AgendaMockup />
      </ProductDemo>
      <ProductFeatures
        title="Todo lo que tu agenda necesita."
        subtitle="Diseñado para PYMES. Configurado en minutos, funcionando desde el día 1."
        features={FEATURES}
      />
      <ProductBenefits
        title="Resultados que notarás desde la primera semana."
        benefits={BENEFITS}
      />
      <ProductCases title="Funciona para tu tipo de negocio." cases={CASES} />
      <ProductFaq
        title="Preguntas frecuentes"
        subtitle="Lo que otros empresarios preguntan antes de automatizar su agenda."
        faqs={FAQS}
      />
      <ProductCta
        title="Llena tu agenda en automático."
        subtitle="Solicita una demostración y descubre cómo Charlo Agenda transforma tu día a día."
      />
    </>
  );
}
