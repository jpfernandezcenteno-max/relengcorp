import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* Colección BLOG — editable por el cliente vía Decap CMS (/admin).
   Cada post es un archivo .md en src/content/blog/. */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string().default('Industria'),
    author: z.string().default('Relengcorp'),
    cover: z.string().optional(), // ruta a imagen de portada (cuando el cliente la suba)
    coverAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
