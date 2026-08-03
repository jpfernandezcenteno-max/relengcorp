import type { ImageMetadata } from 'astro';

/* Mapas de imágenes (optimizadas por Astro) para referenciarlas por nombre
   desde componentes/páginas que solo conocen el nombre de archivo. */
const general = import.meta.glob<ImageMetadata>('/src/assets/general/*.webp', { eager: true, import: 'default' });
const servicios = import.meta.glob<ImageMetadata>('/src/assets/servicios/**/*.webp', { eager: true, import: 'default' });

/** Foto de la carpeta general por nombre de archivo, ej. generalImg('19.webp'). */
export function generalImg(file: string): ImageMetadata {
  const img = general[`/src/assets/general/${file}`];
  if (!img) throw new Error(`[img] general no encontrada: ${file}`);
  return img;
}

/** Foto de un servicio por slug + archivo, ej. servicioImg('ingenieria-digital', '03.webp'). */
export function servicioImg(slug: string, file: string): ImageMetadata {
  const img = servicios[`/src/assets/servicios/${slug}/${file}`];
  if (!img) throw new Error(`[img] servicio no encontrada: ${slug}/${file}`);
  return img;
}

/** Resuelve una ruta tipo "/images/general/04.webp" o "/images/servicios/slug/00.webp"
   a su ImageMetadata (para optimizarla con <Image>). Devuelve undefined si no aplica
   (ej. imágenes que siguen en /public como /images/blog/...). */
export function resolveImg(path: string): ImageMetadata | undefined {
  const m = path.match(/^\/images\/(general|servicios)\/(.+)$/);
  if (!m) return undefined;
  const key = `/src/assets/${m[1]}/${m[2]}`;
  return general[key] ?? servicios[key];
}
