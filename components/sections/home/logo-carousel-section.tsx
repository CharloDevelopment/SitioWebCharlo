"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { cn } from "@/lib/utils";

type Client = {
  name: string;
  src: string;
};

const CLIENTS: Client[] = [
  { name: "Alebrijes Oaxaca", src: "/brand/clients/alebrijes-oaxaca.png" },
  { name: "Campamento Onawa", src: "/brand/clients/campamento-onawa.png" },
  { name: "Instituto Azteca", src: "/brand/clients/instituto-azteca.png" },
];

export function LogoCarouselSection() {
  const reduced = useReducedMotion();

  return (
    <SectionWrapper spacing="md">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: reduced ? 0 : 0.5 }}
          className="mb-10 text-center"
        >
          <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
            Empresas que ya confían en Charló
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 lg:gap-x-20">
          {CLIENTS.map((client, i) => (
            <div key={client.name} className="flex items-center gap-12 sm:gap-16 lg:gap-20">
              <LogoItem client={client} />
              {i < CLIENTS.length - 1 ? (
                <div className="bg-border hidden h-10 w-px sm:block" aria-hidden="true" />
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}

function LogoItem({ client }: { client: Client }) {
  return (
    <div className="group flex h-16 w-44 shrink-0 items-center justify-center" title={client.name}>
      <Image
        src={client.src}
        alt={client.name}
        width={176}
        height={64}
        className={cn(
          "h-full w-auto max-w-full object-contain",
          "opacity-50 grayscale transition-all duration-500",
          "group-hover:opacity-100 group-hover:grayscale-0",
        )}
        unoptimized
      />
    </div>
  );
}
