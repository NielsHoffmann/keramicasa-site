import { defineCollection, z } from 'astro:content';

const galleryCollection = defineCollection({
  type: 'data', // essential for JSON/YAML files!
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    order: z.number().optional(), // <-- DEZE MOET ER HIER BIJ STAAN!
    coverImage: z.string(),
    images: z.array(
      z.object({
        src: z.string(),
        alt: z.string().optional(),
        caption: z.string().optional(),
      })
    ),
  }),
});

export const collections = {
  galleries: galleryCollection,
};