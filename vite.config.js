import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import glsl from 'vite-plugin-glsl'

export default defineConfig({
  plugins: [react({jsxRuntime: 'automatic',}),glsl()],
  base: '/',
  esbuild: {
    loader: 'jsx',
    include: /frontend\/src\/.*\.[jt]sx?$/,
  },
  server: {
    origin: 'http://localhost:5173',
    port: 5173,
    strictPort: true,
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: 'frontend/src/main.jsx',
    },
    outDir: 'static/dist',
  },
})
