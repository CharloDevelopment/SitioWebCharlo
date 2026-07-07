"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "charlo-cookie-consent";

type ConsentValue = "accepted" | "rejected";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const timer = setTimeout(() => setShow(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  function setConsent(value: ConsentValue) {
    localStorage.setItem(STORAGE_KEY, value);
    setShow(false);
  }

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="border-border bg-card text-card-foreground fixed right-4 bottom-20 left-4 z-40 mx-auto max-w-3xl rounded-2xl border p-4 shadow-2xl sm:right-6 sm:bottom-24 sm:left-6 sm:p-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <Cookie className="text-primary mt-0.5 h-5 w-5 shrink-0" />
          <div className="grid gap-1">
            <p className="text-sm font-medium">Usamos cookies</p>
            <p className="text-muted-foreground text-xs sm:text-sm">
              Usamos cookies para mejorar tu experiencia y analizar el tráfico. Lee nuestra{" "}
              <Link href="/cookies" className="text-primary font-medium hover:underline">
                política de cookies
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:shrink-0">
          <Button variant="outline" size="sm" onClick={() => setConsent("rejected")}>
            Rechazar
          </Button>
          <Button size="sm" onClick={() => setConsent("accepted")}>
            Aceptar
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setConsent("rejected")}
            aria-label="Cerrar"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
