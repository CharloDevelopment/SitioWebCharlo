import { cn } from "@/lib/utils";

type SkipLinkProps = {
  href?: string;
  className?: string;
};

export function SkipLink({ href = "#main-content", className }: SkipLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "focus:bg-primary focus:text-primary-foreground sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:shadow-lg focus:outline-none",
        className,
      )}
    >
      Saltar al contenido principal
    </a>
  );
}
