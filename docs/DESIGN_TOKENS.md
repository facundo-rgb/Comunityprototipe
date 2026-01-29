# Guía de Design Tokens - Learning Heroes Community

Este documento describe el sistema de tokens de diseño para el prototipo de la comunidad.

## Arquitectura de Tokens

Los tokens están organizados en dos niveles:

1. **Tokens Base** - Variables CSS en `:root` (valores primitivos)
2. **Tokens Semánticos** - Variables que referencian tokens base con significado contextual

```
┌─────────────────────────────────────────────────────────────┐
│                    TOKENS SEMÁNTICOS                        │
│  --community-bg-primary, --community-text-muted, etc.       │
├─────────────────────────────────────────────────────────────┤
│                    TOKENS BASE                              │
│  Colores hex/oklch, espaciados, radios, fuentes             │
└─────────────────────────────────────────────────────────────┘
```

## Paleta de Colores de la Comunidad

### Fondos (Backgrounds)

| Token | Valor | Uso | Ejemplo |
|-------|-------|-----|---------|
| `--community-bg-primary` | `#182831` | Fondo principal de la app | Body, contenedores principales |
| `--community-bg-secondary` | `#1c303b` | Fondo de secciones | Paneles, sidebars |
| `--community-bg-tertiary` | `#142129` | Fondo de inputs, campos | Search fields, text areas |
| `--community-bg-card` | `#243f4c` | Fondo de cards y publicador | Post composer, cards |

### Bordes

| Token | Valor | Uso |
|-------|-------|-----|
| `--community-border-default` | `#243f4c` | Bordes estándar |
| `--community-border-accent` | `#2a5266` | Bordes con énfasis |

### Texto

| Token | Valor | Uso |
|-------|-------|-----|
| `--community-text-primary` | `#ffffff` | Texto principal |
| `--community-text-secondary` | `#cfd9de` | Texto secundario |
| `--community-text-muted` | `#a7c1cd` | Texto apagado, placeholders |

### Acentos

| Token | Valor | Uso |
|-------|-------|-----|
| `--community-accent-green` | `#7ee2b8` | Indicadores de progreso, éxito |
| `--community-accent-green-bg` | `#1f845a` | Fondo de badges verdes |
| `--community-accent-teal` | `#0C9494` | Acentos teal |
| `--community-accent-blue` | `#579dff` | Links, elementos interactivos |

## Mapeo de Colores Hardcodeados

Si encuentras estos colores hardcodeados en el código, reemplázalos por los tokens correspondientes:

| Color Hardcodeado | Token a Usar | Clase Tailwind |
|-------------------|--------------|----------------|
| `#182831` | `--community-bg-primary` | `bg-community-primary` |
| `#1c303b` | `--community-bg-secondary` | `bg-community-secondary` |
| `#142129` | `--community-bg-tertiary` | `bg-community-tertiary` |
| `#243f4c` | `--community-bg-card` o `--community-border-default` | `bg-community-card` o `border-community-default` |
| `#2a5266` | `--community-border-accent` | `border-community-accent` |
| `#ffffff` | `--community-text-primary` | `text-community-primary` |
| `#cfd9de` | `--community-text-secondary` | `text-community-secondary` |
| `#a7c1cd` | `--community-text-muted` | `text-community-muted` |
| `#7ee2b8` | `--community-accent-green` | `text-community-accent-green` |
| `#1f845a` | `--community-accent-green-bg` | `bg-community-accent-green` |
| `#579dff` | `--community-accent-blue` | `text-community-accent-blue` |
| `#0C9494` | `--community-accent-teal` | `text-community-accent-teal` |

## Tipografía

### Familias de Fuentes

| Token | Valor | Uso |
|-------|-------|-----|
| `--font-primary` | `'Monument Grotesk', sans-serif` | Headings, labels, botones |
| `--font-secondary` | `'Figtree', sans-serif` | Body text, párrafos |

### Pesos

| Token | Valor | Uso |
|-------|-------|-----|
| `--font-weight-normal` | `400` | Texto regular |
| `--font-weight-medium` | `500` | Énfasis medio |
| `--font-weight-bold` | `700` | Énfasis fuerte |

### Tamaños

Usar las clases de Tailwind estándar:
- `text-xs` (12px)
- `text-sm` (14px)
- `text-base` (16px)
- `text-lg` (18px)
- `text-xl` (20px)
- `text-2xl` (24px)

## Border Radius

| Token | Valor | Uso |
|-------|-------|-----|
| `--radius` | `0.625rem` (10px) | Base radius |
| `--radius-sm` | `calc(--radius - 4px)` | Elementos pequeños |
| `--radius-md` | `calc(--radius - 2px)` | Elementos medianos |
| `--radius-lg` | `--radius` | Elementos grandes |
| `--radius-xl` | `calc(--radius + 4px)` | Cards, modales |
| `--radius-full` | `9999px` | Botones pill, avatares |

### Valores específicos de la comunidad

| Uso | Valor |
|-----|-------|
| Cards de post | `16px` |
| Botones | `8px` |
| Tags | `4px` |
| Avatares | `100%` (circular) |
| Botones pill | `96px` |

## Espaciado

Usar la escala de Tailwind estándar:

| Clase | Valor |
|-------|-------|
| `gap-1` | 4px |
| `gap-2` | 8px |
| `gap-3` | 12px |
| `gap-4` | 16px |
| `gap-6` | 24px |
| `gap-8` | 32px |
| `gap-10` | 40px |

### Espaciados específicos del diseño

| Uso | Valor | Clase |
|-----|-------|-------|
| Gap entre secciones principales | 40px | `gap-[40px]` |
| Gap en sidebar | 24px | `gap-[24px]` |
| Padding de cards | 16px | `p-4` |
| Padding de botones | 8px vertical, 24px horizontal | `py-2 px-6` |
| Margen del contenedor principal | 10vw | `mx-[10vw]` |

## Sombras

| Uso | Valor |
|-----|-------|
| Cards elevadas | `shadow-lg` |
| Modales | `shadow-2xl` |
| Botones hover | `shadow-lg` |

## Implementación en CSS

### Archivo: `src/styles/theme.css`

```css
:root {
  /* === COMMUNITY TOKENS === */
  
  /* Backgrounds */
  --community-bg-primary: #182831;
  --community-bg-secondary: #1c303b;
  --community-bg-tertiary: #142129;
  --community-bg-card: #243f4c;
  
  /* Borders */
  --community-border-default: #243f4c;
  --community-border-accent: #2a5266;
  
  /* Text */
  --community-text-primary: #ffffff;
  --community-text-secondary: #cfd9de;
  --community-text-muted: #a7c1cd;
  
  /* Accents */
  --community-accent-green: #7ee2b8;
  --community-accent-green-bg: #1f845a;
  --community-accent-teal: #0C9494;
  --community-accent-blue: #579dff;
  
  /* Typography */
  --font-primary: 'Monument Grotesk', sans-serif;
  --font-secondary: 'Figtree', sans-serif;
}

/* Tailwind theme mapping */
@theme inline {
  --color-community-bg-primary: var(--community-bg-primary);
  --color-community-bg-secondary: var(--community-bg-secondary);
  --color-community-bg-tertiary: var(--community-bg-tertiary);
  --color-community-bg-card: var(--community-bg-card);
  --color-community-border-default: var(--community-border-default);
  --color-community-border-accent: var(--community-border-accent);
  --color-community-text-primary: var(--community-text-primary);
  --color-community-text-secondary: var(--community-text-secondary);
  --color-community-text-muted: var(--community-text-muted);
  --color-community-accent-green: var(--community-accent-green);
  --color-community-accent-green-bg: var(--community-accent-green-bg);
  --color-community-accent-teal: var(--community-accent-teal);
  --color-community-accent-blue: var(--community-accent-blue);
}
```

## Uso en Componentes

### Con Tailwind CSS (Recomendado)

```tsx
// Fondo
<div className="bg-community-bg-primary">

// Texto
<p className="text-community-text-muted">

// Bordes
<div className="border border-community-border-default">

// Combinaciones
<button className="bg-community-accent-green text-community-bg-primary">
```

### Con CSS Variables (Inline styles)

```tsx
<div style={{ background: 'var(--community-bg-primary)' }}>
```

### Con la utilidad cn()

```tsx
import { cn } from "@/app/components/ui/utils";

<div className={cn(
  "bg-community-bg-secondary rounded-lg p-4",
  isActive && "border-2 border-community-accent-green"
)} />
```

## Checklist de Migración

Cuando refactorices un componente, verifica:

- [ ] Reemplazar colores hex por tokens
- [ ] Usar clases de Tailwind en lugar de estilos inline
- [ ] Verificar que el componente se ve igual antes y después
- [ ] Probar en modo hover/focus/active

## Referencia Visual

### Jerarquía de Fondos

```
┌─────────────────────────────────────────────────┐
│  bg-primary (#182831) - Fondo de página         │
│  ┌─────────────────────────────────────────┐    │
│  │  bg-secondary (#1c303b) - Panel lateral │    │
│  │  ┌─────────────────────────────────┐    │    │
│  │  │  bg-card (#243f4c) - Card       │    │    │
│  │  │  ┌─────────────────────────┐    │    │    │
│  │  │  │ bg-tertiary - Input     │    │    │    │
│  │  │  └─────────────────────────┘    │    │    │
│  │  └─────────────────────────────────┘    │    │
│  └─────────────────────────────────────────┘    │
└─────────────────────────────────────────────────┘
```

### Jerarquía de Texto

```
text-primary (#ffffff)    → Títulos, contenido principal
text-secondary (#cfd9de)  → Subtítulos, metadata
text-muted (#a7c1cd)      → Placeholders, hints, labels
```
