import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000, // Frontend dev server port
    proxy: {
      '/api': 'http://localhost:5000', // Proxy backend API calls
    },
  },
});
