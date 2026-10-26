# AnomalyWeb

[Anomaly 异象](https://github.com/AnomalyNTE/Anomaly) 的项目主页 —— **Vue 3 + Vite** 静态站点，
构建产物可直接部署到 GitHub Pages。

- 单页结构：Hero / 特性 / 内建插件（可搜索）/ 第三方插件 / 快速上手 / FAQ / 文档
- 深色为默认主题，带浅色主题切换（记忆到 `localStorage`，也支持 `?theme=dark|light`）
- 零第三方 UI 依赖，只有一个运行时依赖 `vue`；无外部 CDN 请求
- `base: './'`，同一份 `dist` 放在 `https://<user>.github.io/<repo>/` 或自定义域名根路径都能用

## 本地开发

```powershell
npm install
npm run dev        # http://127.0.0.1:5173
npm run build      # 产出 dist/
npm run preview    # 预览构建产物
```

要求 Node 18+（CI 用 Node 20）。

## 结构

```text
index.html                      Vite 入口（含首屏前定主题的内联脚本）
vite.config.js                  base: './' + @vitejs/plugin-vue
src/
  main.js                       createApp + 全局样式
  App.vue                       页面组装
  style.css                     全部样式（深色 / 浅色两套 CSS 变量）
  data/site.js                  文案、插件列表、FAQ、链接常量 —— 改内容只动这里
  components/
    SiteHeader.vue              导航、主题切换、阅读进度条、滚动高亮
    HeroSection.vue             Hero 与 CTA
    RiskNotice.vue              免责声明与风险提示
    FeaturesSection.vue         核心特性
    PluginsSection.vue          内建插件卡片 + 关键词搜索
    MarketSection.vue           第三方插件页面说明与安全提示
    InstallSection.vue          快速上手四步 + 目录结构 / 构建命令
    FaqSection.vue              FAQ 折叠列表
    DocsSection.vue             文档入口卡片
    SiteFooter.vue              页脚、鸣谢与许可证
public/
  logo.png                      项目 Logo
  favicon.png                   站点图标
  .nojekyll                     跳过 Jekyll 处理（构建后随 dist 一起发布）
.github/workflows/pages.yml     CI：npm ci → vite build → 部署 dist 到 Pages
```
