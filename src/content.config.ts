import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    cover: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
  }),
});

const rutasCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    dificultad: z.enum(["Fácil", "Media", "Alta"]),
    distancia_km: z.number(),
    tiempo_horas: z.string(),
    excerpt: z.string(),
    cover: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  rutas: rutasCollection,
};
