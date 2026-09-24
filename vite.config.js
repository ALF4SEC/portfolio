import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base relativa: el build funciona en la raíz de Vercel/Netlify y también en subrutas (GitHub Pages)
export default defineConfig({
  plugins: [react()],
  base: './',
});
