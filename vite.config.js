import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/fahimr.github.io/', // Add your repository name here
  plugins: [react()],
});
