# Brand Assets — Charlo

Esta carpeta contiene los archivos de logo que se sirven al sitio.

## Archivos esperados

```
public/brand/
  logo.svg          # Logo completo (wordmark + mark) — para fondo claro
  logo-mark.svg     # Solo el isotipo (sin texto) — favicon ampliado, espacios pequeños
  logo-dark.svg     # Logo para fondo oscuro (wordmark + mark, versión clara)
```

## Cómo subir los logos

Sube los archivos con los nombres exactos de arriba directamente a esta carpeta en GitHub:

1. Abre https://github.com/CharloDevelopment/SitioWebCharlo/tree/dev/public/brand
2. Click en **Add file** → **Upload files**
3. Arrastra los 3 archivos
4. Click en **Commit changes**

## Convenciones

- **Formato:** SVG vectorial preferido. Si tienes PNG, súbelos con el mismo nombre y cambia la extensión.
- **Tamaño del isotipo:** cuadrado, mínimo 64×64, ideal 256×256 o más.
- **Logo completo:** proporción horizontal, alto recomendado 32-48px.
- **Versión dark:** colores invertidos (logo claro para fondo oscuro).

## Fallback

Si los archivos no existen, el componente `<Logo />` muestra un placeholder SVG generado en código con la inicial "C" en el color primario de Charlo.

## Tipografía

- **Geist Sans** (cargada vía next/font) se usa para el wordmark si decides usar texto en vez de imagen.
