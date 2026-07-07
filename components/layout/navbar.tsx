"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useDemoModal } from "@/components/forms/demo-modal";
import { mainNav } from "@/config/nav";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setOpen: setDemoOpen } = useDemoModal();

  return (
    <header className="border-border/40 bg-background/80 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full border-b backdrop-blur-lg">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" aria-label="Charlo — Ir al inicio" className="shrink-0">
            <Logo variant="full" width={120} height={32} priority />
          </Link>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
            {mainNav.map((item) => (
              <NavItem key={item.title} item={item} />
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">Iniciar sesión</Link>
          </Button>
          <Button size="sm" onClick={() => setDemoOpen(true)}>
            Solicitar demostración
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Abrir menú de navegación">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px]"
              aria-describedby="mobile-nav-description"
            >
              <SheetHeader>
                <SheetTitle>
                  <Logo variant="full" width={100} height={28} />
                </SheetTitle>
                <SheetDescription id="mobile-nav-description">
                  Navega por el sitio o solicita una demostración.
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4" aria-label="Navegación móvil">
                {mainNav.map((item) => (
                  <MobileNavItem
                    key={item.title}
                    item={item}
                    onNavigate={() => setMobileOpen(false)}
                  />
                ))}
                <div className="border-border my-4 border-t" />
                <Button
                  variant="ghost"
                  className="justify-start"
                  asChild
                  onClick={() => setMobileOpen(false)}
                >
                  <Link href="/login">Iniciar sesión</Link>
                </Button>
                <Button
                  onClick={() => {
                    setMobileOpen(false);
                    setDemoOpen(true);
                  }}
                >
                  Solicitar demostración
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

type NavItemProps = {
  item: (typeof mainNav)[number];
};

function NavItem({ item }: NavItemProps) {
  if (item.children && item.children.length > 0) {
    return (
      <div className="group relative">
        <button
          type="button"
          className="text-foreground/80 hover:text-foreground focus-visible:ring-ring inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
          aria-haspopup="true"
        >
          {item.title}
          <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
        </button>
        <div
          className={cn(
            "border-border bg-popover text-popover-foreground invisible absolute top-full left-0 z-50 mt-1 w-[480px] origin-top-left rounded-xl border p-2 opacity-0 shadow-xl transition-all",
            "group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100",
            "before:absolute before:-top-1 before:left-0 before:h-1 before:w-full before:content-['']",
          )}
        >
          <div className="grid gap-1">
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="hover:bg-muted focus-visible:bg-muted flex flex-col gap-0.5 rounded-lg p-3 transition-colors focus-visible:outline-none"
              >
                <span className="text-sm font-medium">{child.title}</span>
                {child.description ? (
                  <span className="text-muted-foreground text-xs">{child.description}</span>
                ) : null}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className="text-foreground/80 hover:text-foreground focus-visible:ring-ring rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
    >
      {item.title}
    </Link>
  );
}

function MobileNavItem({ item, onNavigate }: NavItemProps & { onNavigate: () => void }) {
  if (item.children && item.children.length > 0) {
    return (
      <div className="flex flex-col gap-1">
        <p className="text-muted-foreground px-3 py-2 text-xs font-semibold tracking-wide uppercase">
          {item.title}
        </p>
        {item.children.map((child) => (
          <Link
            key={child.href}
            href={child.href}
            onClick={onNavigate}
            className="text-foreground hover:bg-muted rounded-md px-3 py-2 text-sm font-medium transition-colors"
          >
            {child.title}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className="text-foreground hover:bg-muted rounded-md px-3 py-2 text-sm font-medium transition-colors"
    >
      {item.title}
    </Link>
  );
}
