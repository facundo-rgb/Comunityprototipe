# Learning Heroes Community - Prototipo de Alta Fidelidad

Prototipo interactivo de alta fidelidad para la comunidad de Learning Heroes. Diseñado para conducir estudios de usabilidad con usuarios reales.

## Objetivo

Este prototipo simula una comunidad similar a Contra.com o Discord, pero con un layout único de Learning Heroes. Todas las interacciones funcionan como si fuera una aplicación real, aunque los datos son simulados.

## Stack Tecnológico

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| React | 18.3.1 | Framework UI |
| TypeScript | - | Tipado estático |
| Vite | 6.3.5 | Build tool y dev server |
| Tailwind CSS | 4.1.12 | Estilos utility-first |
| Framer Motion | 12.23.24 | Animaciones |
| Radix UI | - | Componentes accesibles |
| shadcn/ui | - | Sistema de componentes |

### Fuentes

- **Monument Grotesk** - Tipografía principal (headings, labels)
- **Figtree** - Tipografía secundaria (body text)

## Instalación

```bash
# Clonar el repositorio
git clone <repo-url>
cd iia

# Instalar dependencias (usando pnpm)
pnpm install

# O con npm
npm install
```

## Desarrollo

```bash
# Iniciar servidor de desarrollo
pnpm dev
# o
npm run dev
```

El servidor se iniciará en `http://localhost:5173`

## Build de Producción

```bash
pnpm build
# o
npm run build
```

Los archivos se generan en la carpeta `dist/`.

## Estructura del Proyecto

```
src/
├── app/
│   ├── App.tsx                    # Componente principal
│   └── components/
│       ├── figma/                 # Utilidades de Figma
│       │   └── ImageWithFallback.tsx
│       ├── ui/                    # Componentes shadcn/ui
│       │   ├── button.tsx
│       │   ├── card.tsx
│       │   ├── dialog.tsx
│       │   └── ... (47 componentes)
│       └── SearchOverlay.tsx      # Modal de búsqueda
│
├── imports/                       # Componentes de la comunidad
│   ├── FeedPrincipal.tsx         # Feed principal (componente grande)
│   ├── Publicar.tsx              # Componente de publicación
│   ├── CanalTagLink.tsx          # Tag de canal
│   ├── CarroucelDeCanalesSugeridos.tsx
│   ├── PanelDeAccionesSugeridas.tsx
│   └── ...
│
├── styles/
│   ├── index.css                 # Importa todos los estilos
│   ├── tailwind.css              # Configuración Tailwind
│   ├── theme.css                 # Tokens de diseño
│   └── fonts.css                 # Fuentes
│
├── assets/                       # Imágenes y recursos
└── main.tsx                      # Entry point
```

## Sistema de Diseño

Los tokens de diseño están definidos en `src/styles/theme.css`. Ver [docs/DESIGN_TOKENS.md](docs/DESIGN_TOKENS.md) para la guía completa.

### Colores Principales de la Comunidad

| Token | Valor | Uso |
|-------|-------|-----|
| `--community-bg-primary` | `#182831` | Fondo principal |
| `--community-bg-secondary` | `#1c303b` | Fondo secundario |
| `--community-bg-card` | `#243f4c` | Fondo de cards |
| `--community-text-muted` | `#a7c1cd` | Texto secundario |
| `--community-accent-green` | `#7ee2b8` | Acentos verdes |

## Funcionalidades del Prototipo

### Implementadas
- [x] Feed de publicaciones
- [x] Navegación entre canales (visual)
- [x] Modal de búsqueda
- [x] Componente de publicar
- [x] Carrusel de canales sugeridos
- [x] Panel de acciones sugeridas

### En Desarrollo
- [ ] Búsqueda funcional con filtros
- [ ] Navegación real entre canales
- [ ] Likes y comentarios interactivos
- [ ] Creación de posts
- [ ] Perfiles de usuario

## Componentes UI Disponibles

El proyecto incluye 47 componentes de shadcn/ui listos para usar:

- Accordion, Alert, Avatar, Badge, Button
- Card, Carousel, Checkbox, Collapsible, Command
- Dialog, Dropdown Menu, Form, Input, Label
- Navigation Menu, Popover, Progress, Radio Group
- Scroll Area, Select, Separator, Sheet, Skeleton
- Slider, Switch, Table, Tabs, Textarea
- Toggle, Tooltip, y más...

## Convenciones de Código

### Nombres de Archivos
- **Componentes**: PascalCase (`PostHeader.tsx`)
- **Hooks**: camelCase con prefijo `use` (`usePosts.ts`)
- **Utilidades**: camelCase (`formatDate.ts`)
- **Estilos**: kebab-case (`theme.css`)

### Estructura de Componentes

```tsx
// Importaciones
import { useState } from "react";
import { motion } from "motion/react";

// Tipos/Interfaces
interface Props {
  title: string;
  isActive?: boolean;
}

// Componente
export default function ComponentName({ title, isActive = false }: Props) {
  // Hooks
  const [state, setState] = useState(false);
  
  // Handlers
  const handleClick = () => { ... };
  
  // Render
  return (
    <div className="...">
      {/* JSX */}
    </div>
  );
}
```

### Estilos

- Usar clases de Tailwind CSS
- Preferir tokens de diseño sobre colores hardcodeados
- Usar `cn()` para combinar clases condicionalmente

```tsx
import { cn } from "@/app/components/ui/utils";

<div className={cn(
  "bg-community-primary text-white",
  isActive && "bg-community-accent"
)} />
```

## Contribución

1. Revisar el [plan de desarrollo](docs/PLAN.md) para tareas pendientes
2. Crear una rama desde `main`
3. Seguir las convenciones de código
4. Hacer PR con descripción clara

## Notas para Estudios de Usabilidad

Este prototipo está diseñado para:

1. **Parecer real** - Las interacciones simulan el comportamiento esperado
2. **Datos consistentes** - Los usuarios y posts fake se mantienen entre pantallas
3. **Flujos completos** - Se puede navegar entre todas las secciones principales
4. **Sin errores visibles** - El prototipo no debe mostrar estados de error durante tests

## Licencia

Proyecto privado de Learning Heroes. Uso exclusivo para investigación y desarrollo.
