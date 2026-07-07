import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SkipLink } from "@/components/layout/skip-link";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { CookieBanner } from "@/components/layout/cookie-banner";
import { LenisProvider } from "@/components/motion/lenis-provider";
import { DemoModalProvider } from "@/components/forms/demo-modal";

type MarketingLayoutProps = {
  children: ReactNode;
};

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <LenisProvider>
      <DemoModalProvider>
        <SkipLink />
        <ScrollProgress />
        <Navbar />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </DemoModalProvider>
    </LenisProvider>
  );
}
