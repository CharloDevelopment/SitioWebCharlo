"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Clock,
  CreditCard,
  Mail,
  MessageCircle,
  Send,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PaymentStatus = "paid" | "pending" | "overdue" | "reminded";

type Payment = {
  id: string;
  client: string;
  amount: number;
  due: string;
  status: PaymentStatus;
};

const INITIAL_PAYMENTS: Payment[] = [
  {
    id: "1",
    client: "María González",
    amount: 2500,
    due: "Vence hoy",
    status: "pending",
  },
  {
    id: "2",
    client: "Roberto Hernández",
    amount: 4200,
    due: "Vencido hace 3 días",
    status: "overdue",
  },
  {
    id: "3",
    client: "Lucía Méndez",
    amount: 1800,
    due: "Vence en 2 días",
    status: "pending",
  },
  {
    id: "4",
    client: "Carlos Ramírez",
    amount: 5500,
    due: "Pagado el martes",
    status: "paid",
  },
  {
    id: "5",
    client: "Ana Torres",
    amount: 3100,
    due: "Recordatorio enviado",
    status: "reminded",
  },
];

const STATUS_CONFIG: Record<PaymentStatus, { label: string; className: string }> = {
  paid: {
    label: "Pagado",
    className: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  },
  pending: {
    label: "Pendiente",
    className: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  },
  overdue: {
    label: "Vencido",
    className: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
  },
  reminded: {
    label: "Recordatorio enviado",
    className: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  },
};

export function CobranzaMockup() {
  const [payments, setPayments] = useState<Payment[]>(INITIAL_PAYMENTS);
  const [filter, setFilter] = useState<"all" | "pending" | "overdue">("all");
  const [toast, setToast] = useState<string | null>(null);

  const filtered = payments.filter((p) => {
    if (filter === "pending") return p.status === "pending";
    if (filter === "overdue") return p.status === "overdue";
    return true;
  });

  const totals = {
    collected: payments.filter((p) => p.status === "paid").reduce((s, p) => s + p.amount, 0),
    pending: payments
      .filter((p) => p.status === "pending" || p.status === "reminded")
      .reduce((s, p) => s + p.amount, 0),
    overdue: payments.filter((p) => p.status === "overdue").reduce((s, p) => s + p.amount, 0),
  };

  function sendReminder(id: string) {
    setPayments((prev) => prev.map((p) => (p.id === id ? { ...p, status: "reminded" } : p)));
    const payment = payments.find((p) => p.id === id);
    if (payment) {
      setToast(`Recordatorio enviado a ${payment.client}`);
      setTimeout(() => setToast(null), 2500);
    }
  }

  function markAsPaid(id: string) {
    setPayments((prev) => prev.map((p) => (p.id === id ? { ...p, status: "paid" } : p)));
    setToast("Marcado como pagado");
    setTimeout(() => setToast(null), 2500);
  }

  return (
    <div className="border-border bg-card relative mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border shadow-2xl">
      <div className="border-border bg-muted/30 border-b p-4">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-sm font-semibold">Cobranza · Este mes</h3>
          <span className="bg-primary/10 text-primary rounded-full px-2 py-0.5 text-xs font-medium">
            En vivo
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-lg border border-green-200 bg-green-50/50 p-3 dark:border-green-900/50 dark:bg-green-900/10">
            <div className="flex items-center gap-1 text-xs text-green-700 dark:text-green-400">
              <CheckCircle2 className="h-3 w-3" />
              Cobrado
            </div>
            <div className="mt-1 text-lg font-semibold text-green-700 dark:text-green-300">
              ${totals.collected.toLocaleString("es-MX")}
            </div>
          </div>
          <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-3 dark:border-amber-900/50 dark:bg-amber-900/10">
            <div className="flex items-center gap-1 text-xs text-amber-700 dark:text-amber-400">
              <Clock className="h-3 w-3" />
              Por cobrar
            </div>
            <div className="mt-1 text-lg font-semibold text-amber-700 dark:text-amber-300">
              ${totals.pending.toLocaleString("es-MX")}
            </div>
          </div>
          <div className="rounded-lg border border-red-200 bg-red-50/50 p-3 dark:border-red-900/50 dark:bg-red-900/10">
            <div className="flex items-center gap-1 text-xs text-red-700 dark:text-red-400">
              <TrendingUp className="h-3 w-3" />
              Vencido
            </div>
            <div className="mt-1 text-lg font-semibold text-red-700 dark:text-red-300">
              ${totals.overdue.toLocaleString("es-MX")}
            </div>
          </div>
        </div>
      </div>

      <div className="border-border bg-muted/10 flex items-center gap-1 border-b p-2">
        <FilterButton active={filter === "all"} onClick={() => setFilter("all")}>
          Todos ({payments.length})
        </FilterButton>
        <FilterButton active={filter === "pending"} onClick={() => setFilter("pending")}>
          Pendientes
        </FilterButton>
        <FilterButton active={filter === "overdue"} onClick={() => setFilter("overdue")}>
          Vencidos
        </FilterButton>
      </div>

      <div className="divide-border divide-y">
        {filtered.length === 0 ? (
          <div className="text-muted-foreground p-8 text-center text-sm">
            No hay pagos en este filtro
          </div>
        ) : (
          filtered.map((payment) => {
            const config = STATUS_CONFIG[payment.status];
            return (
              <div
                key={payment.id}
                className="hover:bg-muted/20 flex items-center gap-3 p-4 transition-colors"
              >
                <div className="bg-primary/10 text-primary flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
                  <CreditCard className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{payment.client}</p>
                  <p className="text-muted-foreground text-xs">{payment.due}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-sm font-semibold">
                    ${payment.amount.toLocaleString("es-MX")}
                  </span>
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-[10px] font-medium",
                      config.className,
                    )}
                  >
                    {config.label}
                  </span>
                </div>
                {(payment.status === "pending" || payment.status === "overdue") && (
                  <Button size="sm" variant="outline" onClick={() => sendReminder(payment.id)}>
                    <Send className="mr-1 h-3 w-3" />
                    Recordar
                  </Button>
                )}
                {payment.status === "reminded" && (
                  <Button size="sm" variant="ghost" onClick={() => markAsPaid(payment.id)}>
                    <CheckCircle2 className="mr-1 h-3 w-3" />
                    Cobrado
                  </Button>
                )}
              </div>
            );
          })
        )}
      </div>

      <div className="border-border bg-muted/30 text-muted-foreground flex items-center justify-between border-t px-4 py-2 text-xs">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <MessageCircle className="h-3 w-3" />
            WhatsApp
          </span>
          <span className="flex items-center gap-1">
            <Mail className="h-3 w-3" />
            Email
          </span>
        </div>
        <span>Charlo Cobranza</span>
      </div>

      {toast ? (
        <div className="border-border bg-card absolute right-4 bottom-16 rounded-lg border px-3 py-2 text-xs font-medium shadow-lg">
          {toast}
        </div>
      ) : null}
    </div>
  );
}

function FilterButton({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-md px-2.5 py-1 text-xs font-medium transition-colors",
        active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted",
      )}
    >
      {children}
    </button>
  );
}
