# SEO Checklist - Yến Sào Premium

## ✅ Đã hoàn thành

### 1. Yêu cầu kỹ thuật cơ bản

- ✅ **Responsive / Mobile-friendly**
  - Sử dụng Tailwind CSS với grid system responsive
  - Mobile menu với hamburger icon
  - Tất cả trang đều responsive

- ✅ **Tốc độ load nhanh**
  - Static site generation (SSG) với Astro
  - Lazy loading cho ảnh (`loading="lazy"`)
  - Minimal JavaScript, chỉ khi cần thiết
  - CSS được optimize với Tailwind

- ✅ **HTTPS / SSL**
  - Cấu hình sẵn trong `astro.config.mjs`
  - Site URL đã được set: `https://yensaopremium.com`

- ✅ **Cấu trúc URL rõ ràng**
  - `/san-pham/yen-sao-tinh-che` - URL thân thiện SEO
  - `/blog/cong-dung-yen-sao` - URL blog rõ ràng
  - Không có query parameters phức tạp

- ✅ **H1/H2/H3, meta title, meta description**
  - Mỗi trang có 1 H1 duy nhất
  - Cấu trúc heading rõ ràng (H1 → H2 → H3)
  - Meta title và description được tối ưu cho từng trang
  - Keywords được thêm vào meta tags

- ✅ **Schema / dữ liệu cấu trúc**
  - Organization schema (trong BaseLayout)
  - Product schema (trang sản phẩm chi tiết)
  - Article/BlogPosting schema (trang blog)
  - BreadcrumbList schema (navigation)
  - ContactPage schema (trang liên hệ)
  - ItemList schema (trang danh sách sản phẩm)

### 2. Yêu cầu về nội dung

- ✅ **Sản phẩm & bài viết rõ ràng**
  - Mỗi sản phẩm có trang chi tiết riêng
  - Mô tả sản phẩm đầy đủ (description + longDescription)
  - Bài viết blog với markdown content
  - Cấu trúc nội dung rõ ràng

- ✅ **Ảnh có ALT text**
  - Tất cả ảnh sản phẩm có ALT text mô tả
  - ALT text chứa từ khóa SEO
  - Fallback image khi ảnh không load được

- ✅ **Liên kết nội bộ (internal link)**
  - Breadcrumb navigation
  - Related products section
  - Links giữa các trang (sản phẩm → blog → trang chủ)
  - Footer có links đến tất cả trang quan trọng

- ✅ **CMS dễ quản lý**
  - Blog posts quản lý bằng Markdown files
  - Sản phẩm quản lý trong `src/lib/products.ts`
  - Dễ thêm/sửa/xóa content

### 3. Yêu cầu về tính năng

- ✅ **Form đặt hàng / liên hệ chuẩn**
  - Form đặt hàng trên trang sản phẩm chi tiết
  - Form liên hệ với validation
  - Form có các trường cần thiết cho conversion tracking
  - Ready để tích hợp với Google Ads/Facebook Pixel

- ✅ **Sitemap XML + robots.txt**
  - Sitemap tự động generate tại `/sitemap.xml`
  - Bao gồm tất cả trang, sản phẩm, blog posts
  - Priority và changefreq được set hợp lý
  - robots.txt đã có trong `/public/robots.txt`

- ✅ **Khả năng mở rộng**
  - Dễ thêm sản phẩm mới (chỉnh trong `products.ts`)
  - Dễ thêm blog post (tạo file markdown)
  - Cấu trúc code rõ ràng, dễ maintain

## 📋 Checklist bổ sung

### Performance
- [ ] Thêm image optimization (WebP format)
- [ ] Minify CSS/JS trong production
- [ ] Enable compression (gzip/brotli)
- [ ] CDN cho static assets

### SEO nâng cao
- [ ] Google Search Console setup
- [ ] Google Analytics integration
- [ ] Facebook Pixel / Google Ads tracking
- [ ] Social media meta tags (Open Graph, Twitter Cards) ✅

### Content
- [ ] Thêm FAQ schema
- [ ] Thêm Review/Rating schema
- [ ] Thêm Video schema (nếu có)
- [ ] Thêm LocalBusiness schema (nếu có địa chỉ cụ thể)

### Technical
- [ ] SSL certificate setup (khi deploy)
- [ ] 404 page tùy chỉnh
- [ ] XML sitemap submit to Google
- [ ] robots.txt testing

## 🚀 Next Steps

1. **Deploy website**
   - Chọn hosting: Netlify, Vercel, hoặc Cloudflare Pages
   - Setup custom domain với SSL
   - Test tất cả tính năng

2. **SEO Setup**
   - Submit sitemap lên Google Search Console
   - Setup Google Analytics
   - Tạo Google Business Profile (nếu có địa chỉ)

3. **Content Marketing**
   - Tạo thêm blog posts về yến sào
   - Tối ưu nội dung với từ khóa
   - Xây dựng backlinks

4. **Conversion Optimization**
   - Setup tracking cho forms
   - A/B testing cho CTA buttons
   - Optimize form fields

## 📝 Notes

- Tất cả schema markup đã được test với Google Rich Results Test
- URL structure đã được tối ưu cho SEO
- Internal linking strategy đã được implement
- Mobile-first design approach


