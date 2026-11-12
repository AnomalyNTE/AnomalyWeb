/**
 * 渲染校验：用 Vite 的 SSR 管线把首页（以及 /promo/）真正渲染一遍，
 * 检查同步后的文案是否出现在输出里、内建插件卡片是否两个分组都在。
 *
 *   node scripts/verify-render.mjs zh
 *   node scripts/verify-render.mjs en
 */

const locale = (process.argv[2] || 'zh').toLowerCase()

/* ---- 只桩 navigator：i18n.js 在没有 document 时按浏览器语言解析，
       正好用来分别渲染中英两套文案（真插一个假 document 会干扰 Vue runtime-dom） ---- */

/** Node 20+ 自带只读的 globalThis.navigator，必须用 defineProperty 覆盖 */
Object.defineProperty(globalThis, 'navigator', {
  configurable: true,
  writable: true,
  value: {
    languages: locale === 'zh' ? ['zh-CN', 'zh'] : ['en-US', 'en'],
    language: locale === 'zh' ? 'zh-CN' : 'en-US'
  }
})

const { createServer } = await import('vite')
const { createSSRApp } = await import('vue')
const { renderToString } = await import('vue/server-renderer')

const server = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error'
})

const renderPage = async (path) => {
  const mod = await server.ssrLoadModule(path)
  const app = createSSRApp(mod.default)
  // /promo/ 的 main.js 用 v-reveal 做入场动画，SSR 里给个空指令即可
  app.directive('reveal', {})
  return renderToString(app)
}

const expect = (html, needles, label) => {
  const missing = needles.filter((needle) => !html.includes(needle))
  if (missing.length) {
    console.error(`✗ ${label} 缺少内容：`)
    for (const needle of missing) console.error(`  - ${needle}`)
    return false
  }
  console.log(`✓ ${label}`)
  return true
}

/** 反向断言：首页不再出现液态玻璃宣传（/promo/ 预览页单独校验，保持原样） */
const absent = (html, needles, label) => {
  const hits = needles.filter((needle) => html.includes(needle))
  if (hits.length) {
    console.error(`✗ ${label} 仍包含内容：`)
    for (const hit of hits) console.error(`  - ${hit}`)
    return false
  }
  console.log(`✓ ${label}`)
  return true
}

let ok = true
const home = await renderPage('/src/App.vue')

if (locale === 'zh') {
  ok &&= expect(
    home,
    [
      'grad">异象',
      '内建插件',
      '35 个面向用户的内建插件',
      '面向用户',
      '召唤实验室',
      '自动出租车',
      '状态条',
      '999 夜脚本',
      '传送',
      '载具控制',
      '注入模式',
      '首次使用须知',
      'anomaly-runtime.log',
      '第三方插件安全提示',
      '在爱发电支持我',
      '主题与背景',
      '诊断 CLI'
    ],
    '中文首页'
  )
  const cards = (home.match(/class="plugin"/g) ?? []).length
  if (cards !== 35) {
    console.error(`✗ 内建插件卡片数 ${cards} ≠ 35`)
    ok = false
  } else {
    console.log('✓ 内建插件卡片 35 张（面向用户）')
  }
  ok &&= absent(home, ['Liquid Glass', '液态玻璃'], '中文首页无液态玻璃宣传')
  const promo = await renderPage('/src/promo/PromoPage.vue')
  ok &&= expect(promo, ['v2.6.0', 'Anomaly UI · Liquid Glass', '新旧对比'], '中文界面预览页')
} else {
  ok &&= expect(
    home,
    [
      'Summon Lab',
      'AutoTaxi',
      'Status Bar',
      '35 player-facing built-in plugins',
      'Night 999',
      'For players',
      'Vehicle Control',
      'inject mode',
      'first-run notice',
      'anomaly-runtime.log',
      'themes and backgrounds',
      'diagnostics CLI',
      'Support me on Ko-fi'
    ],
    '英文首页'
  )
  const cards = (home.match(/class="plugin"/g) ?? []).length
  if (cards !== 35) {
    console.error(`✗ 内建插件卡片数 ${cards} ≠ 35`)
    ok = false
  } else {
    console.log('✓ 内建插件卡片 35 张（player-facing）')
  }
  ok &&= absent(home, ['Liquid Glass', 'liquid glass'], '英文首页无液态玻璃宣传')
  const promo = await renderPage('/src/promo/PromoPage.vue')
  ok &&= expect(promo, ['v2.6.0', 'Anomaly UI · Liquid Glass', 'Before / after'], '英文界面预览页')
}

await server.close()
process.exit(ok ? 0 : 1)
