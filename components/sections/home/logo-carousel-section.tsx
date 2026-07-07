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

        <div
          className="relative overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="animate-marquee flex w-max items-center gap-12 sm:gap-16">
            {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, i) => (
              <LogoItem key={`${client.name}-${i}`} client={client} />
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}

function LogoItem({ client }: { client: Client }) {
  return (
    <div className="group flex h-16 w-40 shrink-0 items-center justify-center" title={client.name}>
      <Image
        src={client.src}
        alt={client.name}
        width={160}
        height={64}
        className={cn(
          "h-full w-auto max-w-full object-contain",
          "opacity-60 grayscale transition-all duration-500",
          "group-hover:opacity-100 group-hover:grayscale-0",
        )}
        unoptimized
      />
    </div>
  );
}
