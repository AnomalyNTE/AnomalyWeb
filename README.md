# AnomalyWeb

[Anomaly 异象](https://github.com/AnomalyNTE/Anomaly) 的项目主页 —— **Vue 3 + Vite** 静态站点，
构建产物可直接部署到 GitHub Pages。

- 首页：Hero（三个下载渠道）/ 特性 / Liquid Glass 界面预告 / 内建插件（可搜索）/ 第三方插件 /
  快速上手 / FAQ / 文档
- `/promo/`：**Anomaly UI · Liquid Glass** 界面预览页（新旧对比拖动、玻璃控件试玩、细节与插件画廊、演示视频）
- 深色为默认主题，带浅色主题切换（记忆到 `localStorage`，也支持 `?theme=dark|light`）；`/promo/` 固定深色玻璃风格
- 零第三方 UI 依赖，只有一个运行时依赖 `vue`；无外部 CDN 请求
- `base: './'`，同一份 `dist` 放在 `https://<user>.github.io/<repo>/` 或自定义域名根路径都能用

## 本地开发

```powershell
npm install
npm run dev        # http://127.0.0.1:5173（首页）  /promo/（界面预览）
npm run build      # 产出 dist/（多页：dist/index.html + dist/promo/index.html）
npm run preview    # 预览构建产物
```

要求 Node 18+（CI 用 Node 20）。

## 结构

```text
index.html                      首页入口（含首屏前定主题的内联脚本）
promo/index.html                界面预览页入口
vite.config.js                  base: './' + rollupOptions.input 多页配置
src/
  main.js                       首页：createApp + 全局样式
  App.vue                       首页组装
  style.css                     站点样式（深色 / 浅色两套 CSS 变量）
  data/site.js                  文案、插件列表、FAQ、下载渠道、链接常量 —— 改内容只动这里
  components/
    SiteHeader.vue              导航、主题切换、阅读进度条、滚动高亮（跨页复用）
    HeroSection.vue             Hero 与三个下载渠道
    RiskNotice.vue              免责声明与风险提示
    FeaturesSection.vue         核心特性
    PromoTeaser.vue             Liquid Glass 界面预告（指向 /promo/）
    PluginsSection.vue          内建插件卡片 + 关键词搜索
    MarketSection.vue           第三方插件页面说明与安全提示
    InstallSection.vue          快速上手四步 + 目录结构 / 构建命令
    FaqSection.vue              FAQ 折叠列表
    DocsSection.vue             文档入口卡片
    SiteFooter.vue              页脚、鸣谢与许可证（跨页复用）
  promo/                        /promo/ 页面
    main.js                     入口：注册 v-reveal 指令
    PromoPage.vue               页面组装（壁纸 + 面纱 + 页眉页脚）
    promo.css                   宣传页样式，全部选择器前缀 .promo，避免污染站点样式
    components/
      PromoHero.vue             Hero、鼠标视差与页内锚点
      LensTabs.vue              玻璃分段控件（镜片会拉伸回弹），tabs / seg / dock 三种形态
      CompareSection.vue        新旧对比：标签切换 + 拖动分割线 + 首次进入自动扫一遍
      GlassDemos.vue            分段控件 / 开关 / 滑块 / 浮动标签栏试玩
      DetailsSection.vue        细节三连（悬停换图、高亮框）+ 演示视频
      GallerySection.vue        插件画廊（旧版 / 新版并排）
public/
  logo.png                      项目 Logo
  favicon.png                   站点图标
  .nojekyll                     跳过 Jekyll 处理（构建后随 dist 一起发布）
  promo/img/*.webp              界面预览截图（new-* / old-* / wallpaper）
  promo/anomaly-liquid-glass.mp4 演示视频
.github/workflows/pages.yml     CI：npm ci → vite build → 部署 dist 到 Pages
```
