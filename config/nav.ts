export type NavItem = {
  title: string;
  href: string;
  description?: string;
  children?: NavItem[];
};

export const mainNav: NavItem[] = [
  {
    title: "¿Qué quieres automatizar?",
    href: "#",
    children: [
      {
        title: "Charló Responde",
        href: "/atencion",
        description: "Automatiza la atención de tus clientes.",
      },
      {
        title: "Charló Agenda",
        href: "/agenda",
        description: "Organiza citas y recordatorios automáticamente.",
      },
      {
        title: "Charló Pagos",
        href: "/cobranza",
        description: "Envía recordatorios de pago por WhatsApp.",
      },
    ],
  },
  {
    title: "Plataforma",
    href: "/plataforma",
  },
  {
    title: "Precios",
    href: "/precios",
  },
  {
    title: "Aprende",
    href: "/aprende",
  },
  {
    title: "Nosotros",
    href: "/nosotros",
  },
  {
    title: "Contacto",
    href: "/contacto",
  },
];

export const footerNav = {
  producto: [
    { title: "Charlo Atención", href: "/atencion" },
    { title: "Charlo Cobranza", href: "/cobranza" },
    { title: "Charlo Agenda", href: "/agenda" },
    { title: "Precios", href: "/precios" },
  ],
  empresa: [
    { title: "Nosotros", href: "/nosotros" },
    { title: "Aprende", href: "/aprende" },
    { title: "Changelog", href: "/changelog" },
    { title: "Contacto", href: "/contacto" },
  ],
  legal: [
    { title: "Privacidad", href: "/privacidad" },
    { title: "Términos", href: "/terminos" },
    { title: "Cookies", href: "/cookies" },
  ],
} as const;
