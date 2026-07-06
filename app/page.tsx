import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      <Logo variant="full" width={36} height={36} />
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="text-muted-foreground text-sm font-medium">
          Para PYMES de 2 a 50 empleados
        </span>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
          La inteligencia artificial, hecha simple.
        </h1>
        <p className="text-muted-foreground max-w-2xl text-balance sm:text-lg">
          Charlo automatiza tu atención, cobranza y agenda para que recuperes tiempo y hagas crecer
          tu negocio — sin procesos complicados.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button asChild size="lg">
          <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
            Solicitar demostración
          </a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href="/plataforma">Conocer la plataforma</a>
        </Button>
      </div>
      <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
        <span>✔ Sin conocimientos técnicos</span>
        <span>✔ Implementación rápida</span>
        <span>✔ Diseñado para PYMES</span>
      </div>
    </main>
  );
}
