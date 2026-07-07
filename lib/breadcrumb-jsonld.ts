import { siteConfig } from "@/config/site";

export type CrumbJsonLd = {
  label: string;
  href?: string;
};

export function buildBreadcrumbJsonLd(items: CrumbJsonLd[]) {
  const base = siteConfig.url.replace(/\/$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: `${base}/`,
      },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.label,
        ...(item.href ? { item: `${base}${item.href}` } : {}),
      })),
    ],
  };
}
