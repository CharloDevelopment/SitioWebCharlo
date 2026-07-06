import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          La inteligencia artificial, hecha simple.
        </h1>
        <p className="text-muted-foreground max-w-xl text-balance">
          Sitio en construcción. Pronto verás aquí el sitio oficial de Charlo.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button>Solicitar demostración</Button>
        <Button variant="outline">Conocer la plataforma</Button>
      </div>
    </main>
  );
}
