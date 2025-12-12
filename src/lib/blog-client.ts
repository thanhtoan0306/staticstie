export interface BlogPost {
	id: string;
	title: string;
	slug: string;
	content: string;
	excerpt: string;
	author: string;
	publishedAt: string;
	updatedAt?: string;
	image?: string;
	tags?: string[];
}

const STORAGE_KEY = 'yen-sao-blog-posts';

// Default posts
const defaultPosts: BlogPost[] = [
	{
		id: '1',
		title: 'Công dụng tuyệt vời của yến sào đối với sức khỏe',
		slug: 'cong-dung-yen-sao',
		content: 'Yến sào là một trong những thực phẩm bổ dưỡng nhất từ thiên nhiên. Nó chứa nhiều protein, axit amin và các khoáng chất quan trọng giúp tăng cường sức khỏe, cải thiện hệ miễn dịch và làm đẹp da.\n\nYến sào có nhiều công dụng:\n- Tăng cường sức đề kháng\n- Cải thiện hệ tiêu hóa\n- Làm đẹp da, chống lão hóa\n- Bổ sung dinh dưỡng cho người già và trẻ em\n- Hỗ trợ phục hồi sức khỏe sau bệnh',
		excerpt: 'Yến sào là một trong những thực phẩm bổ dưỡng nhất từ thiên nhiên...',
		author: 'Admin',
		publishedAt: new Date().toISOString(),
		tags: ['sức khỏe', 'yến sào']
	}
];

function getStoredPosts(): BlogPost[] {
	if (typeof window === 'undefined') return defaultPosts;
	
	try {
		const stored = localStorage.getItem(STORAGE_KEY);
		if (stored) {
			return JSON.parse(stored);
		}
		// Initialize with default posts
		localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultPosts));
		return defaultPosts;
	} catch {
		return defaultPosts;
	}
}

function savePosts(posts: BlogPost[]): void {
	if (typeof window === 'undefined') return;
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
	} catch (error) {
		console.error('Error saving posts:', error);
	}
}

export function getAllPosts(): BlogPost[] {
	return getStoredPosts().sort((a, b) => 
		new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
	);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
	return getStoredPosts().find(post => post.slug === slug);
}

export function getPostById(id: string): BlogPost | undefined {
	return getStoredPosts().find(post => post.id === id);
}

export function createPost(post: Omit<BlogPost, 'id' | 'publishedAt' | 'updatedAt'>): BlogPost {
	const posts = getStoredPosts();
	const newPost: BlogPost = {
		...post,
		id: Date.now().toString(),
		publishedAt: new Date().toISOString(),
	};
	posts.push(newPost);
	savePosts(posts);
	return newPost;
}

export function updatePost(id: string, updates: Partial<Omit<BlogPost, 'id' | 'publishedAt'>>): BlogPost | null {
	const posts = getStoredPosts();
	const index = posts.findIndex(post => post.id === id);
	if (index === -1) return null;
	
	posts[index] = {
		...posts[index],
		...updates,
		updatedAt: new Date().toISOString(),
	};
	savePosts(posts);
	return posts[index];
}

export function deletePost(id: string): boolean {
	const posts = getStoredPosts();
	const index = posts.findIndex(post => post.id === id);
	if (index === -1) return false;
	
	posts.splice(index, 1);
	savePosts(posts);
	return true;
}

