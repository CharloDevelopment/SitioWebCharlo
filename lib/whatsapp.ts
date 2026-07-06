import { siteConfig } from "@/config/site";

export function buildWhatsAppUrl(message?: string) {
  const number = siteConfig.whatsapp.number.replace(/[^\d]/g, "");
  const text = encodeURIComponent(message ?? siteConfig.whatsapp.defaultMessage);
  return `https://wa.me/${number}?text=${text}`;
}
