import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteMockServe } from 'vite-plugin-mock'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteMockServe({
      mockPath: './mock',
      localEnabled: true, // 开发环境启用 mock
    })
  ],
  server: {
    host: '0.0.0.0', // 允许外部访问
    port: 3000
  },
  css: {
    postcss: './postcss.config.js'
  }
})
