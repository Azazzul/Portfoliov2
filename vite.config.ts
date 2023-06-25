import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { copy } from 'vite-plugin-copy';

export default defineConfig({
  plugins: [
    vue(),
    copy({
      patterns: [
        { from: 'src/assets/screenshot', to: 'dist/assets/screenshot' }
      ]
    })
  ]
});