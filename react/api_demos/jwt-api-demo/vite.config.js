import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// 服务器端 mock 冒充模拟
// vite 前端模拟服务器 准备好了插件
// 前后端分离 
import {
  viteMockServe
} from 'vite-plugin-mock'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteMockServe({
      mockPath: 'mock',
      enable: true,
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})