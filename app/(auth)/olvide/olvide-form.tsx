"use client";

import Link from "next/link";
import { ArrowLeft, MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function OlvideForm() {
  const whatsappUrl = buildWhatsAppUrl(
    "Hola, olvidé mi contraseña de Charlo y necesito ayuda para recuperar el acceso.",
  );

  return (
    <div className="border-border bg-card rounded-2xl border p-8 shadow-sm">
      <div className="mb-6 flex flex-col gap-2 text-center">
        <div className="bg-primary/10 text-primary mx-auto flex h-12 w-12 items-center justify-center rounded-full">
          <ShieldCheck className="h-6 w-6" />
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">¿Olvidaste tu contraseña?</h1>
        <p className="text-muted-foreground text-sm">
          Estamos en beta privada. Por ahora, la recuperación de contraseña se hace por WhatsApp con
          nuestro equipo.
        </p>
      </div>

      <div className="grid gap-3">
        <Button asChild size="lg" className="w-full">
          <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-4 w-4" />
            Recuperar por WhatsApp
          </Link>
        </Button>

        <Button asChild variant="ghost" size="sm" className="w-full">
          <Link href="/login">
            <ArrowLeft className="mr-2 h-3.5 w-3.5" />
            Volver a iniciar sesión
          </Link>
        </Button>
      </div>

      <p className="text-muted-foreground mt-6 text-center text-xs">
        Cuando abramos el registro público, este flujo será 100% automático.
      </p>
    </div>
  );
}
