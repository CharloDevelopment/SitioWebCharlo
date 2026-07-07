"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle2, Loader2, Send } from "lucide-react";
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
import { Alert, AlertDescription } from "@/components/ui/alert";
import { sendContactEmail, type ContactFormState } from "@/app/(marketing)/contacto/actions";

const INITIAL_STATE: ContactFormState = {
  ok: false,
  message: "",
};

const AUTOMATE_OPTIONS = [
  { value: "atencion", label: "Charlo Atención" },
  { value: "cobranza", label: "Charlo Cobranza" },
  { value: "agenda", label: "Charlo Agenda" },
  { value: "varios", label: "Varios / No estoy seguro" },
];

export function ContactForm() {
  const [state, formAction] = useActionState(sendContactEmail, INITIAL_STATE);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.ok) {
      formRef.current?.reset();
    }
  }, [state.ok]);

  if (state.ok) {
    return (
      <Alert className="border-green-200 bg-green-50 dark:border-green-900/50 dark:bg-green-900/20">
        <CheckCircle2 className="h-4 w-4 text-green-600" />
        <AlertDescription className="text-green-800 dark:text-green-200">
          {state.message}
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <form ref={formRef} action={formAction} className="grid gap-4">
      {state.message && !state.ok ? (
        <Alert variant="destructive">
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      ) : null}

      <div className="grid gap-2">
        <Label htmlFor="contact-name">Nombre</Label>
        <Input id="contact-name" name="name" placeholder="Tu nombre" autoComplete="name" required />
        {state.errors?.name ? (
          <p className="text-destructive text-xs">{state.errors.name}</p>
        ) : null}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="contact-company">Empresa</Label>
        <Input
          id="contact-company"
          name="company"
          placeholder="Nombre de tu empresa"
          autoComplete="organization"
          required
        />
        {state.errors?.company ? (
          <p className="text-destructive text-xs">{state.errors.company}</p>
        ) : null}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="contact-email">Correo</Label>
        <Input
          id="contact-email"
          name="email"
          type="email"
          placeholder="tu@empresa.com"
          autoComplete="email"
          required
        />
        {state.errors?.email ? (
          <p className="text-destructive text-xs">{state.errors.email}</p>
        ) : null}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="contact-automate">¿Qué quieres automatizar?</Label>
        <Select name="automate" required>
          <SelectTrigger id="contact-automate">
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
        {state.errors?.automate ? (
          <p className="text-destructive text-xs">{state.errors.automate}</p>
        ) : null}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="contact-message">Mensaje (opcional)</Label>
        <Textarea
          id="contact-message"
          name="message"
          placeholder="Cuéntanos un poco más sobre tu negocio..."
          rows={4}
        />
      </div>

      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Enviando...
        </>
      ) : (
        <>
          <Send className="mr-2 h-4 w-4" />
          Enviar mensaje
        </>
      )}
    </Button>
  );
}
