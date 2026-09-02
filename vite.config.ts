import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    port: 5173,
    host: true
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/framer-motion/')) {
            return 'vendor-framer-motion';
          }
          if (id.includes('node_modules/lucide-react/')) {
            return 'vendor-lucide';
          }
          if (id.includes('node_modules/canvas-confetti/')) {
            return 'vendor-confetti';
          }
        }
      }
    }
  }
});
