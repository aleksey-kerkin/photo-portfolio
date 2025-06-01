// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://aleksey-kerkin.netlify.app/',

  build: {
    inlineStylesheets: 'never',
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
