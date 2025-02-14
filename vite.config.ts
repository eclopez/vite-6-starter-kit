import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'docs', // Output for GH Pages
    sourcemap: true, // Enable sourcemaps for debugging
  },
});
