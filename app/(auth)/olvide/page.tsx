import type { Metadata } from "next";
import { OlvideForm } from "./olvide-form";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Recuperar contraseña",
  description: "Recupera el acceso a tu cuenta de Charlo.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "/olvide",
  },
  openGraph: {
    title: "Recuperar contraseña — Charlo",
    description: "Recupera el acceso a tu cuenta de Charlo.",
    url: `${siteConfig.url}/olvide`,
  },
};

export default function OlvidePage() {
  return <OlvideForm />;
}
