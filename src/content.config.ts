import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders"; // Importante: Nueva función para cargar archivos

const blog = defineCollection({
  // El loader ahora se encarga de buscar los archivos
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    cover: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { blog };
