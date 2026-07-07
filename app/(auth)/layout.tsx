import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Logo } from "@/components/shared/logo";

type AuthLayoutProps = {
  children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="bg-background relative flex min-h-screen flex-col">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,oklch(0.42_0.27_264_/_0.08),transparent_60%)]"
      />

      <header className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Charlo — Ir al inicio">
          <Logo variant="full" width={110} height={28} priority />
        </Link>
        <Link
          href="/"
          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm transition-colors"
        >
          <ChevronLeft className="h-3.5 w-3.5" />
          Volver al sitio
        </Link>
      </header>

      <main className="flex flex-1 items-center justify-center px-4 py-12 sm:px-6">
        <div className="w-full max-w-md">{children}</div>
      </main>

      <footer className="text-muted-foreground px-4 py-6 text-center text-xs sm:px-6">
        © {new Date().getFullYear()} Charlo. Todos los derechos reservados.
      </footer>
    </div>
  );
}
