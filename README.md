# Charlo — Sitio Web Oficial

Sitio web oficial de Charlo: la inteligencia artificial, hecha simple.

Plataforma de IA para PYMES que automatiza atención, cobranza y agenda.

## Stack

- **Next.js 15** (App Router)
- **TypeScript** (modo estricto)
- **Tailwind CSS v4**
- **shadcn/ui** (componentes)
- **Framer Motion** (animaciones)
- **Lenis** (scroll suave)
- **Geist** (tipografía)
- **Resend** (emails)
- **next-intl** (internacionalización)
- **next-themes** (modo claro/oscuro)

## Requisitos

- **Node.js 24** (usar `.nvmrc` o `nvm use`)
- **pnpm 11+**

## Comandos

```bash
# Instalar dependencias
pnpm install

# Desarrollo (http://localhost:3000)
pnpm dev

# Build de producción
pnpm build

# Servidor de producción
pnpm start

# Lint
pnpm lint

# Lint con auto-fix
pnpm lint:fix

# Typecheck
pnpm typecheck

# Formatear con Prettier
pnpm format

# Verificar formato
pnpm format:check

# Agregar un componente de shadcn/ui
pnpm ui:add button
```

## Estructura

```
app/                # Rutas (App Router)
components/
  ui/               # Componentes de shadcn/ui
  layout/           # Navbar, Footer, etc.
  sections/         # Secciones reutilizables
  product/          # Mockups interactivos
  motion/           # Primitivas de animación
  forms/            # Formularios
  shared/           # Componentes compartidos
lib/
  utils.ts          # Helpers
  content/          # Data estática (copy, FAQs, pricing)
config/             # Configuración del sitio
public/             # Assets públicos
assets/             # Assets de marca (logo, manual)
messages/           # Traducciones i18n
```

## Convención de ramas

- `main` — Producción
- `dev` — Staging
- `feature/*` — Features nuevas
- `fix/*` — Bugfixes

## Convención de commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` — Nueva funcionalidad
- `fix:` — Corrección de bug
- `docs:` — Cambios en documentación
- `style:` — Cambios de estilo (sin lógica)
- `refactor:` — Refactorización
- `perf:` — Mejoras de performance
- `test:` — Tests
- `chore:` — Tareas de mantenimiento

Ejemplo: `feat: add hero section to home page`

## Variables de entorno

Copia `.env.example` a `.env.local` y rellena los valores.

## Deploy

El sitio se despliega automáticamente en Vercel:

- Push a `dev` → preview deploy
- Push a `main` → producción

## Licencia

Privado. © Charlo.
