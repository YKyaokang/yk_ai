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
      prodEnabled: false, // 关闭vite-plugin-mock的生产模式，我们使用自定义的mock服务
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
  },
  build: {
    rollupOptions: {
      // 确保mock文件被包含在构建中
      input: {
        main: path.resolve(__dirname, 'index.html')
      }
    }
  }
})
