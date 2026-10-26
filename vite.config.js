import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// base: './' —— 产物用相对路径引用资源，
// 因此同一份 dist 既能部署到 <user>.github.io/<repo>/ 也能部署到自定义域名根路径。
export default defineConfig({
  base: './',
  plugins: [vue()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    target: 'es2020'
  }
})
