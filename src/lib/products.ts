export interface Product {
	id: string;
	name: string;
	slug: string;
	description: string;
	longDescription: string;
	price: number;
	priceUnit: string;
	image: string;
	imageAlt: string;
	category: string;
	inStock: boolean;
	rating?: {
		value: number;
		count: number;
	};
}

export const products: Product[] = [
	{
		id: 'yen-sao-tinh-che',
		name: 'Yến Sào Tinh Chế',
		slug: 'yen-sao-tinh-che',
		description: 'Yến sào đã được làm sạch hoàn toàn, sẵn sàng sử dụng. Sản phẩm cao cấp, nguyên chất 100%.',
		longDescription: 'Yến sào tinh chế là sản phẩm cao cấp đã được làm sạch kỹ lưỡng, loại bỏ hoàn toàn lông và tạp chất. Sản phẩm nguyên chất 100%, không pha trộn, đảm bảo chất lượng và an toàn vệ sinh thực phẩm. Phù hợp cho mọi lứa tuổi, đặc biệt tốt cho người già, trẻ em và phụ nữ mang thai.',
		price: 2500000,
		priceUnit: '100g',
		image: '/images/yen-sao-tinh-che.jpg',
		imageAlt: 'Yến sào tinh chế nguyên chất 100% - Yến Sào Premium',
		category: 'Yến sào tinh chế',
		inStock: true,
		rating: {
			value: 4.8,
			count: 125
		}
	},
	{
		id: 'yen-sao-tho',
		name: 'Yến Sào Thô',
		slug: 'yen-sao-tho',
		description: 'Yến sào nguyên tổ, chưa qua xử lý. Dành cho những người muốn tự làm sạch.',
		longDescription: 'Yến sào thô là sản phẩm nguyên tổ, chưa qua bất kỳ công đoạn xử lý nào. Giữ nguyên 100% giá trị dinh dưỡng tự nhiên. Phù hợp cho những người có kinh nghiệm trong việc làm sạch yến sào. Giá thành hợp lý hơn so với yến sào tinh chế.',
		price: 1800000,
		priceUnit: '100g',
		image: '/images/yen-sao-tho.jpg',
		imageAlt: 'Yến sào thô nguyên tổ - Yến Sào Premium',
		category: 'Yến sào thô',
		inStock: true,
		rating: {
			value: 4.6,
			count: 89
		}
	},
	{
		id: 'yen-sao-chung-san',
		name: 'Yến Sào Chưng Sẵn',
		slug: 'yen-sao-chung-san',
		description: 'Yến sào đã chưng sẵn với đường phèn, tiện lợi sử dụng ngay.',
		longDescription: 'Yến sào chưng sẵn là sản phẩm tiện lợi, đã được chưng cách thủy với đường phèn theo công thức chuẩn. Sản phẩm đóng hũ, có thể sử dụng ngay mà không cần chế biến. Phù hợp cho người bận rộn, muốn bổ sung dinh dưỡng nhanh chóng và tiện lợi.',
		price: 3200000,
		priceUnit: '100g',
		image: '/images/yen-sao-chung-san.jpg',
		imageAlt: 'Yến sào chưng sẵn với đường phèn - Yến Sào Premium',
		category: 'Yến sào chưng sẵn',
		inStock: true,
		rating: {
			value: 4.9,
			count: 156
		}
	}
];

export function getAllProducts(): Product[] {
	return products;
}

export function getProductBySlug(slug: string): Product | undefined {
	return products.find(p => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
	return products.find(p => p.id === id);
}


