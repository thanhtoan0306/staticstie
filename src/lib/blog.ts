import { getCollection } from 'astro:content';

export interface BlogPost {
	id: string;
	title: string;
	slug: string;
	content: string; // HTML rendered content
	excerpt: string;
	author: string;
	publishedAt: Date;
	updatedAt?: Date;
	image?: string;
	tags?: string[];
}

export async function getAllPosts(): Promise<BlogPost[]> {
	const blogEntries = await getCollection('blog');
	
	const posts = await Promise.all(
		blogEntries.map(async (entry) => {
			const { Content } = await entry.render();
			// Convert Content component to HTML string
			let contentHtml = '';
			// We'll need to render it differently
			return {
				id: entry.id,
				title: entry.data.title,
				slug: entry.slug,
				content: entry.body, // Keep raw markdown for now
				excerpt: entry.data.excerpt,
				author: entry.data.author,
				publishedAt: entry.data.publishedAt,
				updatedAt: entry.data.updatedAt,
				image: entry.data.image,
				tags: entry.data.tags,
			};
		})
	);
	
	return posts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
	const blogEntries = await getCollection('blog');
	const entry = blogEntries.find((e) => e.slug === slug);
	
	if (!entry) return undefined;
	
	return {
		id: entry.id,
		title: entry.data.title,
		slug: entry.slug,
		content: entry.body, // Raw markdown
		excerpt: entry.data.excerpt,
		author: entry.data.author,
		publishedAt: entry.data.publishedAt,
		updatedAt: entry.data.updatedAt,
		image: entry.data.image,
		tags: entry.data.tags,
	};
}

export async function getPostById(id: string): Promise<BlogPost | undefined> {
	const blogEntries = await getCollection('blog');
	const entry = blogEntries.find((e) => e.id === id);
	
	if (!entry) return undefined;
	
	return {
		id: entry.id,
		title: entry.data.title,
		slug: entry.slug,
		content: entry.body, // Raw markdown
		excerpt: entry.data.excerpt,
		author: entry.data.author,
		publishedAt: entry.data.publishedAt,
		updatedAt: entry.data.updatedAt,
		image: entry.data.image,
		tags: entry.data.tags,
	};
}

