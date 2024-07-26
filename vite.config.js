import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  base: '/PortfolioV2/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve('index.html')
      }
    }
  },
  publicDir: 'src/assets',
  assetsInclude: ['**/*.PNG', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg']
});
