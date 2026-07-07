import type { Metadata } from "next";
import { ProximamenteContent } from "./proximamente-content";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Próximamente — Beta privada",
  description: "Charlo está en beta privada. Te avisaremos cuando tu acceso esté listo.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/proximamente",
  },
  openGraph: {
    title: "Próximamente — Charlo",
    description: "Charlo está en beta privada. Te avisaremos pronto.",
    url: `${siteConfig.url}/proximamente`,
  },
};

export default function ProximamentePage() {
  return <ProximamenteContent />;
}
