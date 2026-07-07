import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

type RouteEntry = {
  path: string;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
  lastModified?: Date;
};

const ROUTES: RouteEntry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/plataforma", changeFrequency: "monthly", priority: 0.9 },
  { path: "/atencion", changeFrequency: "monthly", priority: 0.9 },
  { path: "/cobranza", changeFrequency: "monthly", priority: 0.9 },
  { path: "/agenda", changeFrequency: "monthly", priority: 0.9 },
  { path: "/empresas", changeFrequency: "monthly", priority: 0.7 },
  { path: "/precios", changeFrequency: "monthly", priority: 0.9 },
  { path: "/aprende", changeFrequency: "monthly", priority: 0.6 },
  { path: "/nosotros", changeFrequency: "monthly", priority: 0.5 },
  { path: "/contacto", changeFrequency: "monthly", priority: 0.7 },
  { path: "/changelog", changeFrequency: "weekly", priority: 0.5 },
  { path: "/privacidad", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terminos", changeFrequency: "yearly", priority: 0.3 },
  { path: "/cookies", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();

  return ROUTES.map((route) => ({
    url: `${base}${route.path}`,
    lastModified: route.lastModified ?? now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
