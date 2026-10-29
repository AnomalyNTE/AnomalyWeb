import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const page = (path) => fileURLToPath(new URL(path, import.meta.url))

// base: './' —— 产物用相对路径引用资源，
// 因此同一份 dist 既能部署到 <user>.github.io/<repo>/ 也能部署到自定义域名根路径。
// 多页构建：中文首页/界面预览在根目录，英文版在同构的 /en/ 子目录。
export default defineConfig({
  base: './',
  plugins: [vue()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    target: 'es2020',
    rollupOptions: {
      input: {
        main: page('./index.html'),
        promo: page('./promo/index.html'),
        en: page('./en/index.html'),
        enPromo: page('./en/promo/index.html')
      }
    }
  }
})
