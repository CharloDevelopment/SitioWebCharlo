export type Tab = "atencion" | "cobranza" | "agenda";

export type Conversation = {
  id: string;
  name: {
    given: string;
    family: string;
  };
  avatar: string;
  preview: string;
  time: string;
  unread?: number;
  online?: boolean;
};

export type Message = {
  from: "client" | "charlo";
  text?: string;
  time: string;
  status?: "sent" | "delivered" | "read";
  attachment?: "link" | "calendar" | "reminder";
  typing?: boolean;
  highlight?: "pagar" | "confirmar" | "reagendar";
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
        preview: "¿Tienen disponible el viernes?",
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
        text: "Hola, ¿tienen disponibilidad para el viernes en la mañana?",
        time: "12:38",
      },
      { from: "charlo", typing: true, time: "12:39" },
      {
        from: "charlo",
        text: "Hola María. Tengo espacio a las 9:00 y a las 11:30. ¿Cuál te acomoda mejor?",
        time: "12:39",
        status: "read",
      },
      { from: "charlo", typing: true, time: "12:40" },
      {
        from: "client",
        text: "A las 11:30 va perfecto",
        time: "12:40",
      },
      { from: "charlo", typing: true, time: "12:41" },
      {
        from: "charlo",
        text: "Listo. Te aparto el viernes 18 a las 11:30. Te mando un recordatorio el jueves.",
        time: "12:41",
        status: "read",
        attachment: "calendar",
        highlight: "confirmar",
      },
      { from: "charlo", typing: true, time: "12:42" },
      {
        from: "client",
        text: "Sí, gracias",
        time: "12:42",
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
        text: "Hola Roberto. Te recuerdo que tu pago de $4,200 vence hoy.",
        time: "10:02",
        status: "read",
      },
      {
        from: "client",
        text: "Sí, mándamelo por favor",
        time: "10:05",
      },
      { from: "charlo", typing: true, time: "10:05" },
      {
        from: "charlo",
        text: "Listo. Puedes pagar con tarjeta o transferencia.",
        time: "10:06",
        status: "read",
        attachment: "link",
        highlight: "pagar",
      },
      { type: "divider", label: "Más tarde" },
      {
        from: "charlo",
        text: "Hola Roberto, ¿pudiste realizar el pago?",
        time: "13:00",
        status: "read",
      },
      { from: "charlo", typing: true, time: "13:14" },
      {
        from: "client",
        text: "Pago realizado. Gracias",
        time: "13:15",
      },
      {
        from: "charlo",
        text: "Recibido. Tu saldo está al corriente. Gracias por tu preferencia.",
        time: "13:15",
        status: "read",
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
        text: "Hola Lucía. Tienes cita el viernes 18 a las 10:00 con el Dr. Hernández. ¿Confirmas?",
        time: "14:00",
        status: "read",
        attachment: "reminder",
      },
      { from: "charlo", typing: true, time: "14:21" },
      {
        from: "client",
        text: "Confirmo cita del viernes 10am",
        time: "14:22",
      },
      {
        from: "charlo",
        text: "Perfecto. Te mando recordatorio 24 horas antes.",
        time: "14:22",
        status: "read",
        attachment: "calendar",
        highlight: "reagendar",
      },
      { from: "charlo", typing: true, time: "14:23" },
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
