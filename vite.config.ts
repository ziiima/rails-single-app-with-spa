import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 4200,
    host: "0.0.0.0"
  },
  preview: {
    port: 4200,
    host: "0.0.0.0"
  },
  plugins: [
    react(),
  ],
  build: {
    outDir: "dist",
    sourcemap: true,
    rollupOptions: {
      input: {
        ui: './frontend/main.tsx',
      },
      output: {
        dir: 'dist',
        format: 'es', // または'cjs'など
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
})
