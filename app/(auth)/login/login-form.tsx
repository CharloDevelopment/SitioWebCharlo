"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      router.push("/proximamente");
    }, 800);
  }

  return (
    <div className="border-border bg-card rounded-2xl border p-8 shadow-sm">
      <div className="mb-6 flex flex-col gap-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Bienvenido de nuevo</h1>
        <p className="text-muted-foreground text-sm">Accede a tu plataforma Charlo.</p>
      </div>

      <form onSubmit={onSubmit} className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="login-email">Correo electrónico</Label>
          <div className="relative">
            <Mail className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <Input
              id="login-email"
              type="email"
              placeholder="tu@empresa.com"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="login-password">Contraseña</Label>
            <Link href="/olvide" className="text-primary text-xs font-medium hover:underline">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
          <div className="relative">
            <Lock className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <Input
              id="login-password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-9"
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2 transition-colors"
              aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Checkbox
            id="login-remember"
            checked={remember}
            onCheckedChange={(checked) => setRemember(checked === true)}
          />
          <Label htmlFor="login-remember" className="text-muted-foreground text-sm font-normal">
            Mantener sesión iniciada
          </Label>
        </div>

        <Button type="submit" size="lg" disabled={submitting} className="mt-2 w-full">
          {submitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Verificando...
            </>
          ) : (
            <>
              Iniciar sesión
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>

      <div className="my-6 flex items-center gap-3">
        <Separator className="flex-1" />
        <span className="text-muted-foreground text-xs">o</span>
        <Separator className="flex-1" />
      </div>

      <div className="grid gap-2">
        <Button type="button" variant="outline" size="lg" className="w-full" disabled>
          Crear cuenta
        </Button>
        <p className="text-muted-foreground text-center text-xs">Próximamente · Beta privada</p>
      </div>
    </div>
  );
}
