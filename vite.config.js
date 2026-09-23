import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // percorsi relativi: dist/ si apre anche con Live Server
  plugins: [react()],
});
