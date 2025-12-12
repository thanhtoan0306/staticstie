// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://yensaopremium.com', // Thay đổi URL thực tế của bạn
  vite: {
    plugins: [tailwindcss()]
  }
});