import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://charlo.mx"),
  title: {
    default: "Charlo — La inteligencia artificial, hecha simple.",
    template: "%s | Charlo",
  },
  description:
    "Charlo automatiza tu atención, cobranza y agenda para que recuperes tiempo y hagas crecer tu negocio — sin procesos complicados.",
  applicationName: "Charlo",
  generator: "Next.js",
  keywords: [
    "inteligencia artificial",
    "automatización",
    "Pymes",
    "atención al cliente",
    "cobranza",
    "agenda",
    "Charlo",
  ],
  authors: [{ name: "Charlo" }],
  creator: "Charlo",
  publisher: "Charlo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://charlo.mx",
    siteName: "Charlo",
    title: "Charlo — La inteligencia artificial, hecha simple.",
    description:
      "Plataforma de IA para PYMES. Automatiza atención, cobranza y agenda. Empieza en minutos, sin contratos.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Charlo — La inteligencia artificial, hecha simple.",
    description: "Plataforma de IA para PYMES. Automatiza atención, cobranza y agenda.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground min-h-screen antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
