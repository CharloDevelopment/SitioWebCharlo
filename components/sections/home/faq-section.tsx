"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { cn } from "@/lib/utils";

type FaqItem = {
  q: string;
  a: React.ReactNode;
  pro?: string;
};

const FAQS: FaqItem[] = [
  {
    q: "¿Qué es exactamente Charló y qué hace por mi negocio?",
    a: (
      <>
        <p>
          Charló es una plataforma que automatiza tres procesos clave de tu negocio: la atención al
          cliente, la cobranza y la agenda. En vez de contestar WhatsApp manualmente, perseguir
          pagos y confirmar citas una por una, Charló lo hace por ti, 24/7.
        </p>
        <p>
          No es un chatbot genérico. Se configura con tu información, tus servicios, tu tono. Tú
          decides qué responde, qué escala a un humano y qué hace por su cuenta.
        </p>
      </>
    ),
  },
  {
    q: "¿Cuánto tarda en estar funcionando?",
    a: (
      <p>
        La implementación toma menos de 24 horas. Una vez que nos das tu información (servicios,
        precios, horarios, plantillas de mensajes), nuestro equipo configura la plataforma y la
        conecta con tu WhatsApp. El día 1 ya está trabajando. Te acompañamos los primeros 14 días
        con soporte dedicado.
      </p>
    ),
    pro: "Tip: si ya tienes un Excel con clientes o un sistema de agendado, lo migramos por ti.",
  },
  {
    q: "¿Tengo que firmar contrato o comprometerme?",
    a: (
      <p>
        No. Charló se paga mes a mes. Si decides que no es para ti, cancelas y se acabó. Sin
        penalizaciones, sin cláusulas leoninas, sin preguntas incómodas. Creemos que el valor se
        demuestra con el uso, no con un contrato que te amarra.
      </p>
    ),
  },
  {
    q: "¿Y si el agente no sabe qué responder?",
    a: (
      <>
        <p>
          Si Charló no entiende una pregunta o detecta que el cliente necesita atención humana,
          automáticamente escala la conversación a ti o a tu equipo. El cliente nunca se queda
          esperando.
        </p>
        <p>
          Además, cada conversación se guarda con su historial completo para que tu equipo tenga
          todo el contexto cuando tome el relevo.
        </p>
      </>
    ),
  },
  {
    q: "¿Funciona con mi WhatsApp actual?",
    a: (
      <p>
        Sí. Charló se integra con tu número de WhatsApp Business. No necesitas cambiar de línea, no
        pierdes tu número, tus clientes siguen escribiéndote donde siempre. Solo que ahora, además
        de ti, les responde Charló.
      </p>
    ),
  },
  {
    q: "¿Y mis datos y los de mis clientes?",
    a: (
      <p>
        Tus datos son tuyos. Usamos encriptación en tránsito y en reposo, cumplimos con la Ley
        Federal de Protección de Datos Personales (LFPDPPP) y, si decides irte, te los llevas.
        Charló no es un extractor de datos, es una herramienta para tu negocio.
      </p>
    ),
  },
  {
    q: "¿Necesito ser técnico para usarlo?",
    a: (
      <p>
        No. Charló está hecho para dueños de negocio, no para ingenieros. La configuración la hace
        nuestro equipo. El día a día es tan simple como revisar tu WhatsApp. Y si tienes dudas,
        nuestro soporte te ayuda por WhatsApp o email.
      </p>
    ),
  },
  {
    q: "¿Qué pasa si no funciona para mi tipo de negocio?",
    a: (
      <>
        <p>
          Charló se adapta a cualquier negocio que atienda clientes, cobre servicios o agende citas.
          Trabajamos con clínicas, restaurantes, escuelas, despachos, gimnasios, estudios, hoteles,
          veterinarias, tiendas. Si tienes clientes, Charló funciona.
        </p>
        <p>
          Si después del primer mes ves que no es para ti, cancelas sin penalización. El setup no se
          reembolsa, pero la suscripción mensual sí, proporcional.
        </p>
      </>
    ),
  },
  {
    q: "¿Cuánto cuesta y qué incluye?",
    a: (
      <p>
        Hay un setup único de $499 MXN que cubre la configuración inicial y el onboarding. Después,
        una suscripción mensual según el plan: $599 MXN (1 solución), $1,499 MXN (3 soluciones) o
        desde $5,499 MXN (a medida). Sin contratos, sin costos ocultos. Ver los planes detallados en
        /precios.
      </p>
    ),
    pro: "Tip: empieza con el plan Inicial y sube cuando lo necesites. Sin penalizaciones por upgrade.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<string | null>(null);
  const reduced = useReducedMotion();

  return (
    <SectionWrapper spacing="lg" tone="muted" id="faq">
      <Container size="md">
        <div className="mb-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: reduced ? 0 : 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: reduced ? 0 : 0.5 }}
            className="border-border bg-background text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide uppercase"
          >
            Preguntas frecuentes
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: reduced ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : 0.1 }}
            className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl"
          >
            Todo lo que quieres saber
            <br />
            <span className="text-muted-foreground">antes de empezar.</span>
          </motion.h2>
        </div>

        <div className="divide-border border-border bg-card divide-y overflow-hidden rounded-2xl border">
          {FAQS.map((faq, i) => {
            const id = `faq-${i}`;
            const isOpen = open === id;
            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: reduced ? 0 : 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: reduced ? 0 : 0.5,
                  delay: reduced ? 0 : i * 0.05,
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : id)}
                  className="group hover:bg-muted/30 flex w-full items-start justify-between gap-6 px-5 py-5 text-left transition-colors sm:px-6 sm:py-6"
                  aria-expanded={isOpen}
                >
                  <span className="flex-1 text-base leading-snug font-medium sm:text-lg">
                    {faq.q}
                  </span>
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all",
                      isOpen
                        ? "border-primary bg-primary text-primary-foreground rotate-180"
                        : "border-border bg-background text-muted-foreground group-hover:border-primary/50 group-hover:text-foreground",
                    )}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="content"
                      initial={reduced ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={reduced ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                      transition={{
                        duration: reduced ? 0 : 0.35,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="text-muted-foreground space-y-3 px-5 pr-12 pb-6 text-sm leading-relaxed sm:px-6 sm:pr-16 sm:text-base">
                        {faq.a}
                        {faq.pro ? (
                          <div className="border-primary/30 bg-primary/5 text-foreground/80 rounded-lg border p-3 text-xs sm:text-sm">
                            <span className="text-primary font-semibold">Pro tip:</span> {faq.pro}
                          </div>
                        ) : null}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: reduced ? 0 : 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: reduced ? 0 : 0.5 }}
          className="text-muted-foreground mt-10 text-center text-sm"
        >
          ¿Tienes otra pregunta?{" "}
          <a
            href="/contacto"
            className="text-foreground font-medium underline-offset-4 hover:underline"
          >
            Escríbenos
          </a>
          .
        </motion.p>
      </Container>
    </SectionWrapper>
  );
}
