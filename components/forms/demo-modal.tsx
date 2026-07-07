"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DemoForm } from "@/components/forms/demo-form";

type DemoModalContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const DemoModalContext = createContext<DemoModalContextType | undefined>(undefined);

type DemoModalProviderProps = {
  children: ReactNode;
};

export function DemoModalProvider({ children }: DemoModalProviderProps) {
  const [open, setOpen] = useState(false);

  return (
    <DemoModalContext.Provider value={{ open, setOpen }}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Solicitar demostración</DialogTitle>
            <DialogDescription>
              Cuéntanos sobre tu empresa. Te contactamos por WhatsApp con los siguientes pasos.
            </DialogDescription>
          </DialogHeader>
          <DemoForm onSuccess={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    </DemoModalContext.Provider>
  );
}

export function useDemoModal() {
  const ctx = useContext(DemoModalContext);
  if (!ctx) {
    throw new Error("useDemoModal must be used within DemoModalProvider");
  }
  return ctx;
}
