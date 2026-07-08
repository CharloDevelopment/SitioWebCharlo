"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { useDemoModal } from "@/components/forms/demo-modal";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function FinalCtaSection() {
  const { setOpen: setDemoOpen } = useDemoModal();
  const reduced = useReducedMotion();

  return (
    <SectionWrapper spacing="lg" tone="primary" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_30%_50%,oklch(1_0_0_/_0.18),transparent_50%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-0 bg-[linear-gradient(to_right,oklch(1_0_0_/_0.04)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0_/_0.04)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] [background-size:64px_64px]"
      />
      <Container size="md" className="relative">
        <div className="flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: reduced ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: reduced ? 0 : 0.7 }}
            className="max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Deja de hacer lo que la tecnología
            <br />
            puede hacer por ti.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: reduced ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : 0.15 }}
            className="mt-6 max-w-xl text-base text-pretty opacity-90 sm:text-lg"
          >
            Solicita una demostración. Charló se adapta a tu negocio en menos de 24 horas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <MagneticButton strength={0.2}>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => setDemoOpen(true)}
                className="group h-12 px-6 text-base"
              >
                Solicitar demostración
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </MagneticButton>
            <MagneticButton strength={0.15}>
              <Button
                asChild
                size="lg"
                className="group h-12 border-0 bg-[#25D366] px-6 text-base text-white hover:bg-[#20bd5a]"
              >
                <a
                  href={buildWhatsAppUrl("Hola, quiero más información sobre Charló.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-1.5 h-4 w-4" />
                  Hablemos por WhatsApp
                </a>
              </Button>
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : 0.45 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm opacity-90"
          >
            <span>A un costo accesible</span>
            <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:block" />
            <span>Sin contratos</span>
            <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:block" />
            <span>Cancela cuando quieras</span>
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
