# Plan Charlo — Sitio Web

Este archivo es la lista completa de todo lo que hay que hacer para construir el sitio web de Charlo. Está dividido por fases. Cada tarea es un checkbox que se va marcando cuando se termina.

El sitio es solo de marketing (no incluye la plataforma `/app` real). El idioma es español. Tiene modo claro y oscuro. Todos los botones llevan a WhatsApp.

---

## Stack (lo que vamos a usar)

- **Next.js 15** — el framework principal
- **TypeScript** — para que el código tenga tipos y sea más seguro
- **Tailwind CSS** — para los estilos
- **shadcn/ui** — para los componentes visuales
- **Framer Motion** — para las animaciones
- **Lenis** — para el scroll suave
- **Geist** — la tipografía
- **Resend** — para mandar los emails del formulario
- **Microsoft Clarity** — para ver cómo la gente usa el sitio
- **GA4** — para medir visitas
- **Vercel** — para publicar el sitio
- **Cloudflare** — para DNS y CDN
- **charlo.mx** — el dominio

---

## Reglas de oro

- Lenguaje simple en todo. Nunca palabras complicadas.
- Hablar de resultados, nunca de tecnología.
- No vender miedo. Vender oportunidad.
- El cliente debe verse reflejado en sus problemas en los primeros 10 segundos.
- Nada de links muertos. Cada botón lleva a algún lado real.

---

## FASE 0 — Setup del proyecto

Preparar todo lo necesario para empezar a programar.

- [x] Crear el repositorio en GitHub
- [x] Inicializar el proyecto con Next.js 15
- [x] Configurar TypeScript en modo estricto
- [x] Instalar Tailwind CSS
- [x] Instalar shadcn/ui
- [x] Configurar ESLint y Prettier
- [x] Instalar Husky y lint-staged
- [x] Configurar Conventional Commits
- [x] Definir las ramas: main, dev, feature, fix
- [x] Crear el proyecto en Vercel
- [x] Conectar el repo con Vercel
- [x] Crear el archivo .env.example con todas las variables
- [x] Crear el archivo .gitignore
- [x] Crear el archivo README con instrucciones básicas
- [x] Verificar que `pnpm dev` corra sin errores
- [x] Verificar que `pnpm build` pase sin errores
- [x] Hacer el primer deploy preview

**Estado:** Completado. Sitio en producción en https://charlo-web.vercel.app

---

## FASE 1 — Branding

Cargar la marca de Charlo en el proyecto.

- [ ] Subir el logo y el manual a `/assets/brand/`
- [ ] Crear el componente `<Logo />` con sus variantes
- [ ] Definir la paleta de colores en CSS variables
- [ ] Aprobar la paleta (o subir los hex exactos del manual)
- [ ] Cargar la tipografía Geist vía next/font
- [ ] Crear el favicon
- [ ] Crear el apple-icon
- [ ] Crear el manifest.json
- [ ] Crear la imagen OpenGraph dinámica
- [ ] Crear la imagen Twitter dinámica
- [ ] Verificar que la imagen OG se vea bien al compartir en redes

---

## FASE 2 — UI Kit

Crear todos los componentes visuales que se van a reutilizar.

- [ ] Instalar los componentes base de shadcn/ui
- [ ] Botón (con variantes: primario, secundario, fantasma, con icono)
- [ ] Input de texto
- [ ] Textarea
- [ ] Select
- [ ] Checkbox y Radio
- [ ] Card
- [ ] Badge
- [ ] Dialog (modal)
- [ ] Dropdown menu
- [ ] Tabs
- [ ] Accordion (para FAQ)
- [ ] Tooltip
- [ ] Toast (notificaciones)
- [ ] Sheet (menú lateral móvil)
- [ ] Navigation menu
- [ ] Avatar
- [ ] Separator
- [ ] Skeleton (para loading)
- [ ] Switch (para modo claro/oscuro)
- [ ] Slider
- [ ] Form (wrapper con validación)
- [ ] Label
- [ ] Progress
- [ ] ScrollArea
- [ ] Section wrapper (envoltorio de sección)
- [ ] Section heading (título + subtítulo estandarizado)
- [ ] Container (ancho máximo)
- [ ] Bento grid (grid moderno)
- [ ] Marquee (logos animados)
- [ ] CTA banner (bloque grande de llamado a la acción)
- [ ] Verificar que todos se vean bien en modo claro
- [ ] Verificar que todos se vean bien en modo oscuro

---

## FASE 3 — Layout global

Las partes que se ven en todas las páginas.

- [ ] Crear el Navbar con el mega menú
- [ ] Crear el menú móvil (Sheet)
- [ ] Crear el Footer con 4 columnas
- [ ] Crear el Theme Toggle (botón modo claro/oscuro)
- [ ] Crear el botón flotante de WhatsApp
- [ ] Crear el modal global de "Solicitar demostración"
- [ ] Crear el formulario mini dentro del modal
- [ ] Conectar el modal con WhatsApp pre-llenado
- [ ] Crear el cookie banner
- [ ] Activar Lenis para scroll suave
- [ ] Crear las animaciones de transición entre páginas
- [ ] Crear el scroll progress indicator
- [ ] Crear el skip link (para accesibilidad)
- [ ] Crear el breadcrumb
- [ ] Verificar que la navegación funcione en desktop
- [ ] Verificar que la navegación funcione en móvil
- [ ] Verificar que la navegación funcione con teclado
- [ ] Verificar que respete prefers-reduced-motion

---

## FASE 4 — Home (`/`)

La página principal. La más importante.

- [ ] Crear la estructura de la página
- [ ] Sección Hero con título, subtítulo y CTAs
- [ ] Microcopy de confianza debajo de los CTAs del hero
- [ ] Sección de Problemas
- [ ] Sección de Plataforma y Soluciones (con 3 cards)
- [ ] Sección de Beneficios (bento)
- [ ] Sección de Cómo funciona (3 pasos)
- [ ] Sección de Casos de uso (4 industrias)
- [ ] Sección de Testimonios (carrusel)
- [ ] Sección de FAQ (accordion)
- [ ] Sección de CTA final
- [ ] Agregar animaciones de entrada en cada sección
- [ ] Agregar SEO: title, description, canonical
- [ ] Agregar OpenGraph y Twitter cards
- [ ] Agregar JSON-LD de tipo Organization
- [ ] Agregar JSON-LD de tipo FAQPage
- [ ] Verificar que el Lighthouse mobile sea mayor a 95
- [ ] Verificar que el LCP sea menor a 1.5s

---

## FASE 5 — Productos

Las páginas de cada producto con su demo interactiva.

### `/plataforma` (overview del ecosistema)

- [ ] Crear la estructura
- [ ] Hero con título y subtítulo
- [ ] Sección: Qué es Charlo Platform
- [ ] Sección: Dashboard
- [ ] Sección: Centro de Control
- [ ] Sección: Usuarios
- [ ] Sección: IA
- [ ] Sección: Escalabilidad
- [ ] Sección: Seguridad
- [ ] Sección: Integraciones
- [ ] CTA final
- [ ] SEO y JSON-LD

### `/atencion` (Charlo Atención)

- [ ] Crear la estructura
- [ ] Hero
- [ ] Problema específico
- [ ] Cómo funciona
- [ ] Demo interactiva del agente (mockup navegable)
- [ ] Características
- [ ] Beneficios
- [ ] Casos
- [ ] FAQ
- [ ] CTA
- [ ] SEO y JSON-LD

### `/cobranza` (Charlo Cobranza)

- [ ] Crear la estructura
- [ ] Hero
- [ ] Problema específico
- [ ] Cómo funciona
- [ ] Demo interactiva del flujo de cobros
- [ ] Características
- [ ] Beneficios
- [ ] Casos
- [ ] FAQ
- [ ] CTA
- [ ] SEO y JSON-LD

### `/agenda` (Charlo Agenda)

- [ ] Crear la estructura
- [ ] Hero
- [ ] Problema específico
- [ ] Cómo funciona
- [ ] Demo interactiva de la agenda
- [ ] Características
- [ ] Beneficios
- [ ] Casos
- [ ] FAQ
- [ ] CTA
- [ ] SEO y JSON-LD

### `/empresas` (industrias genérico)

- [ ] Crear la estructura
- [ ] Hero
- [ ] Grid de 4 industrias con copy
- [ ] CTA a demo
- [ ] SEO

---

## FASE 6 — Pricing (`/precios`)

La página de precios con calculadora.

- [ ] Crear la estructura
- [ ] Manifiesto: "Empieza pequeño. Crece cuando quieras."
- [ ] Mostrar el setup fee de $499 MXN
- [ ] Card del Plan Inicial ($599 sin IA, $759 con IA)
- [ ] Card del Plan Crecimiento ($1,499)
- [ ] Card del Plan Empresa (desde $5,499)
- [ ] Marcar el Plan Crecimiento como "Más popular"
- [ ] Crear la tabla comparativa de features
- [ ] Crear la calculadora de ahorro funcional
- [ ] Inputs: clientes por día, horas por semana, costo por hora
- [ ] Output: ahorro mensual estimado en MXN y horas
- [ ] FAQ de precios
- [ ] CTA final
- [ ] SEO y JSON-LD de tipo Product y SoftwareApplication

---

## FASE 7 — Páginas secundarias

### `/aprende` (Academia)

- [ ] Crear la estructura
- [ ] Hero
- [ ] Texto introductorio
- [ ] Placeholder de guías
- [ ] Placeholder de calculadora (link a /precios)
- [ ] Placeholder de casos reales
- [ ] Placeholder de videos
- [ ] Placeholder de plantillas
- [ ] CTA
- [ ] SEO

### `/nosotros`

- [ ] Crear la estructura
- [ ] Hero con manifiesto
- [ ] Texto de historia
- [ ] Misión
- [ ] Visión
- [ ] Principios
- [ ] Sección de equipo (fotos placeholder + nombres + roles)
- [ ] CTA
- [ ] SEO

### `/contacto`

- [ ] Crear la estructura
- [ ] Hero
- [ ] Formulario con campos: Nombre, Empresa, Correo, ¿Qué quieres automatizar?, Mensaje
- [ ] Validación con Zod y React Hook Form
- [ ] Conectar con Resend para mandar email a hola@charlo.mx
- [ ] Mensaje de éxito
- [ ] Mensaje de error
- [ ] Links a WhatsApp, email y redes
- [ ] SEO

### `/changelog`

- [ ] Crear la estructura
- [ ] Timeline de releases
- [ ] Definir el formato (versión, fecha, título, descripción)
- [ ] Escribir las primeras 3 entradas reales
- [ ] SEO

---

## FASE 8 — Auth mockup

Las páginas de login (sin funcionar de verdad, solo UI).

- [ ] Crear `/login` estilo Stripe
- [ ] Input de email
- [ ] Input de password
- [ ] Botón "Iniciar sesión"
- [ ] Link "¿Olvidaste tu contraseña?" → `/olvide`
- [ ] Link "Crear cuenta" deshabilitado
- [ ] Microcopy: "Bienvenido de nuevo. Accede a tu plataforma Charlo."
- [ ] Crear `/olvide` con link directo a WhatsApp
- [ ] Crear `/proximamente` post-submit
- [ ] Mensaje: "Estamos en beta privada. Te avisaremos cuando tu acceso esté listo."
- [ ] Botón para volver al inicio
- [ ] SEO

---

## FASE 9 — Legal

Las páginas legales y el banner de cookies.

- [ ] Crear `/privacidad`
- [ ] Crear `/terminos`
- [ ] Crear `/cookies`
- [ ] Crear el cookie banner funcional
- [ ] El banner debe permitir aceptar o rechazar
- [ ] La elección debe persistir
- [ ] Link a la página de cookies desde el banner
- [ ] Links a las 3 páginas desde el footer

---

## FASE 10 — SEO global

Configurar todo lo necesario para que Google encuentre el sitio.

- [ ] Crear sitemap.xml dinámico
- [ ] Crear robots.txt
- [ ] Definir canonical en cada página
- [ ] Agregar OpenGraph en cada página
- [ ] Agregar Twitter cards en cada página
- [ ] Agregar JSON-LD de Organization en todas las páginas
- [ ] Agregar JSON-LD de Product en las páginas de producto
- [ ] Agregar JSON-LD de FAQPage donde haya FAQ
- [ ] Agregar JSON-LD de BreadcrumbList automático
- [ ] Agregar JSON-LD de SoftwareApplication en /precios
- [ ] Verificar el sitemap con curl
- [ ] Validar el schema en Google Rich Results

---

## FASE 11 — Performance

Hacer que el sitio vuele.

- [ ] Optimizar todas las imágenes a AVIF y WebP
- [ ] Cargar las imágenes con next/image
- [ ] Hacer subset de la tipografía (solo caracteres necesarios)
- [ ] Activar prefetch en links internos
- [ ] Activar compresión
- [ ] Configurar headers de cache
- [ ] Lazy load de imágenes fuera de pantalla
- [ ] Lazy load de componentes pesados
- [ ] Verificar Lighthouse 100/100/100/100/100
- [ ] Verificar LCP menor a 1.5s
- [ ] Verificar CLS menor a 0.05
- [ ] Verificar INP menor a 200ms

---

## FASE 12 — Analytics

Medir todo lo que pasa en el sitio.

- [ ] Instalar Vercel Analytics
- [ ] Configurar GA4 (con ID placeholder por ahora)
- [ ] Configurar Microsoft Clarity (con ID placeholder por ahora)
- [ ] Definir los eventos a trackear
- [ ] Evento: click en WhatsApp
- [ ] Evento: abrir modal de demo
- [ ] Evento: enviar form de demo
- [ ] Evento: ver plan de precios
- [ ] Evento: usar calculadora
- [ ] Evento: enviar form de contacto
- [ ] Verificar que los eventos lleguen en tiempo real

---

## FASE 13 — Testing

Probar el sitio en todos los dispositivos y navegadores.

- [ ] Probar en Chrome desktop
- [ ] Probar en Firefox desktop
- [ ] Probar en Safari desktop
- [ ] Probar en Edge desktop
- [ ] Probar en iPad
- [ ] Probar en Android tablet
- [ ] Probar en iPhone
- [ ] Probar en Android móvil
- [ ] Probar con VoiceOver (lector de pantalla Mac)
- [ ] Probar con NVDA (lector de pantalla Windows)
- [ ] Probar con prefers-reduced-motion activado
- [ ] Probar con modo claro y oscuro
- [ ] Probar navegación con teclado
- [ ] Hacer checklist firmado

---

## FASE 14 — Lanzamiento

Poner el sitio en vivo.

- [ ] Configurar charlo.mx en Cloudflare
- [ ] Apuntar DNS a Vercel
- [ ] Activar SSL
- [ ] Configurar email con Resend
- [ ] Verificar dominio en Resend
- [ ] Configurar monitoring (Vercel)
- [ ] Configurar backups (deployments de Vercel)
- [ ] Crear página 404 custom
- [ ] Configurar redirects necesarios
- [ ] Hacer deploy a producción
- [ ] Verificar que `https://charlo.mx` abra correctamente
- [ ] Verificar HTTPS
- [ ] Verificar que todos los forms funcionen
- [ ] Verificar que el modal de WhatsApp funcione
- [ ] Verificar que el modo oscuro funcione
- [ ] Verificar analytics funcionando

---

## FASE 15 — Optimización continua

Mejorar el sitio después del lanzamiento.

- [ ] Configurar A/B testing del hero
- [ ] Configurar heatmaps con Microsoft Clarity
- [ ] Definir embudos de conversión
- [ ] Medir CTR de cada CTA
- [ ] Medir tiempo en página
- [ ] Medir tasa de conversión a WhatsApp
- [ ] Medir bounce rate
- [ ] Crear dashboard de KPIs
- [ ] Iterar copy según resultados
- [ ] Iterar diseño según heatmaps

---

## Copy final de referencia

Aquí está el copy aprobado para usar en el sitio.

### Hero (Home)

- Eyebrow: "Para PYMES de 2 a 50 empleados"
- H1: "La inteligencia artificial, hecha simple."
- Sub: "Charlo automatiza tu atención, cobranza y agenda para que recuperes tiempo y hagas crecer tu negocio — sin procesos complicados."
- CTA primario: "Solicitar demostración"
- CTA secundario: "Conocer la plataforma"
- Microcopy: "✔ Sin conocimientos técnicos. ✔ Implementación rápida. ✔ Diseñado para PYMES."

### Problemas (Home)

- Título: "Tu empresa tiene mejores cosas que hacer."
- Subtítulo: "Sabemos cómo se siente dirigir una empresa."
- Items:
  - Tarda demasiado en responder mensajes y pierdes clientes.
  - Persigues cobros uno por uno en vez de hacer crecer tu empresa.
  - Se te olvidan citas y dañas tu reputación.
  - Todo depende de ti. Si no estás, nada funciona.
  - Usas 10 herramientas distintas que no se hablan entre sí.

### Plataforma y Soluciones (Home)

- Título: "Una plataforma. Todas las soluciones que necesitas."
- Sub: "Charlo reúne herramientas inteligentes en un solo lugar. Empieza con lo que necesitas hoy y agrega nuevas soluciones cuando tu negocio crezca."
- Cards:
  - Charlo Atención: "Nunca dejes a un cliente esperando. Responde preguntas frecuentes y atiende solicitudes automáticamente 24/7."
  - Charlo Cobranza: "Haz que tu cobranza trabaje por ti. Automatiza recordatorios y seguimientos sin perseguir a tus clientes."
  - Charlo Agenda: "Organiza tus citas sin esfuerzo. Permite que tus clientes agenden, confirmen y gestionen citas automáticamente."

### Cómo funciona (Home)

- Título: "Empieza en tres pasos."
- 1. "Cuéntanos sobre tu empresa. Agenda una demostración. Entendemos tus necesidades y encontramos la solución adecuada."
- 2. "Configuramos Charlo. Nosotros adaptamos la plataforma a tus procesos."
- 3. "Empieza a automatizar. Tu empresa comienza a ahorrar tiempo desde el primer día."

### Casos de uso (Home)

- Título: "Soluciones para negocios reales."
- Cards: Clínicas y Consultorios · Escuelas y Academias · Comercios y Restaurantes · Despachos y Servicios Profesionales

### CTA final (Home)

- Título: "Deja de hacer lo que la tecnología puede hacer por ti."
- Sub: "Solicita una demostración y descubre cómo Charlo se adapta a tu negocio en minutos."

### Microcopy de producto

- Login: "Bienvenido de nuevo. Accede a tu plataforma Charlo."
- Dashboard vacío: "Tu espacio de trabajo está listo. Comienza agregando información para ver cómo Charlo puede ayudarte."
- Loading: "Preparando todo para ti..."
- Éxito: "Listo. Tu automatización está funcionando."
- Error: "Algo salió mal. Intenta nuevamente."

### /nosotros

- H1: "Construimos tecnología para empresas que quieren avanzar."
- Texto: "Durante años, la tecnología avanzada estuvo reservada para grandes empresas. Charlo nace para cambiar eso. Creemos que cualquier negocio debería poder acceder a herramientas inteligentes sin importar su tamaño o experiencia tecnológica."

### /contacto

- H1: "Hablemos sobre tu empresa."
- Sub: "Cuéntanos qué procesos quieres mejorar y encontremos juntos la mejor solución."

### /aprende

- H1: "Aprende cómo la tecnología puede ayudarte."
- Texto: "La inteligencia artificial no tiene que ser complicada. Aprende cómo empresas como la tuya pueden utilizar nuevas herramientas para ahorrar tiempo y mejorar procesos."

### Footer

- "Charlo simplifica la inteligencia artificial para que las pequeñas y medianas empresas puedan crecer con tecnología accesible."

---

## Datos de configuración (placeholders)

Cambiar cuando se tengan los reales.

- WhatsApp: `+52 55 0000 0000`
- Email: `hola@charlo.mx`
- Mensaje WhatsApp demo: "Hola, quiero solicitar una demostración de Charlo para mi empresa."

---

## Precios confirmados

- **Setup fee:** $499 MXN (pago único)
- **Plan Inicial:** $599 MXN/mes sin IA · $759 MXN/mes con IA
- **Plan Crecimiento:** $1,499 MXN/mes
- **Plan Empresa:** desde $5,499 MXN/mes

---

## Lo que falta por confirmar

- Logo y manual de marca (subir a `/assets/brand/`)
- Paleta exacta (o aprobar la propuesta)
- Número de WhatsApp real
- Email de contacto real
- Nombres y roles del equipo (para /nosotros)
- Testimonios reales
- Entradas de changelog
- IDs de GA4 y Microsoft Clarity
