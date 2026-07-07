import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/shared/container";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { FadeInUp } from "@/components/motion/fade-in-up";
import { ContactForm } from "./contact-form";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contacto — Charlo",
  description:
    "Hablemos sobre tu empresa. Cuéntanos qué procesos quieres mejorar y encontremos juntos la mejor solución.",
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: "Contacto — Charlo",
    description: "Hablemos sobre tu empresa. Te respondemos en menos de 24 horas.",
    url: `${siteConfig.url}/contacto`,
  },
};

export default function ContactoPage() {
  const email = siteConfig.email;
  const whatsappNumber = siteConfig.whatsapp.number.replace(/[^\d]/g, "");
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <>
      <SectionWrapper spacing="lg">
        <Container>
          <FadeInUp>
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <span className="border-border bg-muted/50 text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide">
                <MessageCircle className="text-primary h-3.5 w-3.5" />
                Hablemos
              </span>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
                Hablemos sobre <span className="text-primary">tu empresa.</span>
              </h1>
              <p className="text-muted-foreground mt-6 max-w-2xl text-base text-balance sm:text-lg">
                Cuéntanos qué procesos quieres mejorar y encontremos juntos la mejor solución. Te
                respondemos en menos de 24 horas.
              </p>
            </div>
          </FadeInUp>
        </Container>
      </SectionWrapper>

      <SectionWrapper spacing="lg" tone="muted">
        <Container size="lg">
          <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
            <FadeInUp delay={0.1}>
              <div className="border-border bg-card rounded-2xl border p-6 sm:p-8">
                <h2 className="text-xl font-semibold">Envíanos un mensaje</h2>
                <p className="text-muted-foreground mt-1 text-sm">
                  Completa el formulario y te respondemos por email.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="flex flex-col gap-6">
                <div className="border-border bg-card rounded-2xl border p-6">
                  <h3 className="text-base font-semibold">Contacto directo</h3>
                  <div className="mt-4 flex flex-col gap-3 text-sm">
                    <Link
                      href={`mailto:${email}`}
                      className="group hover:bg-muted -mx-2 flex items-start gap-3 rounded-lg p-2 transition-colors"
                    >
                      <div className="bg-primary/10 text-primary flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
                        <Mail className="h-4 w-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium">Email</span>
                        <span className="text-muted-foreground group-hover:text-foreground">
                          {email}
                        </span>
                      </div>
                    </Link>
                    <Link
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group hover:bg-muted -mx-2 flex items-start gap-3 rounded-lg p-2 transition-colors"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                        <MessageCircle className="h-4 w-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium">WhatsApp</span>
                        <span className="text-muted-foreground group-hover:text-foreground">
                          Respuesta rápida en horario laboral
                        </span>
                      </div>
                    </Link>
                    <div className="-mx-2 flex items-start gap-3 rounded-lg p-2">
                      <div className="bg-muted text-muted-foreground flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium">Ubicación</span>
                        <span className="text-muted-foreground">México · 100% remoto</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-border bg-card rounded-2xl border p-6">
                  <h3 className="text-base font-semibold">Síguenos</h3>
                  <div className="mt-4 flex gap-2">
                    {siteConfig.social.twitter ? (
                      <Link
                        href={siteConfig.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        className="border-border bg-background hover:border-primary hover:text-primary flex h-9 w-9 items-center justify-center rounded-lg border transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-4 w-4"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </Link>
                    ) : null}
                    {siteConfig.social.linkedin ? (
                      <Link
                        href={siteConfig.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="border-border bg-background hover:border-primary hover:text-primary flex h-9 w-9 items-center justify-center rounded-lg border transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-4 w-4"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
                        </svg>
                      </Link>
                    ) : null}
                    {siteConfig.social.instagram ? (
                      <Link
                        href={siteConfig.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="border-border bg-background hover:border-primary hover:text-primary flex h-9 w-9 items-center justify-center rounded-lg border transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-4 w-4"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                        </svg>
                      </Link>
                    ) : null}
                  </div>
                </div>

                <div className="border-primary/30 bg-primary/5 rounded-2xl border p-6">
                  <h3 className="text-base font-semibold">¿Prefieres WhatsApp?</h3>
                  <p className="text-muted-foreground mt-1 text-sm">
                    Respuesta más rápida. Te contestamos en horario laboral.
                  </p>
                  <Link
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary mt-4 inline-flex items-center gap-2 text-sm font-medium hover:underline"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Abrir conversación
                  </Link>
                </div>
              </div>
            </FadeInUp>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
