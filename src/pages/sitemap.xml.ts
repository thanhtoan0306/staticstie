import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
	const site = 'https://yensaopremium.com'; // Thay đổi URL thực tế của bạn
	
	const pages = [
		'',
		'/san-pham',
		'/blog',
		'/gioi-thieu',
		'/lien-he',
		'/blog/tao-moi',
	];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${site}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
		},
	});
};

