import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {
  viteMockServe
} from 'vite-plugin-mock'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteMockServe({
      mockPath: 'mock',
      localEnabled: true,
      prodEnabled: true,
      watchFiles: true,
      logger: true,
      supportTs: false
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    host: '0.0.0.0',
    port: 5174,
    cors: true
  }
})
