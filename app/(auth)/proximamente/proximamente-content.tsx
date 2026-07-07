"use client";

import Link from "next/link";
import { ArrowLeft, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProximamenteContent() {
  return (
    <div className="border-border bg-card rounded-2xl border p-8 text-center shadow-sm">
      <div className="mb-6 flex flex-col items-center gap-4">
        <div className="relative">
          <div className="bg-primary/10 text-primary flex h-16 w-16 items-center justify-center rounded-full">
            <Sparkles className="h-8 w-8" />
          </div>
          <div className="border-card absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-300">
            <Clock className="h-3 w-3" />
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-balance">
            Estamos en beta privada.
          </h1>
          <p className="text-muted-foreground mt-2 text-sm text-pretty sm:text-base">
            Tu solicitud fue recibida. Te avisaremos por email cuando tu acceso esté listo.
          </p>
        </div>
      </div>

      <div className="border-border bg-muted/30 mb-6 rounded-lg border p-4 text-left">
        <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
          Mientras tanto
        </p>
        <ul className="mt-2 space-y-1.5 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-primary">✔</span>
            <span>Revisa tu email para confirmar la solicitud</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">✔</span>
            <span>Escribenos por WhatsApp si necesitas acceso urgente</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">✔</span>
            <span>Explora el sitio para conocer todas las soluciones</span>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-2">
        <Button asChild size="lg" className="w-full">
          <Link href="/">Volver al inicio</Link>
        </Button>
        <Button asChild variant="ghost" size="sm" className="w-full">
          <Link href="/">
            <ArrowLeft className="mr-2 h-3.5 w-3.5" />
            Explorar Charlo
          </Link>
        </Button>
      </div>
    </div>
  );
}
