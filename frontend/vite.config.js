import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        // backend URL
        // target: 'http://localhost:5000',
        target: 'https://gcr-ondc-backend.vercel.app/',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
