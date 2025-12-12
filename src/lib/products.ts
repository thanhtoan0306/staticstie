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
		id: 'nap-yen',
		name: 'Nắp Yến',
		slug: 'nap-yen',
		description: 'Nắp yến cao cấp, chất liệu nhựa PP an toàn, bền đẹp. Phù hợp cho các loại hũ yến sào, đảm bảo vệ sinh và bảo quản tốt.',
		longDescription: 'Nắp yến được làm từ nhựa PP cao cấp, an toàn cho thực phẩm, không chứa BPA. Thiết kế vừa khít với các loại hũ yến sào phổ biến, giúp bảo quản sản phẩm tốt hơn, tránh bụi bẩn và độ ẩm. Nắp có độ bền cao, dễ vệ sinh, tái sử dụng nhiều lần. Phù hợp cho các cơ sở sản xuất yến sào, cửa hàng và gia đình sử dụng.',
		price: 5000,
		priceUnit: 'cái',
		image: '/images/nap-yen.jpg',
		imageAlt: 'Nắp yến nhựa PP cao cấp - Yến Sào Premium',
		category: 'Phụ kiện yến sào',
		inStock: true,
		rating: {
			value: 4.7,
			count: 234
		}
	},
	{
		id: 'lo-thuy-tinh',
		name: 'Lọ Thủy Tinh',
		slug: 'lo-thuy-tinh',
		description: 'Lọ thủy tinh đựng yến sào, chất liệu thủy tinh cao cấp, trong suốt, an toàn vệ sinh. Nhiều dung tích khác nhau.',
		longDescription: 'Lọ thủy tinh đựng yến sào được làm từ thủy tinh cao cấp, trong suốt, dễ quan sát sản phẩm bên trong. Thủy tinh không phản ứng với thực phẩm, an toàn tuyệt đối, dễ vệ sinh và tái sử dụng. Thiết kế đẹp mắt, phù hợp làm quà tặng. Có nhiều dung tích: 50ml, 100ml, 150ml, 200ml để phù hợp với nhu cầu sử dụng. Nắp kín khí, bảo quản yến sào tốt hơn.',
		price: 15000,
		priceUnit: 'cái',
		image: '/images/lo-thuy-tinh.jpg',
		imageAlt: 'Lọ thủy tinh đựng yến sào cao cấp - Yến Sào Premium',
		category: 'Phụ kiện yến sào',
		inStock: true,
		rating: {
			value: 4.9,
			count: 456
		}
	},
	{
		id: 'khay-dinh-hinh',
		name: 'Khay Định Hình',
		slug: 'khay-dinh-hinh',
		description: 'Khay định hình yến sào, giúp sản phẩm giữ nguyên hình dạng, đẹp mắt và chuyên nghiệp. Chất liệu nhựa PP an toàn.',
		longDescription: 'Khay định hình yến sào được thiết kế đặc biệt để giữ nguyên hình dạng của yến sào trong quá trình đóng gói và vận chuyển. Chất liệu nhựa PP cao cấp, an toàn thực phẩm, không độc hại. Khay có nhiều kích thước khác nhau phù hợp với các loại yến sào. Giúp sản phẩm trông đẹp mắt, chuyên nghiệp hơn, tăng giá trị thương mại. Dễ sử dụng, có thể tái sử dụng.',
		price: 8000,
		priceUnit: 'cái',
		image: '/images/khay-dinh-hinh.jpg',
		imageAlt: 'Khay định hình yến sào nhựa PP - Yến Sào Premium',
		category: 'Phụ kiện yến sào',
		inStock: true,
		rating: {
			value: 4.6,
			count: 189
		}
	},
	{
		id: 'coc-giay',
		name: 'Cốc Giấy',
		slug: 'coc-giay',
		description: 'Cốc giấy đựng yến sào, thân thiện môi trường, an toàn vệ sinh. Phù hợp cho yến sào chưng sẵn, tiện lợi sử dụng.',
		longDescription: 'Cốc giấy đựng yến sào được làm từ giấy cao cấp, có lớp bảo vệ chống thấm nước, an toàn cho thực phẩm. Thân thiện với môi trường, có thể tái chế. Phù hợp cho yến sào chưng sẵn, yến sào nước, dễ dàng mang đi và sử dụng. Thiết kế đẹp mắt, có thể in logo thương hiệu. Nắp kín, giữ nhiệt tốt. Có nhiều dung tích: 100ml, 150ml, 200ml.',
		price: 3000,
		priceUnit: 'cái',
		image: '/images/coc-giay.jpg',
		imageAlt: 'Cốc giấy đựng yến sào thân thiện môi trường - Yến Sào Premium',
		category: 'Phụ kiện yến sào',
		inStock: true,
		rating: {
			value: 4.5,
			count: 312
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


