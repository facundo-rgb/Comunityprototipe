# Notas de Desarrollo: Learning Heroes

Version hecha completamente en figma make el cual logra un diseño pixel perfect pero descuida mucho el funiconamiento y codigo dejandonos resultados sucios que puede traer problemas a largo plazo

Este documento resume las implementaciones clave realizadas en la plataforma "Learning Heroes" para asegurar la consistencia del diseño y la fluidez de la experiencia de usuario.

## 🏗 Layout General
- **Márgenes:** Se ha establecido un margen lateral fijo de `10vw` en el contenedor principal para centrar el contenido en pantallas grandes.
- **Grilla:** El contenido se distribuye en dos columnas con una proporción de **60% (izquierda)** y **40% (derecha)**, separadas por un `gap` exacto de `40px`.
- **Fondo:** El color de fondo base de la aplicación es `#182831`.

## 🧩 Componentes Críticos

### 1. Panel de Acciones Sugeridas (`PanelDeAccionesSugeridas.tsx`)
- **Interactividad:** Se implementó un "botón invisible" o área de impacto optimizada para manejar las transiciones de expansión y colapso sin interrumpir el flujo visual.
- **Indicador Circular:** Utiliza un SVG dinámico para mostrar el progreso de las tareas del usuario.
- **Timeline:** Animada con `motion/react`, permitiendo que los hitos aparezcan secuencialmente.

### 2. Carrusel de Canales Sugeridos (`CarroucelDeCanalesSugeridos.tsx`)
- **Animaciones Asimétricas:** Las tarjetas no entran todas al mismo tiempo; tienen un ligero delay para crear un efecto de "cascada".
- **Navegación:** Controlada por flechas con lógica de scroll suave y gradientes laterales dinámicos para indicar que hay más contenido.
- **Espaciado:** Se mantiene una separación estricta de `16px` entre el título del carrusel y las tarjetas.

### 3. Sistema de Búsqueda (`SearchOverlay.tsx` & `MainContainer.tsx`)
- **Sticky Header:** El campo de búsqueda permanece fijo al hacer scroll. Para evitar que el contenido del feed se vea por "detrás" de los bordes redondeados, se creó un `HeaderContainer` con un fondo protector `#182831` que actúa como máscara.
- **Estilo Original:** Se restauró el fondo `#142129` y el `rounded-[8px]` del campo de texto para coincidir exactamente con el diseño de Figma.
- **Animación del Icono:** Se cambió la transición de `spring` a `tween` (`circOut`) en el botón de búsqueda del feed principal para eliminar el rebote (bounce) que causaba inestabilidad visual en el hover.

### 4. Componente de Publicación (`Publicar.tsx`)
- **Estados:** Maneja estados `default` y `active`. El estado activo expande el área de texto y muestra las opciones de carga multimedia.
- **Galería:** Incluye un modal overlay con transiciones fluidas para la previsualización y selección de archivos.


*Última actualización: Miércoles, 28 de enero de 2026*
