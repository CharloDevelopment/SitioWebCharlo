"use client";

import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDemoModal } from "@/components/forms/demo-modal";

type PlatformCtaProps = {
  label?: string;
};

export function PlatformCta({ label = "Solicitar demostración" }: PlatformCtaProps) {
  const { setOpen } = useDemoModal();
  return (
    <Button size="lg" variant="secondary" onClick={() => setOpen(true)}>
      {label}
      <ChevronRight className="ml-2 h-4 w-4" />
    </Button>
  );
}
