export type Tab = "atencion" | "cobranza" | "agenda";

export type Conversation = {
  id: string;
  name: { given: string; family: string };
  avatar: string;
  preview: string;
  time: string;
  unread?: number;
  online?: boolean;
};

export type HighlightKind = "pagar" | "confirmar" | "reagendar" | "agendar";

export type Message = {
  from: "client" | "charlo";
  text?: string;
  time: string;
  status?: "sent" | "delivered" | "read";
  attachment?:
    | "link"
    | "calendar"
    | "reminder"
    | "service-menu"
    | "payment-methods"
    | "receipt"
    | "time-slots"
    | "calendar-event"
    | "quick-replies";
  highlight?: HighlightKind;
  data?: {
    services?: ServiceItem[];
    methods?: PaymentMethod[];
    slots?: TimeSlot[];
    replies?: QuickReply[];
    amount?: string;
    dueLabel?: string;
    ref?: string;
    eventDate?: string;
    eventTime?: string;
    eventLocation?: string;
    eventDoctor?: string;
  };
  typing?: boolean;
};

export type ServiceItem = {
  title: string;
  duration: string;
  price: string;
};

export type PaymentMethod = {
  id: string;
  label: string;
  hint?: string;
};

export type TimeSlot = {
  time: string;
  available: boolean;
};

export type QuickReply = {
  id: string;
  label: string;
  variant?: "primary" | "secondary";
};

export type DayDivider = { type: "divider"; label: string };
export type ChatItem = Message | DayDivider;

export type Scenario = {
  id: Tab;
  label: string;
  filterIdx: number;
  active: number;
  conversations: Conversation[];
  chat: ChatItem[];
};

const WOMEN = [44, 68, 90, 32, 47, 65, 23, 81, 56, 12, 78];
const MEN = [32, 45, 67, 12, 56, 78, 91, 24, 38, 60, 15];

const avatar = (gender: "women" | "men", n: number) =>
  `https://randomuser.me/api/portraits/${gender}/${n}.jpg`;

export const SCENARIOS: Record<Tab, Scenario> = {
  atencion: {
    id: "atencion",
    label: "Atención",
    filterIdx: 0,
    active: 0,
    conversations: [
      {
        id: "maria",
        name: { given: "María", family: "González" },
        avatar: avatar("women", 44),
        preview: "¿Qué servicios tienen?",
        time: "12:42",
        unread: 2,
        online: true,
      },
      {
        id: "ana",
        name: { given: "Ana", family: "Pérez" },
        avatar: avatar("women", 68),
        preview: "Gracias, nos vemos el sábado",
        time: "11:18",
      },
      {
        id: "luis",
        name: { given: "Luis", family: "Castañeda" },
        avatar: avatar("men", 32),
        preview: "¿Cuánto cuesta la consulta?",
        time: "10:55",
        unread: 1,
      },
      {
        id: "rosa",
        name: { given: "Rosa", family: "Velasco" },
        avatar: avatar("women", 90),
        preview: "Perfecto, confirmado",
        time: "Ayer",
      },
      {
        id: "diego",
        name: { given: "Diego", family: "Maldonado" },
        avatar: avatar("men", 45),
        preview: "Necesito información",
        time: "Ayer",
      },
      {
        id: "sofia",
        name: { given: "Sofía", family: "Fuentes" },
        avatar: avatar("women", 32),
        preview: "¿El servicio incluye garantía?",
        time: "Lun",
      },
    ],
    chat: [
      { type: "divider", label: "Hoy" },
      {
        from: "client",
        text: "Hola, ¿qué servicios tienen disponibles?",
        time: "12:38",
      },
      { from: "charlo", typing: true, time: "12:39" },
      {
        from: "charlo",
        text: "¡Hola María! Estos son nuestros servicios:",
        time: "12:39",
        status: "read",
      },
      {
        from: "charlo",
        time: "12:39",
        status: "read",
        attachment: "service-menu",
        data: {
          services: [
            { title: "Consulta inicial", duration: "30 min", price: "$500" },
            { title: "Seguimiento mensual", duration: "60 min", price: "$1,200" },
            { title: "Asesoría express", duration: "15 min", price: "$300" },
          ],
        },
      },
      {
        from: "client",
        text: "Me interesa la consultoría mensual",
        time: "12:41",
      },
      { from: "charlo", typing: true, time: "12:41" },
      {
        from: "charlo",
        text: "Perfecto. ¿Qué te gustaría hacer?",
        time: "12:42",
        status: "read",
        attachment: "quick-replies",
        data: {
          replies: [
            { id: "info", label: "Más información", variant: "secondary" },
            { id: "agendar", label: "Agendar llamada", variant: "primary" },
            { id: "humano", label: "Hablar con humano", variant: "secondary" },
          ],
        },
      },
    ],
  },
  cobranza: {
    id: "cobranza",
    label: "Cobranza",
    filterIdx: 3,
    active: 0,
    conversations: [
      {
        id: "roberto",
        name: { given: "Roberto", family: "Hernández" },
        avatar: avatar("men", 67),
        preview: "Pago realizado. Gracias",
        time: "13:15",
        online: true,
      },
      {
        id: "lucia",
        name: { given: "Lucía", family: "Martínez" },
        avatar: avatar("women", 47),
        preview: "Listo, mañana temprano",
        time: "12:08",
        unread: 1,
      },
      {
        id: "andres",
        name: { given: "Andrés", family: "Cruz" },
        avatar: avatar("men", 12),
        preview: "¿Aceptan transferencia?",
        time: "11:30",
      },
      {
        id: "patricia",
        name: { given: "Patricia", family: "Gutiérrez" },
        avatar: avatar("women", 65),
        preview: "Pagado",
        time: "10:00",
      },
      {
        id: "jorge",
        name: { given: "Jorge", family: "Salinas" },
        avatar: avatar("men", 56),
        preview: "Espero el link por favor",
        time: "Ayer",
      },
      {
        id: "mariana",
        name: { given: "Mariana", family: "Reyes" },
        avatar: avatar("women", 23),
        preview: "Confirmado",
        time: "Lun",
      },
    ],
    chat: [
      { type: "divider", label: "Hoy" },
      { from: "charlo", typing: true, time: "10:01" },
      {
        from: "charlo",
        text: "Hola Roberto. Tienes un pago pendiente.",
        time: "10:02",
        status: "read",
        attachment: "payment-methods",
        data: {
          amount: "$4,200 MXN",
          dueLabel: "Vence hoy",
          methods: [
            { id: "tarjeta", label: "Tarjeta", hint: "Visa, MC, Amex" },
            { id: "transfer", label: "Transferencia", hint: "SPEI" },
            { id: "oxxo", label: "OXXO Pay", hint: "Efectivo" },
          ],
        },
      },
      {
        from: "client",
        text: "¿Aceptan OXXO?",
        time: "10:05",
      },
      { from: "charlo", typing: true, time: "10:05" },
      {
        from: "charlo",
        text: "Sí. Te envío el link de pago:",
        time: "10:06",
        status: "read",
        attachment: "link",
        highlight: "pagar",
      },
      { type: "divider", label: "Más tarde" },
      { from: "charlo", typing: true, time: "13:14" },
      {
        from: "client",
        text: "Listo, ya pagué",
        time: "13:15",
      },
      { from: "charlo", typing: true, time: "13:15" },
      {
        from: "charlo",
        time: "13:15",
        status: "read",
        attachment: "receipt",
        data: {
          amount: "$4,200 MXN",
          ref: "#CHL-8421",
        },
      },
    ],
  },
  agenda: {
    id: "agenda",
    label: "Agenda",
    filterIdx: 4,
    active: 0,
    conversations: [
      {
        id: "lucia-o",
        name: { given: "Lucía", family: "Ortega" },
        avatar: avatar("women", 81),
        preview: "Confirmo cita del viernes 10am",
        time: "14:22",
        online: true,
      },
      {
        id: "carlos",
        name: { given: "Carlos", family: "Vera" },
        avatar: avatar("men", 78),
        preview: "Necesito reagendar",
        time: "13:50",
        unread: 1,
      },
      {
        id: "mariana-r",
        name: { given: "Mariana", family: "Reyes" },
        avatar: avatar("women", 56),
        preview: "A las 4pm perfecto",
        time: "12:10",
      },
      {
        id: "juan",
        name: { given: "Juan", family: "López" },
        avatar: avatar("men", 91),
        preview: "Listo, ahí estaré",
        time: "11:00",
      },
      {
        id: "elena",
        name: { given: "Elena", family: "Mendoza" },
        avatar: avatar("women", 12),
        preview: "¿Hay espacio mañana?",
        time: "Ayer",
      },
      {
        id: "david",
        name: { given: "David", family: "Torres" },
        avatar: avatar("men", 24),
        preview: "Confirmado",
        time: "Lun",
      },
    ],
    chat: [
      { type: "divider", label: "Hoy" },
      { from: "charlo", typing: true, time: "13:59" },
      {
        from: "charlo",
        text: "Hola Lucía. Elige un horario para el viernes:",
        time: "14:00",
        status: "read",
        attachment: "time-slots",
        data: {
          slots: [
            { time: "9:00", available: true },
            { time: "10:00", available: true },
            { time: "11:30", available: false },
            { time: "16:00", available: true },
            { time: "17:30", available: true },
            { time: "18:00", available: true },
          ],
        },
      },
      {
        from: "client",
        text: "A las 10:00 perfecto",
        time: "14:21",
      },
      { from: "charlo", typing: true, time: "14:22" },
      {
        from: "charlo",
        time: "14:22",
        status: "read",
        attachment: "calendar-event",
        highlight: "reagendar",
        data: {
          eventDate: "Vie 18 Oct",
          eventTime: "10:00",
          eventDoctor: "Dr. Hernández",
          eventLocation: "Sucursal Centro",
        },
      },
    ],
  },
};

export const TABS: { id: Tab; label: string }[] = [
  { id: "atencion", label: "Atención" },
  { id: "cobranza", label: "Cobranza" },
  { id: "agenda", label: "Agenda" },
];

export const FILTERS = ["Todos", "No leídos", "Clientes", "Pagos", "Citas"];

export const fullName = (n: { given: string; family: string }) => `${n.given} ${n.family}`;

export const initials = (n: { given: string; family: string }) =>
  `${n.given[0] ?? ""}${n.family[0] ?? ""}`.toUpperCase();
