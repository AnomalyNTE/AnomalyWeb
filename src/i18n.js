/**
 * 站内语言：zh（简体中文，站点根目录）与 en（英文，/en/ 子目录）。
 *
 * 每份入口 HTML 在自己 <head> 里声明两件事：
 *   <html lang="en" data-locale="en">        —— 本页的语言
 *   <meta name="locale-switch" content="../"> —— 另一种语言下同一页面的地址
 * 内联的「语言引导」脚本会在首屏渲染前决定要不要跳转；本模块负责运行时的同一套判断，
 * 这样即使跳转被拦下（无 JS 跳转、隐私模式等），渲染出来的文案也与解析结果一致。
 */

export const LOCALES = ['zh', 'en']

/** 浏览器语言不在支持列表里时用哪种语言（站点面向全球，默认英文） */
export const FALLBACK_LOCALE = 'en'

const STORAGE_KEY = 'anomaly-lang'

/** 各语言下的页面入口，相对于站点根目录（与各 HTML 的 locale-switch 声明保持一致） */
export const ENTRIES = {
  zh: { home: '', promo: 'promo/' },
  en: { home: 'en/', promo: 'en/promo/' }
}

/** 站点根目录前缀：由各入口 HTML 的 <meta name="site-root"> 声明（首页 './'，/en/ 页 '../'…） */
export const pageRoot =
  (typeof document !== 'undefined' &&
    document.querySelector('meta[name="site-root"]')?.getAttribute('content')) ||
  '/'

/** 'zh-CN' / 'zh-TW' / 'en-US' → 'zh' / 'en'；不认识的语言返回 '' */
export function normalizeLocale(value) {
  const raw = String(value || '')
    .trim()
    .toLowerCase()
  if (!raw) return ''
  if (raw.startsWith('zh')) return 'zh'
  if (raw.startsWith('en')) return 'en'
  return ''
}

export function isLocale(value) {
  return LOCALES.includes(value)
}

/** 用户手动选过的语言（只有点击语言按钮或带 ?lang= 访问时才会写入） */
export function storedLocale() {
  try {
    return normalizeLocale(localStorage.getItem(STORAGE_KEY))
  } catch {
    return ''
  }
}

export function saveLocale(locale) {
  if (!isLocale(locale)) return
  try {
    localStorage.setItem(STORAGE_KEY, locale)
  } catch {
    /* 隐私模式下忽略 */
  }
}

/** 浏览器偏好：按 navigator.languages 顺序取第一个受支持的语言 */
export function detectLocale() {
  if (typeof navigator === 'undefined') return FALLBACK_LOCALE
  const list =
    navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || navigator.userLanguage]
  for (const item of list) {
    const locale = normalizeLocale(item)
    if (locale) return locale
  }
  return FALLBACK_LOCALE
}

/** 本页声明的语言：<html data-locale> 优先，其次 <html lang> */
export function pageLocale() {
  if (typeof document === 'undefined') return ''
  const el = document.documentElement
  return normalizeLocale(el?.getAttribute('data-locale')) || normalizeLocale(el?.getAttribute('lang'))
}

export function queryLocale() {
  if (typeof location === 'undefined') return ''
  try {
    return normalizeLocale(new URLSearchParams(location.search).get('lang'))
  } catch {
    return ''
  }
}

/** 实际生效的语言：?lang= > 本页声明 > 记住的偏好 > 浏览器语言 > 兜底 */
export function resolveLocale() {
  const fromQuery = queryLocale()
  if (fromQuery) {
    saveLocale(fromQuery)
    return fromQuery
  }
  return pageLocale() || storedLocale() || detectLocale() || FALLBACK_LOCALE
}

/** 当前渲染用的语言（构建时不涉及 DOM 的调用会落到兜底值） */
export const locale = resolveLocale()

export function otherLocale(value = locale) {
  return value === 'en' ? 'zh' : 'en'
}

/** 相对站点根目录的入口路径，如 entryPath('en', 'promo') === 'en/promo/' */
export function entryPath(target, page = 'home') {
  const table = ENTRIES[target] || ENTRIES[FALLBACK_LOCALE]
  return table[page] ?? table.home
}

/** 可直接放进 href 的入口地址（已带上站点根目录前缀） */
export function entryHref(target, page = 'home') {
  return `${pageRoot}${entryPath(target, page)}`
}

/**
 * 语言切换按钮的地址：指向另一种语言下的同一页面，并带上 ?lang=
 * 让内联引导脚本把它记成显式偏好（此后不再跟随浏览器语言自动跳转）。
 */
export function switchHref(page = 'home', from = locale) {
  const target = otherLocale(from)
  return `${entryHref(target, page)}?lang=${target}`
}

/** 页面上要显示的「另一种语言」名字 */
export function switchLabel(from = locale) {
  return from === 'en' ? '中文' : 'English'
}
