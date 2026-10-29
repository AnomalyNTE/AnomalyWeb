/**
 * 站点内容出口：按当前语言挑一份字典，再把组件常用的字段摊平导出。
 * 改文案不用翻组件 —— 中文改 content/zh-CN.js，英文改 content/en.js。
 *
 * 语言判定与站内跳转相关的逻辑都在 src/i18n.js：
 *   ?lang= > 本页 <html data-locale> > localStorage 偏好 > 浏览器语言
 */

import {
  entryHref,
  entryPath,
  locale,
  pageRoot,
  switchHref as switchHrefOf,
  switchLabel as switchLabelOf
} from '../i18n.js'
import { promoAssets } from './links.js'
import en from './content/en.js'
import zh from './content/zh-CN.js'

export const DICTIONARIES = { zh, en }

/** 当前语言的完整文案树 */
export const t = DICTIONARIES[locale] || DICTIONARIES.en

/** 与语言无关的链接常量（仍从这里转出，组件不必关心数据是怎么组织的） */
export { links } from './links.js'
export { locale, pageRoot }

/** 引用 public/ 下的资源：asset('logo.png')、asset('promo/img/new-plugins.webp') */
export const asset = (name) => `${pageRoot}${name}`

/** 跨语言/跨页面的入口地址，如 entry('promo') → './promo/' 或 '../en/promo/' */
export const entry = (page = 'home') => entryHref(locale, page)

/** 语言切换按钮的地址（指向另一种语言下的同一页面） */
export const switchHref = (page = 'home') => switchHrefOf(page, locale)

/** 语言切换按钮上显示的目标语言名（当前是中文站就显示 English，反之显示 中文） */
export const switchLabel = switchLabelOf(locale)

/** 切换按钮的提示文字与目标语言代码 */
export const switchTitle = t.switchTitle
export const switchCode = locale === 'en' ? 'zh' : 'en'

/* ---------- 摊平导出：组件里最常用的字段 ---------- */

export const meta = t.meta
export const ui = t.ui
export const navItems = t.nav
export const downloads = t.downloads
/** 预告配图是静态资源，语言无关，这里补上路径 */
export const promoTeaser = { image: promoAssets.hero, ...t.promoTeaser }
export const features = t.features
export const pluginsSection = t.pluginsSection
export const plugins = t.plugins
export const market = t.market
export const install = t.install
export const faq = t.faq
export const docs = t.docs
export const docCards = t.docs.cards
export const risk = t.risk
export const footer = t.footer
export const promo = t.promo

/**
 * 导航项 → 可放进 href 的地址。
 * 首页内的锚点就地跳；/promo/、/en/promo/ 上的导航锚点指向同语言首页的对应小节。
 */
export const navHref = (item, page = 'home') => {
  if (item.page) return entry(item.page)
  return page === 'home' ? item.href : `${entry('home')}${item.href}`
}

/** 版权行：字典里是带 {year} / {license} 占位的模板 */
export const copyright = (year = new Date().getFullYear()) =>
  t.footer.copyright.replace('{year}', String(year)).replace('{license}', meta.license)

export { entryPath }
