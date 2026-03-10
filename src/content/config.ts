import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string(),
    category: z.enum(['Notizie', 'Eventi', 'Storie']),
    coverImage: z.string(),
    excerpt: z.string(),
  }),
});

export const collections = { blog };
