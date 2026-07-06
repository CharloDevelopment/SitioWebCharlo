import { siteConfig } from "@/config/site";
import { footerNav } from "@/config/nav";

export const footerConfig = {
  description:
    "Charlo simplifica la inteligencia artificial para que las pequeñas y medianas empresas puedan crecer con tecnología accesible.",
  columns: [
    {
      title: "Producto",
      links: footerNav.producto,
    },
    {
      title: "Empresa",
      links: footerNav.empresa,
    },
    {
      title: "Legal",
      links: footerNav.legal,
    },
  ],
  copyright: `© ${new Date().getFullYear()} ${siteConfig.name}. Todos los derechos reservados.`,
} as const;

export type FooterConfig = typeof footerConfig;
