# Brand Assets — Charlo

Esta carpeta contiene los assets de marca de Charlo.

## Archivos esperados

```
/assets/brand/
  logo.svg              # Logo completo (wordmark + mark)
  logo-mark.svg         # Solo el isotipo (sin texto)
  logo-wordmark.svg     # Solo el wordmark (sin icono)
  logo-dark.svg         # Logo para fondos oscuros
  manual.pdf            # Manual de marca (opcional)
  paleta.png            # Captura de la paleta (opcional)
```

## Cuándo subirlos

- **Antes de FASE 14 (Lanzamiento)** son obligatorios
- **Recomendado:** subirlos antes de FASE 4 (Home) para que el logo se vea real

## Cómo se usan

El componente `components/logo.tsx` lee desde esta carpeta automáticamente.

Si subes los archivos con esos nombres exactos, el sitio los usa sin tocar código.
Si no existen, se usa un placeholder con wordmark "Charlo" en tipografía Geist.

## Paleta actual (propuesta)

- **Primary (turquesa):** `#06b6d4` (oklch `0.6 0.13 195`)
- **Accent (azul cielo):** `#38bdf8` (oklch `0.7 0.13 220`)
- **Background:** `#ffffff` (light) · `#0a0a0a` (dark)
- **Foreground:** `#0a0a0a` (light) · `#fafafa` (dark)

Si tu manual usa otros hex, los reemplazo en `app/globals.css` y reinicio el deploy.

## Tipografía

- **Geist Sans** — UI y cuerpo
- **Geist Mono** — código y acentos técnicos

Si tu manual usa otra tipografía, me avisas y la cambio.
