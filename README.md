# Portfolio

Mi web personal: una sola página con quién soy, en qué proyectos he trabajado y cómo contactar conmigo. Está hecha con React 19 y Vite, sin más dependencias, y se publica en GitHub Pages.

## Secciones

| Sección | Componente | Contenido |
|---|---|---|
| Inicio | `Hero.jsx` | Presentación. |
| Sobre mí | `About.jsx` | Estudios e intereses: desarrollo backend y ciberseguridad. |
| Proyectos | `Projects.jsx`, `ProjectCard.jsx`, `ProjectModal.jsx` | Tarjetas de proyectos: TimePill, una implementación de PBFT, una API blockchain con ASP.NET Core y APIs RESTful. Algunas abren una ventana con más detalle y un vídeo de YouTube. |
| Habilidades | `Skills.jsx` | Tecnologías que uso. |
| Trayectoria | `Timeline.jsx` | Línea de tiempo de formación y experiencia. |
| Idiomas | `Languages.jsx` | Idiomas que hablo. |
| Contacto | `Contact.jsx` | Formas de contacto. |

La barra de navegación (`Nav.jsx`) enlaza con cada sección y tiene un botón para cambiar entre tema claro y oscuro. El tema elegido se guarda en `localStorage` (`useTheme.js`) y un script en `index.html` lo aplica antes de que cargue React, para que no parpadee al abrir la página. También hay un enlace para saltar directamente al contenido, pensado para navegar con teclado.

Todos los estilos están en `src/styles/styles.css`. Las fuentes son IBM Plex Sans y JetBrains Mono, de Google Fonts.

## Desarrollo

```bash
npm install
npm run dev       # servidor de desarrollo
npm run build     # versión de producción en dist/
npm run preview   # sirve el build para revisarlo
```

## Despliegue

El workflow `.github/workflows/deploy.yml` compila la web con Node 20 y la publica en GitHub Pages en cada push a `main`. También se puede lanzar a mano. `vite.config.js` usa una ruta base relativa (`base: './'`), así que la misma versión funciona tanto en la raíz de un dominio como en una subruta de GitHub Pages.

## Pendiente

Los enlaces de los proyectos apuntan todavía a mi perfil de GitHub en lugar de al repositorio de cada uno (hay un `TODO` en `Projects.jsx`).
