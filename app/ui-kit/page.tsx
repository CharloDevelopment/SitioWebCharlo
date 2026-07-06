"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Bell, CheckCircle2, Heart, Mail, Rocket, Sparkles, Star, Zap } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/shared/bento-grid";
import { Container } from "@/components/shared/container";
import { CtaBanner } from "@/components/shared/cta-banner";
import { Marquee } from "@/components/shared/marquee";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";

export default function UiKitPage() {
  return (
    <>
      <SectionWrapper spacing="lg" tone="default">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center">
            <Badge variant="secondary">FASE 2 · UI Kit</Badge>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
              Todos los componentes de Charlo
            </h1>
            <p className="text-muted-foreground max-w-2xl text-pretty sm:text-lg">
              Esta página es solo para desarrollo. Aquí se prueban los componentes antes de usarlos
              en el sitio público.
            </p>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <span className="text-muted-foreground text-sm">Modo claro / oscuro</span>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper spacing="md" tone="muted">
        <Container>
          <SectionHeading
            eyebrow="Botones"
            title="Variantes y tamaños"
            subtitle="El botón primario usa el color de marca. El outline funciona sobre fondos claros. Ghost para acciones terciarias."
            align="left"
            size="md"
            className="mb-8"
          />
          <div className="flex flex-wrap items-center gap-3">
            <Button>Primario</Button>
            <Button variant="secondary">Secundario</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructivo</Button>
            <Button variant="link">Link</Button>
            <Button disabled>Disabled</Button>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Button size="sm">Pequeño</Button>
            <Button size="default">Mediano</Button>
            <Button size="lg">Grande</Button>
            <Button size="icon">
              <Sparkles className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper spacing="md">
        <Container>
          <SectionHeading
            eyebrow="Badges"
            title="Etiquetas y estados"
            align="left"
            size="md"
            className="mb-8"
          />
          <div className="flex flex-wrap items-center gap-3">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secundario</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Error</Badge>
            <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
              Activo
            </Badge>
            <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
              Pendiente
            </Badge>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper spacing="md" tone="muted">
        <Container>
          <SectionHeading
            eyebrow="Formularios"
            title="Inputs, selects, radios y más"
            align="left"
            size="md"
            className="mb-8"
          />
          <div className="grid max-w-2xl gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input id="email" type="email" placeholder="tu@empresa.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Mensaje</Label>
              <Textarea id="message" placeholder="Cuéntanos sobre tu negocio..." rows={4} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="industry">Industria</Label>
              <Select>
                <SelectTrigger id="industry">
                  <SelectValue placeholder="Selecciona una opción" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="clinicas">Clínicas</SelectItem>
                  <SelectItem value="escuelas">Escuelas</SelectItem>
                  <SelectItem value="restaurantes">Restaurantes</SelectItem>
                  <SelectItem value="despachos">Despachos</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Acepto los términos y condiciones</Label>
            </div>
            <RadioGroup defaultValue="mensual">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="mensual" id="mensual" />
                <Label htmlFor="mensual">Mensual</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="anual" id="anual" />
                <Label htmlFor="anual">Anual</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-3">
              <Switch id="notifications" />
              <Label htmlFor="notifications">Recibir notificaciones</Label>
            </div>
            <div className="grid gap-2">
              <Label>Presupuesto mensual</Label>
              <Slider defaultValue={[50]} max={100} step={1} />
            </div>
            <div className="grid gap-2">
              <Label>Progreso</Label>
              <Progress value={66} />
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper spacing="md">
        <Container>
          <SectionHeading
            eyebrow="Cards"
            title="Contenedores de información"
            align="left"
            size="md"
            className="mb-8"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Plan Inicial</CardTitle>
                <CardDescription>Para empezar</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold">$759 MXN/mes</p>
                <p className="text-muted-foreground text-sm">1 solución incluida</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Elegir plan</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Plan Crecimiento</CardTitle>
                <CardDescription>Para escalar</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold">$1,499 MXN/mes</p>
                <p className="text-muted-foreground text-sm">3 soluciones incluidas</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Elegir plan</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Plan Empresa</CardTitle>
                <CardDescription>Para necesidades únicas</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold">Desde $5,499</p>
                <p className="text-muted-foreground text-sm">Soluciones a la medida</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Cotizar</Button>
              </CardFooter>
            </Card>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper spacing="md" tone="muted">
        <Container>
          <SectionHeading
            eyebrow="Bento Grid"
            title="Layouts modernos para features"
            align="left"
            size="md"
            className="mb-8"
          />
          <BentoGrid>
            <BentoCard span="wide">
              <div className="flex flex-col gap-3">
                <Rocket className="text-primary h-8 w-8" />
                <h3 className="text-xl font-semibold">Empieza en minutos</h3>
                <p className="text-muted-foreground text-sm">
                  Sin procesos complicados. Configuramos todo por ti.
                </p>
              </div>
            </BentoCard>
            <BentoCard>
              <div className="flex flex-col gap-3">
                <Zap className="text-primary h-8 w-8" />
                <h3 className="text-xl font-semibold">24/7</h3>
                <p className="text-muted-foreground text-sm">Tu negocio nunca duerme.</p>
              </div>
            </BentoCard>
            <BentoCard span="tall">
              <div className="flex flex-col gap-3">
                <Heart className="text-primary h-8 w-8" />
                <h3 className="text-xl font-semibold">Hecho para PYMES</h3>
                <p className="text-muted-foreground text-sm">
                  Diseñado para negocios reales, no para empresas Fortune 500. Hablamos tu idioma.
                </p>
              </div>
            </BentoCard>
            <BentoCard>
              <div className="flex flex-col gap-3">
                <CheckCircle2 className="text-primary h-8 w-8" />
                <h3 className="text-xl font-semibold">Sin contratos</h3>
                <p className="text-muted-foreground text-sm">Cancela cuando quieras.</p>
              </div>
            </BentoCard>
            <BentoCard>
              <div className="flex flex-col gap-3">
                <Sparkles className="text-primary h-8 w-8" />
                <h3 className="text-xl font-semibold">IA simple</h3>
                <p className="text-muted-foreground text-sm">Sin tecnicismos.</p>
              </div>
            </BentoCard>
          </BentoGrid>
        </Container>
      </SectionWrapper>

      <SectionWrapper spacing="md">
        <Container>
          <SectionHeading
            eyebrow="Marquee"
            title="Logos o tags en movimiento"
            align="left"
            size="md"
            className="mb-8"
          />
          <Marquee speed="slow">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="border-border bg-muted/30 flex h-16 w-32 shrink-0 items-center justify-center rounded-lg border"
              >
                <span className="text-muted-foreground text-sm font-medium">Logo {i + 1}</span>
              </div>
            ))}
          </Marquee>
        </Container>
      </SectionWrapper>

      <SectionWrapper spacing="md" tone="muted">
        <Container>
          <SectionHeading eyebrow="Acordeón" title="FAQ" align="left" size="md" className="mb-8" />
          <Accordion type="single" collapsible className="w-full max-w-2xl">
            <AccordionItem value="item-1">
              <AccordionTrigger>¿Necesito saber de tecnología?</AccordionTrigger>
              <AccordionContent>
                No. Charlo está hecho para empresarios, no para ingenieros.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>¿Cuánto tarda en implementarse?</AccordionTrigger>
              <AccordionContent>Menos de un día. Nosotros configuramos todo.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>¿Tengo que firmar contrato?</AccordionTrigger>
              <AccordionContent>No. Puedes cancelar cuando quieras.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </Container>
      </SectionWrapper>

      <SectionWrapper spacing="md">
        <Container>
          <SectionHeading
            eyebrow="Tabs y Dialog"
            title="Contenido organizado"
            align="left"
            size="md"
            className="mb-8"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <Tabs defaultValue="atencion">
                <TabsList>
                  <TabsTrigger value="atencion">Atención</TabsTrigger>
                  <TabsTrigger value="cobranza">Cobranza</TabsTrigger>
                  <TabsTrigger value="agenda">Agenda</TabsTrigger>
                </TabsList>
                <TabsContent value="atencion" className="mt-4">
                  <p className="text-muted-foreground text-sm">
                    Responde mensajes automáticamente 24/7.
                  </p>
                </TabsContent>
                <TabsContent value="cobranza" className="mt-4">
                  <p className="text-muted-foreground text-sm">Automatiza recordatorios de pago.</p>
                </TabsContent>
                <TabsContent value="agenda" className="mt-4">
                  <p className="text-muted-foreground text-sm">Gestiona citas sin esfuerzo.</p>
                </TabsContent>
              </Tabs>
            </div>
            <div className="flex flex-col gap-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Abrir modal de ejemplo</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Modal de ejemplo</DialogTitle>
                    <DialogDescription>
                      Los dialogs se usan para confirmaciones, formularios rápidos y contenido
                      enfocado.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-2">
                    <Label>Nombre</Label>
                    <Input placeholder="Tu nombre" />
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Cancelar</Button>
                    <Button>Confirmar</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Button
                variant="outline"
                onClick={() =>
                  toast.success("Listo. Tu automatización está funcionando.", {
                    description: "Esto es un toast de Sonner.",
                  })
                }
              >
                <Bell className="mr-2 h-4 w-4" />
                Probar toast de éxito
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  toast.error("Algo salió mal. Intenta nuevamente.", {
                    description: "Esto es un toast de error.",
                  })
                }
              >
                Probar toast de error
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  toast("Preparando todo para ti...", {
                    description: "Esto es un toast de loading.",
                    icon: <Sparkles className="h-4 w-4" />,
                  });
                }}
              >
                Probar toast de info
              </Button>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper spacing="md" tone="muted">
        <Container>
          <SectionHeading
            eyebrow="Avatares y skeletons"
            title="Estados de carga e identidad"
            align="left"
            size="md"
            className="mb-8"
          />
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex -space-x-2">
              <Avatar className="border-background border-2">
                <AvatarImage src="https://i.pravatar.cc/64?img=1" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar className="border-background border-2">
                <AvatarImage src="https://i.pravatar.cc/64?img=2" />
                <AvatarFallback>MR</AvatarFallback>
              </Avatar>
              <Avatar className="border-background border-2">
                <AvatarImage src="https://i.pravatar.cc/64?img=3" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
            </div>
            <Separator orientation="vertical" className="h-10" />
            <div className="flex items-center gap-3">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-3 w-[150px]" />
              </div>
            </div>
            <Separator orientation="vertical" className="h-10" />
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 text-sm font-medium">5.0</span>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <CtaBanner
        eyebrow="¿Listo para empezar?"
        title="Deja de hacer lo que la tecnología puede hacer por ti."
        subtitle="Solicita una demostración y descubre cómo Charlo se adapta a tu negocio en minutos."
        primaryCta={{
          label: "Solicitar demostración",
          href: "https://wa.me/525500000000",
        }}
        secondaryCta={{
          label: "Ver precios",
          href: "/precios",
        }}
        tone="primary"
      />

      <CtaBanner
        eyebrow="Versión con fondo oscuro"
        title="Empieza en tres pasos"
        subtitle="Cuéntanos sobre tu empresa. Configuramos Charlo. Empieza a automatizar."
        primaryCta={{
          label: "Hablar por WhatsApp",
          href: "https://wa.me/525500000000",
        }}
        tone="dark"
      />

      <CtaBanner
        eyebrow="Versión con fondo muted"
        title="Sin contratos. Sin costos ocultos."
        subtitle="Empieza pequeño. Crece cuando quieras."
        primaryCta={{
          label: "Ver planes",
          href: "/precios",
        }}
        tone="muted"
      />

      <SectionWrapper spacing="md" tone="muted">
        <Container>
          <div className="flex flex-col items-center gap-4 text-center">
            <Mail className="text-primary h-8 w-8" />
            <h3 className="text-xl font-semibold">Botón flotante de WhatsApp</h3>
            <p className="text-muted-foreground max-w-md text-sm">
              Mira abajo a la derecha. Aparece en todas las páginas del sitio.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      <WhatsAppButton />
    </>
  );
}
