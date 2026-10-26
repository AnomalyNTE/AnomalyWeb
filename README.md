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

## 部署到 GitHub Pages

1. 新建仓库并推送到 `main` 分支：

   ```powershell
   git init -b main
   git add .
   git commit -m "feat(site): add Anomaly landing page"
   git remote add origin https://github.com/<USER>/<REPO>.git
   git push -u origin main
   ```

2. 仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。
3. 之后每次推送到 `main`，`pages` workflow 会跑 `npm ci && npm run build`，把 `dist` 发布出去；
   地址形如 `https://<USER>.github.io/<REPO>/`。

如果要部署到一个**用户主页仓库**（`<USER>.github.io`）或自定义域名，`base: './'` 已经兼容，
无需改配置。

### 手动发布（不想用 Actions）

把 `npm run build` 产出的 `dist/` 提交到 `gh-pages` 分支，然后在 Pages 里选
**Deploy from a branch → gh-pages / (root)** 即可。

## 自定义

| 想改什么 | 改哪里 |
| --- | --- |
| 文案、插件列表、FAQ、外链 | `src/data/site.js` |
| 下载渠道（GitHub / 夸克网盘 / 百度网盘） | `src/data/site.js` 的 `downloads` |
| 配色（深色 / 浅色两套变量） | `src/style.css` 顶部 `:root` 与 `html[data-theme="light"]` |
| 版式、间距、栅格 | `src/style.css` 各区块小节 |
| 主题切换行为 | `src/components/SiteHeader.vue`、`index.html` 内联脚本 |

新增内建插件只要在 `plugins` 数组里加一项，搜索会自动覆盖：

```js
{ name: '插件名', text: '一句话说明。', tags: '关键词 空格分隔' }
```

## 内容来源与免责

文案与插件说明取自 Anomaly 主仓库的 `README.md` 与 `docs/`；项目以
[AGPL-3.0-only](https://github.com/AnomalyNTE/Anomaly/blob/main/LICENSE) 分发。
本页面仅作项目介绍与文档入口，不得用于作弊行为。
