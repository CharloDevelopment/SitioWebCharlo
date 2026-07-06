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
        title: "Charlo Atención",
        href: "/atencion",
        description: "Responde mensajes 24/7 sin perder clientes.",
      },
      {
        title: "Charlo Cobranza",
        href: "/cobranza",
        description: "Cobra automáticamente sin perseguir a nadie.",
      },
      {
        title: "Charlo Agenda",
        href: "/agenda",
        description: "Gestiona citas sin esfuerzo.",
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
