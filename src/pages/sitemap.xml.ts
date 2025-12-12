import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getAllProducts } from '../lib/products';

export const GET: APIRoute = async () => {
	const site = 'https://yensaopremium.com'; // Thay đổi URL thực tế của bạn
	const blogEntries = await getCollection('blog');
	const products = getAllProducts();
	
	const pages = [
		{ path: '', priority: '1.0', changefreq: 'weekly' },
		{ path: '/san-pham', priority: '0.9', changefreq: 'weekly' },
		{ path: '/blog', priority: '0.8', changefreq: 'weekly' },
		{ path: '/gioi-thieu', priority: '0.7', changefreq: 'monthly' },
		{ path: '/lien-he', priority: '0.7', changefreq: 'monthly' },
	];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${site}${page.path}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
${products.map(product => `  <url>
    <loc>${site}/san-pham/${product.slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
${blogEntries.map(entry => `  <url>
    <loc>${site}/blog/${entry.slug}</loc>
    <lastmod>${(entry.data.updatedAt || entry.data.publishedAt).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`).join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
		},
	});
};

