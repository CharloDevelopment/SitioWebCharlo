"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";

const demoSchema = z.object({
  name: z.string().min(2, "Necesitamos tu nombre"),
  company: z.string().min(2, "Necesitamos el nombre de tu empresa"),
  email: z.string().email("Correo no válido"),
  automate: z.string().min(1, "Selecciona una opción"),
  message: z.string().optional(),
});

type DemoFormValues = z.infer<typeof demoSchema>;

const AUTOMATE_OPTIONS = [
  { value: "atencion", label: "Charlo Atención" },
  { value: "cobranza", label: "Charlo Cobranza" },
  { value: "agenda", label: "Charlo Agenda" },
  { value: "varios", label: "Varios / No estoy seguro" },
];

type DemoFormProps = {
  onSuccess?: () => void;
};

export function DemoForm({ onSuccess }: DemoFormProps) {
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<DemoFormValues>({
    resolver: zodResolver(demoSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      automate: "",
      message: "",
    },
  });

  const automate = watch("automate");

  function onSubmit(data: DemoFormValues) {
    setSubmitting(true);

    const automateLabel =
      AUTOMATE_OPTIONS.find((o) => o.value === data.automate)?.label ?? data.automate;

    const message = [
      "Hola, quiero solicitar una demostración de Charlo.",
      "",
      `Nombre: ${data.name}`,
      `Empresa: ${data.company}`,
      `Correo: ${data.email}`,
      `Quiero automatizar: ${automateLabel}`,
      data.message ? `Mensaje: ${data.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const url = buildWhatsAppUrl(message);

    toast.success("Listo. Te llevamos a WhatsApp.", {
      description: "Serás redirigido en un momento.",
    });

    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
      reset();
      onSuccess?.();
    }, 800);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="demo-name">Nombre</Label>
        <Input id="demo-name" placeholder="Tu nombre" autoComplete="name" {...register("name")} />
        {errors.name ? <p className="text-destructive text-xs">{errors.name.message}</p> : null}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="demo-company">Empresa</Label>
        <Input
          id="demo-company"
          placeholder="Nombre de tu empresa"
          autoComplete="organization"
          {...register("company")}
        />
        {errors.company ? (
          <p className="text-destructive text-xs">{errors.company.message}</p>
        ) : null}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="demo-email">Correo</Label>
        <Input
          id="demo-email"
          type="email"
          placeholder="tu@empresa.com"
          autoComplete="email"
          {...register("email")}
        />
        {errors.email ? <p className="text-destructive text-xs">{errors.email.message}</p> : null}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="demo-automate">¿Qué quieres automatizar?</Label>
        <Select
          value={automate}
          onValueChange={(v) => setValue("automate", v, { shouldValidate: true })}
        >
          <SelectTrigger id="demo-automate">
            <SelectValue placeholder="Selecciona una opción" />
          </SelectTrigger>
          <SelectContent>
            {AUTOMATE_OPTIONS.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.automate ? (
          <p className="text-destructive text-xs">{errors.automate.message}</p>
        ) : null}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="demo-message">Mensaje (opcional)</Label>
        <Textarea
          id="demo-message"
          placeholder="Cuéntanos un poco más..."
          rows={3}
          {...register("message")}
        />
      </div>

      <Button type="submit" disabled={submitting} className="w-full">
        {submitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Preparando...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Continuar por WhatsApp
          </>
        )}
      </Button>
    </form>
  );
}
