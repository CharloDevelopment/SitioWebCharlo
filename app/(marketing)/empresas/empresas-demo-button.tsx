"use client";

import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDemoModal } from "@/components/forms/demo-modal";

export function EmpresasDemoButton() {
  const { setOpen } = useDemoModal();
  return (
    <Button size="lg" onClick={() => setOpen(true)}>
      Solicitar demostración
      <ChevronRight className="ml-2 h-4 w-4" />
    </Button>
  );
}
