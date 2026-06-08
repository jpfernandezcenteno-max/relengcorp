# Relengcorp — Sitio web corporativo

Sitio web de **Relengcorp**, empresa de servicios industriales de confiabilidad, mantenimiento predictivo y transformación digital para la industria minera e industrial.

## Stack

- **[Astro](https://astro.build/)** — generación estática (SSG) para SEO y rendimiento óptimos.
- **GSAP + ScrollTrigger** — animaciones a 60fps con respeto a `prefers-reduced-motion`.
- **Decap CMS** — panel visual para que el cliente edite el blog (en `/admin`).
- **Raleway** (self-hosted vía Fontsource).

Diseño extraído directamente de Figma (design system: colores, tipografía, espaciados y sombras como tokens CSS en `src/styles/tokens.css`).

## Desarrollo

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo  -> http://localhost:4321
npm run build    # build de producción     -> ./dist
npm run preview  # previsualizar el build
```

## Estructura

```
src/
  components/        Componentes UI (Header, Footer, Carousel, tarjetas…)
    sections/        Secciones de página (Hero, Servicios, Facts…)
  content/blog/      Artículos del blog (Markdown, editables vía CMS)
  data/site.ts       Datos centralizados: navegación, servicios, contacto
  layouts/           Layout base + SEO
  pages/             Rutas del sitio
  scripts/           Motor de animaciones GSAP
  styles/            tokens.css (design system) + global.css
public/
  admin/             Decap CMS (panel del cliente)
  images/            Imágenes (pendiente: banco de fotos del cliente)
```

## Despliegue

Despliegue continuo en **Vercel**: cada push a `main` genera un nuevo deploy.

## Pendientes

- Reemplazar placeholders de imágenes por el banco de fotos real del cliente.
- Conectar el envío de formularios (servicio de correo / backend) — ver `data-contact-form`.
- Confirmar cifras de la sección de estadísticas del Home.
- Cargar brochure(s) en `public/brochures/`.
