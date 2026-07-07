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

- [x] Subir el logo y el manual a `/public/brand/`
- [x] Crear el componente `<Logo />` con sus variantes
- [x] Definir la paleta de colores en CSS variables
- [x] Aprobar la paleta (azul marino + azul oscuro extraídos del logo real)
- [x] Cargar la tipografía Geist vía next/font
- [x] Crear el favicon
- [x] Crear el apple-icon
- [x] Crear el manifest.json
- [x] Crear la imagen OpenGraph dinámica
- [x] Crear la imagen Twitter dinámica
- [ ] Verificar que la imagen OG se vea bien al compartir en redes

**Estado:** Completado. Logo real integrado. Paleta real aplicada (azul marino + azul oscuro).

**Colores extraídos del logo oficial:**

- Primary (azul marino): #0030F0
- Accent (azul oscuro): #103050
- Background: #FFFFFF / #0A0A0A (dark)

---

## FASE 2 — UI Kit

Crear todos los componentes visuales que se van a reutilizar.

- [x] Instalar los componentes base de shadcn/ui (26 instalados)
- [x] Botón (con variantes: primario, secundario, fantasma, con icono)
- [x] Input de texto
- [x] Textarea
- [x] Select
- [x] Checkbox y Radio
- [x] Card
- [x] Badge
- [x] Dialog (modal)
- [x] Dropdown menu
- [x] Tabs
- [x] Accordion (para FAQ)
- [x] Tooltip
- [x] Toast (notificaciones vía Sonner)
- [x] Sheet (menú lateral móvil)
- [x] Navigation menu
- [x] Avatar
- [x] Separator
- [x] Skeleton (para loading)
- [x] Switch (para modo claro/oscuro)
- [x] Slider
- [x] Form (wrapper con validación)
- [x] Label
- [x] Progress
- [x] ScrollArea
- [x] Section wrapper (envoltorio de sección)
- [x] Section heading (título + subtítulo estandarizado)
- [x] Container (ancho máximo)
- [x] Bento grid (grid moderno)
- [x] Marquee (logos animados)
- [x] CTA banner (bloque grande de llamado a la acción)
- [x] Verificar que todos se vean bien en modo claro (vía /ui-kit)
- [x] Verificar que todos se vean bien en modo oscuro (vía toggle en /ui-kit)

**Estado:** Completado. Showcase en `/ui-kit` con todos los componentes.

**Primitivas custom de Charlo (`components/shared/`):**

- `container.tsx` — wrapper de ancho máximo responsive
- `section-wrapper.tsx` — sección con padding vertical y tono
- `section-heading.tsx` — eyebrow + título + subtítulo estandarizado
- `bento-grid.tsx` + `bento-card.tsx` — grid moderno asimétrico
- `marquee.tsx` — scroll horizontal infinito
- `cta-banner.tsx` — bloque de CTA grande
- `theme-toggle.tsx` — botón de modo claro/oscuro
- `whatsapp-button.tsx` — botón flotante de WhatsApp

---

## FASE 3 — Layout global

Las partes que se ven en todas las páginas.

- [x] Crear el Navbar con el mega menú
- [x] Crear el menú móvil (Sheet)
- [x] Crear el Footer con 4 columnas
- [x] Crear el Theme Toggle (botón modo claro/oscuro)
- [x] Crear el botón flotante de WhatsApp
- [x] Crear el modal global de "Solicitar demostración"
- [x] Crear el formulario mini dentro del modal
- [x] Conectar el modal con WhatsApp pre-llenado
- [x] Crear el cookie banner
- [x] Activar Lenis para scroll suave
- [ ] Crear las animaciones de transición entre páginas _(pendiente: se hará cuando haya más páginas)_
- [x] Crear el scroll progress indicator
- [x] Crear el skip link (para accesibilidad)
- [x] Crear el breadcrumb
- [x] Verificar que la navegación funcione en desktop
- [x] Verificar que la navegación funcione en móvil
- [x] Verificar que la navegación funcione con teclado
- [x] Verificar que respete prefers-reduced-motion (Lenis respeta automáticamente)

**Estado:** Layout global completo. Falta solo el page transition (no prioritario hasta tener más páginas).

**Componentes creados (`components/layout/`):**

- `navbar.tsx` — sticky con backdrop blur, mega menu, theme toggle, login + demo CTAs
- `footer.tsx` — 4 columnas + social icons + copyright
- `skip-link.tsx` — salta al contenido principal
- `scroll-progress.tsx` — barra superior con Framer Motion
- `cookie-banner.tsx` — banner inferior con localStorage
- `breadcrumb.tsx` — reusable con icono home + chevrons

**Componentes creados (`components/forms/`):**

- `demo-modal.tsx` — provider global con context API
- `demo-form.tsx` — React Hook Form + Zod + WhatsApp redirect

**Componentes creados (`components/motion/`):**

- `lenis-provider.tsx` — smooth scroll con respeto a prefers-reduced-motion

**Estructura de rutas:**

- `app/(marketing)/` — grupo con layout completo (navbar + footer + modal + cookies)
- `app/ui-kit/` — sin marketing chrome (dev only)

---

## FASE 4 — Home (`/`)

La página principal. La más importante.

- [x] Crear la estructura de la página
- [x] Sección Hero con título, subtítulo y CTAs
- [x] Microcopy de confianza debajo de los CTAs del hero
- [x] Sección de Problemas
- [x] Sección de Plataforma y Soluciones (con 3 cards)
- [x] Sección de Beneficios (bento)
- [x] Sección de Cómo funciona (3 pasos)
- [x] Sección de Casos de uso (4 industrias)
- [x] Sección de Testimonios (carrusel)
- [x] Sección de FAQ (accordion)
- [x] Sección de CTA final
- [x] Agregar animaciones de entrada en cada sección
- [x] Agregar SEO: title, description, canonical
- [x] Agregar OpenGraph y Twitter cards
- [x] Agregar JSON-LD de tipo Organization
- [x] Agregar JSON-LD de tipo FAQPage
- [x] Agregar JSON-LD de tipo SoftwareApplication (extra)
- [ ] Verificar que el Lighthouse mobile sea mayor a 95 _(pendiente: ejecutar Lighthouse en deploy)_
- [ ] Verificar que el LCP sea menor a 1.5s _(pendiente: ejecutar Lighthouse en deploy)_

**Estado:** Completado. Las 9 secciones viven en `components/sections/home/`.

**Secciones (en orden):**

1. `hero-section.tsx` — eyebrow + H1 con highlight + sub + 2 CTAs + trust
2. `problems-section.tsx` — 5 problemas con iconos en tono destructive
3. `platform-solutions-section.tsx` — 3 cards linked a /atencion, /cobranza, /agenda
4. `benefits-section.tsx` — bento de 6 cards con mixed spans
5. `how-it-works-section.tsx` — 3 pasos con números 01/02/03 grandes
6. `use-cases-section.tsx` — 4 industrias (Clínicas, Escuelas, Restaurantes, Despachos)
7. `testimonials-section.tsx` — Embla carousel con 4 testimonios y dots
8. `faq-section.tsx` — 8 preguntas en accordion (id=faq)
9. `final-cta-section.tsx` — full-width primary con gradiente

**Animaciones:** Framer Motion con `FadeInUp`, `StaggerContainer`, `StaggerItem`. Respeta `prefers-reduced-motion`.

**SEO:** 3 JSON-LD (Organization + FAQPage + SoftwareApplication), generateMetadata con canonical.

---

## FASE 5 — Productos

Las páginas de cada producto con su demo interactiva.

### `/plataforma` (overview del ecosistema)

- [x] Crear la estructura
- [x] Hero con título y subtítulo
- [x] Sección: Qué es Charlo Platform (incluida en el hero)
- [x] Sección: Dashboard
- [x] Sección: Centro de Control
- [x] Sección: Usuarios
- [x] Sección: IA
- [x] Sección: Escalabilidad
- [x] Sección: Seguridad
- [x] Sección: Integraciones
- [x] CTA final
- [x] SEO y JSON-LD

### `/atencion` (Charlo Atención)

- [x] Crear la estructura
- [x] Hero
- [x] Problema específico
- [x] Cómo funciona (integrado en demo + features)
- [x] Demo interactiva del agente (mockup navegable)
- [x] Características
- [x] Beneficios
- [x] Casos
- [x] FAQ
- [x] CTA
- [x] SEO y JSON-LD

### `/cobranza` (Charlo Cobranza)

- [x] Crear la estructura
- [x] Hero
- [x] Problema específico
- [x] Cómo funciona (integrado en demo + features)
- [x] Demo interactiva del flujo de cobros
- [x] Características
- [x] Beneficios
- [x] Casos
- [x] FAQ
- [x] CTA
- [x] SEO y JSON-LD

### `/agenda` (Charlo Agenda)

- [x] Crear la estructura
- [x] Hero
- [x] Problema específico
- [x] Cómo funciona (integrado en demo + features)
- [x] Demo interactiva de la agenda
- [x] Características
- [x] Beneficios
- [x] Casos
- [x] FAQ
- [x] CTA
- [x] SEO y JSON-LD

### `/empresas` (industrias genérico)

- [x] Crear la estructura
- [x] Hero
- [x] Grid de 10 industrias con copy (ampliado de 4)
- [x] CTA a demo
- [x] SEO

**Estado:** Completado. 5 páginas de producto publicadas con 3 demos interactivas.

**Páginas creadas:**

- `/plataforma` — 8 secciones bento (Layers, Dashboard, Centro de Control, Usuarios, IA, Escalabilidad, Seguridad, Integraciones)
- `/atencion` — con chat interactivo (responde con pre-canned answers, typing indicator, quick replies)
- `/cobranza` — con lista de pagos interactiva (filtros, recordatorios, marcar pagado)
- `/agenda` — con calendario semanal interactivo (click slot vacío = agregar cita, colores por servicio)
- `/empresas` — grid de 10 industrias (Clínicas, Restaurantes, Escuelas, Despachos, Gimnasios, Tiendas, Estéticas, Constructoras, Hoteles, Salud)

**Mockups interactivos (`components/product/mockups/`):**

- `atencion-mockup.tsx` — WhatsApp-style chat con quick replies + typing indicator + auto-scroll
- `cobranza-mockup.tsx` — Payment list con filtros + acciones + toasts
- `agenda-mockup.tsx` — Calendar grid con click-to-add + week navigation

**Componentes reutilizables (`components/sections/product/`):**

- `product-hero`, `product-problem`, `product-demo`, `product-features`, `product-benefits`, `product-cases`, `product-faq`, `product-cta`

**SEO:** 5 páginas con generateMetadata + JSON-LD (3× Product, 2× WebPage)

---

## FASE 6 — Pricing (`/precios`)

La página de precios con calculadora.

- [x] Crear la estructura
- [x] Manifiesto: "Empieza pequeño. Crece cuando quieras."
- [x] Mostrar el setup fee de $499 MXN
- [x] Card del Plan Inicial ($599/mes)
- [x] Card del Plan Crecimiento ($1,499/mes)
- [x] Card del Plan Empresa (desde $5,499/mes)
- [x] Marcar el Plan Crecimiento como "Más popular"
- [x] Crear la tabla comparativa de features
- [x] Crear la calculadora de ahorro funcional
- [x] Inputs: clientes por día, horas por semana, costo por hora
- [x] Output: ahorro mensual estimado en MXN y horas
- [x] FAQ de precios
- [x] CTA final
- [x] SEO y JSON-LD de tipo Product y SoftwareApplication

**Estado:** Completado. /precios con planes, comparador y calculadora funcional.

**Pricing visual:**

- Setup $499 MXN (único) destacado arriba
- 3 cards en grid: Inicial $599, Crecimiento $1,499 (highlighted), Empresa desde $5,499
- Crecimiento con scale-105, border-primary, badge "Más popular"

**Calculadora (`savings-calculator.tsx`):**

- 60% tasa de automatización (conservadora)
- Calcula horas recuperadas/mes = horas/semana × 4 × 0.6
- Calcula dinero ahorrado/mes = horas × costo/hora
- Muestra ROI por plan (dinero/costo)
- Marca plan recomendado: ≤8h Inicial, ≤25h Crecimiento, >25h Empresa
- Botón CTA: abre demo modal

**Comparador (`pricing-comparator.tsx`):**

- Tabla con 17 features
- Headers sticky con badges
- Plan Crecimiento con columna highlighted
- Resalta rows importantes con bg-muted

**SEO:** generateMetadata + JSON-LD (SoftwareApplication con 3 offers, Product con AggregateOffer)

---

## FASE 7 — Páginas secundarias

### `/aprende` (Academia)

- [x] Crear la estructura
- [x] Hero
- [x] Texto introductorio
- [x] Placeholder de guías
- [x] Placeholder de calculadora (link a /precios)
- [x] Placeholder de casos reales
- [x] Placeholder de videos
- [x] Placeholder de plantillas
- [x] CTA
- [x] SEO

### `/nosotros`

- [x] Crear la estructura
- [x] Hero con manifiesto
- [x] Texto de historia
- [x] Misión
- [x] Visión
- [x] Principios (4)
- [x] Sección de equipo (4 miembros con avatares de iniciales)
- [x] CTA
- [x] SEO + JSON-LD AboutPage

### `/contacto`

- [x] Crear la estructura
- [x] Hero
- [x] Formulario con campos: Nombre, Empresa, Correo, ¿Qué quieres automatizar?, Mensaje
- [x] Validación con Zod
- [x] Server action con Resend para hola@charlo.mx
- [x] Mensaje de éxito (Alert verde)
- [x] Mensaje de error (Alert rojo)
- [x] Links a WhatsApp, email y redes
- [x] SEO

### `/changelog`

- [x] Crear la estructura
- [x] Timeline de releases
- [x] Formato definido: versión + fecha + título + descripción + cambios categorizados
- [x] 3 entradas reales (v0.4.0, v0.3.0, v0.2.0)
- [x] SEO

**Estado:** Completado. 4 páginas secundarias publicadas.

**Páginas creadas:**

- `/aprende` — 6 cards (guías, calculadora con link, casos, videos, plantillas, academia). 5 marcadas "Próximamente"
- `/nosotros` — Story + Misión + Visión + 4 Principios + Equipo (4 personas) + CTA
- `/contacto` — Form con server action Resend. Si `RESEND_API_KEY` no está configurado, hace fallback a success sin enviar (para desarrollo). Cuando se configure, envía a `hola@charlo.mx`
- `/changelog` — 3 releases reales del proyecto (v0.4.0 sitio público, v0.3.0 sistema de diseño, v0.2.0 branding)

**Componentes nuevos:**

- `components/ui/alert.tsx` — shadcn Alert (success/error)
- `app/(marketing)/contacto/actions.ts` — server action con Resend + Zod
- `app/(marketing)/contacto/contact-form.tsx` — form con useActionState

**Importante sobre Resend:**

- `RESEND_API_KEY` está vacío en `.env.local` por ahora
- El código cae en fallback gracioso: muestra success sin enviar email
- Cuando se agregue el key en Vercel, los envíos funcionan automáticamente
- Para configurar: Vercel dashboard → Settings → Environment Variables → agregar `RESEND_API_KEY`

---

## FASE 8 — Auth mockup

Las páginas de login (sin funcionar de verdad, solo UI).

- [x] Crear `/login` estilo Stripe
- [x] Input de email (con icono Mail)
- [x] Input de password (con icono Lock + toggle show/hide)
- [x] Botón "Iniciar sesión" (loading state, redirige a /proximamente)
- [x] Link "¿Olvidaste tu contraseña?" → `/olvide`
- [x] Link "Crear cuenta" deshabilitado (con "Próximamente · Beta privada")
- [x] Microcopy: "Bienvenido de nuevo. Accede a tu plataforma Charlo."
- [x] Crear `/olvide` con link directo a WhatsApp
- [x] Crear `/proximamente` post-submit
- [x] Mensaje: "Estamos en beta privada. Te avisaremos cuando tu acceso esté listo."
- [x] Botón para volver al inicio
- [x] SEO (noindex para todas las auth pages)

**Estado:** Completado. Flujo de auth simulado sin backend.

**Estructura `app/(auth)/`:**

- `layout.tsx` — minimal layout (logo + back to home, sin navbar/footer)
- `login/` — Stripe-style form
- `olvide/` — WhatsApp recovery
- `proximamente/` — post-submit page

**Flujo UX:**

1. Usuario entra a `/login`
2. Completa email + password (cualquier valor)
3. Click "Iniciar sesión" → loading 800ms → redirige a `/proximamente`
4. En `/proximamente` ve mensaje de beta privada y vuelve al inicio

**Rutas para probar:**

- https://charlo-web.vercel.app/login
- https://charlo-web.vercel.app/olvide
- https://charlo-web.vercel.app/proximamente

---

## FASE 9 — Legal

Las páginas legales y el banner de cookies.

- [x] Crear `/privacidad`
- [x] Crear `/terminos`
- [x] Crear `/cookies`
- [x] Crear el cookie banner funcional
- [x] El banner debe permitir aceptar o rechazar
- [x] La elección debe persistir
- [x] Link a la página de cookies desde el banner
- [x] Links a las 3 páginas desde el footer

**Estado:** Completado. 3 páginas legales + cookie banner funcional.

**Páginas creadas:**

- `/privacidad` — Aviso de Privacidad (12 secciones) con cumplimiento LFPDPPP. Cubre derechos ARCO, transferencias, opt-out, INAI
- `/terminos` — Términos y Condiciones (14 secciones). Cubre setup, suscripción, cancelaciones, propiedad intelectual, SLA, jurisdicción CDMX
- `/cookies` — Aviso de Cookies (8 secciones). Detalla cookies necesarias, GA4, Clarity, opt-out, consecuencias de rechazar

**Cookie banner (creado en FASE 3):**

- Aparece 1s después del primer load
- Aceptar / Rechazar con localStorage persist (`charlo-cookie-consent`)
- Link a /cookies desde el texto
- X para cerrar (= rechazar)
- Botón close position bottom-right + 4 offset (no choca con WhatsApp)

**Footer:**

- 3 links legales via `footerNav.legal` en `config/nav.ts`
- Columna "Legal" con Privacidad, Términos, Cookies

**Setup adicional:**

- Instalado `@tailwindcss/typography` plugin
- `@plugin "@tailwindcss/typography"` en `globals.css`
- Clase `prose` para tipografía consistente en páginas legales
- Breadcrumb en cada página (Home > Privacidad)

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
