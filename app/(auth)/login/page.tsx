import type { Metadata } from "next";
import { LoginForm } from "./login-form";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Iniciar sesión",
  description: "Accede a tu plataforma Charlo.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "/login",
  },
  openGraph: {
    title: "Iniciar sesión — Charlo",
    description: "Accede a tu plataforma Charlo.",
    url: `${siteConfig.url}/login`,
  },
};

export default function LoginPage() {
  return <LoginForm />;
}
