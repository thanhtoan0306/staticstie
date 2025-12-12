import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		excerpt: z.string(),
		author: z.string(),
		publishedAt: z.coerce.date(),
		updatedAt: z.coerce.date().optional(),
		tags: z.array(z.string()).optional(),
		image: z.string().optional(),
	}),
});

export const collections = {
	blog: blogCollection,
};


