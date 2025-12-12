# Website Yến Sào Premium - Astro Static Site

Website bán yến sào được xây dựng bằng Astro với blog quản lý bằng Markdown files.

## 🚀 Tính năng

- ✅ Website bán yến sào với các trang: Trang chủ, Sản phẩm, Giới thiệu, Liên hệ
- ✅ Blog với CRUD (Create, Read, Update, Delete) sử dụng Markdown files
- ✅ Tối ưu SEO: Meta tags, Sitemap, Robots.txt, Structured Data
- ✅ Responsive design với Tailwind CSS
- ✅ Static site generation - không cần server

## 📁 Cấu trúc dự án

```
/
├── public/              # Static assets
├── src/
│   ├── content/
│   │   ├── blog/       # Blog posts (Markdown files)
│   │   └── config.ts    # Content Collections config
│   ├── components/     # Astro components
│   ├── layouts/        # Page layouts
│   ├── lib/            # Utilities
│   ├── pages/          # Routes
│   └── styles/         # Global styles
└── package.json
```

## 🛠️ Cài đặt

1. Cài đặt dependencies:
```bash
npm install
```

2. Nếu chưa có, cài đặt zod (cần cho Content Collections):
```bash
npm install zod
```

3. Chạy development server:
```bash
npm run dev
```

4. Build production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## 📝 Quản lý Blog

### Tạo bài viết mới

1. Truy cập `/blog/tao-moi`
2. Điền form và nhấn "Tạo file Markdown"
3. File `.md` sẽ được tải về
4. Đặt file vào thư mục `src/content/blog/`
5. Chạy `npm run build` để rebuild

### Sửa bài viết

1. Truy cập `/blog/sua/[id]` hoặc click "Sửa" trên bài viết
2. Chỉnh sửa nội dung
3. Nhấn "Tải file Markdown"
4. Thay thế file cũ trong `src/content/blog/`
5. Chạy `npm run build`

### Xóa bài viết

1. Truy cập `/blog/xoa/[id]` hoặc click "Xóa bài viết"
2. Xóa file `.md` tương ứng trong `src/content/blog/`
3. Chạy `npm run build`

## 📄 Format Markdown file

Mỗi blog post là một file Markdown với frontmatter:

```markdown
---
title: "Tiêu đề bài viết"
excerpt: "Tóm tắt ngắn gọn"
author: "Tên tác giả"
publishedAt: 2024-01-15
updatedAt: 2024-01-20  # Optional
tags:
  - tag1
  - tag2
---

Nội dung bài viết viết bằng Markdown...
```

## 🔧 Cấu hình

- **Site URL**: Cập nhật trong `astro.config.mjs` và `src/pages/sitemap.xml.ts`
- **SEO**: Cấu hình trong `src/layouts/BaseLayout.astro`

## 📦 Deploy

Website có thể deploy lên bất kỳ static hosting nào:
- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages
- etc.

## 📚 Tài liệu

- [Astro Documentation](https://docs.astro.build)
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
