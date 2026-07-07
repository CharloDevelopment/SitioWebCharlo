"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, MapPin, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Appointment = {
  id: string;
  day: number;
  hour: number;
  duration: number;
  client: string;
  service: string;
  color: "primary" | "green" | "amber" | "purple";
};

const COLOR_MAP: Record<Appointment["color"], string> = {
  primary: "bg-primary/15 border-primary text-primary",
  green: "bg-green-100 border-green-500 text-green-700 dark:bg-green-900/20 dark:text-green-300",
  amber: "bg-amber-100 border-amber-500 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300",
  purple:
    "bg-purple-100 border-purple-500 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300",
};

const INITIAL_APPOINTMENTS: Appointment[] = [
  {
    id: "1",
    day: 1,
    hour: 9,
    duration: 1,
    client: "Sofía Mendoza",
    service: "Consulta general",
    color: "primary",
  },
  {
    id: "2",
    day: 1,
    hour: 11,
    duration: 1.5,
    client: "Andrés López",
    service: "Revisión",
    color: "green",
  },
  {
    id: "3",
    day: 2,
    hour: 10,
    duration: 1,
    client: "Carmen Ruiz",
    service: "Seguimiento",
    color: "amber",
  },
  {
    id: "4",
    day: 3,
    hour: 14,
    duration: 2,
    client: "Miguel Ángel",
    service: "Terapia",
    color: "purple",
  },
  {
    id: "5",
    day: 4,
    hour: 9,
    duration: 1,
    client: "Daniela Pérez",
    service: "Consulta",
    color: "primary",
  },
  {
    id: "6",
    day: 4,
    hour: 16,
    duration: 1,
    client: "Roberto García",
    service: "Primera visita",
    color: "green",
  },
];

const DAYS = ["L", "M", "M", "J", "V"];
const HOURS = Array.from({ length: 10 }, (_, i) => i + 8);

export function AgendaMockup() {
  const [appointments, setAppointments] = useState<Appointment[]>(INITIAL_APPOINTMENTS);
  const [week, setWeek] = useState(0);
  const [toast, setToast] = useState<string | null>(null);

  const newId = `${Date.now()}`;

  function addSlot(day: number, hour: number) {
    const newAppt: Appointment = {
      id: newId,
      day,
      hour,
      duration: 1,
      client: "Nueva cita",
      service: "Por confirmar",
      color: "primary",
    };
    setAppointments((prev) => [...prev, newAppt]);
    setToast(`Cita agregada · ${DAYS[day]} ${hour}:00`);
    setTimeout(() => setToast(null), 2000);
  }

  return (
    <div className="border-border bg-card relative mx-auto w-full max-w-3xl overflow-hidden rounded-2xl border shadow-2xl">
      <div className="border-border bg-muted/30 flex items-center justify-between border-b px-4 py-3">
        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant="ghost"
            className="h-7 w-7"
            onClick={() => setWeek((w) => w - 1)}
            aria-label="Semana anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="min-w-[140px] text-center text-sm font-semibold">
            {week === 0
              ? "Esta semana"
              : week === 1
                ? "Próxima semana"
                : `Semana ${week > 0 ? "+" : ""}${week}`}
          </div>
          <Button
            size="icon"
            variant="ghost"
            className="h-7 w-7"
            onClick={() => setWeek((w) => w + 1)}
            aria-label="Semana siguiente"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="bg-primary/10 text-primary rounded-full px-2 py-0.5 text-[10px] font-medium">
            En vivo
          </span>
        </div>
      </div>

      <div className="border-border bg-muted/10 grid grid-cols-[60px_repeat(5,1fr)] border-b text-xs">
        <div className="border-border border-r p-2" />
        {DAYS.map((day, i) => (
          <div
            key={i}
            className="border-border border-r p-2 text-center font-medium last:border-r-0"
          >
            <div className="text-muted-foreground">{day}</div>
            <div className="text-base font-semibold">{15 + i}</div>
          </div>
        ))}
      </div>

      <div className="max-h-[400px] overflow-y-auto">
        <div className="grid grid-cols-[60px_repeat(5,1fr)]">
          {HOURS.map((hour) => (
            <div key={hour} className="contents">
              <div className="border-border text-muted-foreground border-r border-b p-2 text-right text-[10px]">
                {hour}:00
              </div>
              {DAYS.map((_, dayIdx) => {
                const appts = appointments.filter((a) => a.day === dayIdx && a.hour === hour);
                return (
                  <button
                    key={dayIdx}
                    onClick={() => addSlot(dayIdx, hour)}
                    className="group border-border hover:bg-muted/30 relative min-h-[48px] border-r border-b p-1 text-left transition-colors last:border-r-0"
                    aria-label={`Agregar cita ${DAYS[dayIdx]} ${hour}:00`}
                  >
                    {appts.length > 0 ? (
                      <div className="flex flex-col gap-0.5">
                        {appts.map((appt) => (
                          <div
                            key={appt.id}
                            className={cn(
                              "rounded-md border-l-2 px-1.5 py-0.5 text-[10px] leading-tight",
                              COLOR_MAP[appt.color],
                            )}
                            style={{ minHeight: `${appt.duration * 44}px` }}
                          >
                            <div className="truncate font-semibold">{appt.client}</div>
                            <div className="truncate opacity-80">{appt.service}</div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <Plus className="text-muted-foreground h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="border-border bg-muted/30 text-muted-foreground flex items-center justify-between border-t px-4 py-2 text-xs">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            Sincronizado
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            Google Calendar
          </span>
        </div>
        <span>{appointments.length} citas esta semana</span>
      </div>

      {toast ? (
        <div className="border-border bg-card absolute right-4 bottom-16 rounded-lg border px-3 py-2 text-xs font-medium shadow-lg">
          {toast}
        </div>
      ) : null}
    </div>
  );
}
