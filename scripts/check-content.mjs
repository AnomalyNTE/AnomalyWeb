/**
 * 中英文案一致性校验：zh-CN.js 与 en.js 必须是同一棵树。
 *   node scripts/check-content.mjs
 *
 * 校验内容
 *   - 对象键集合完全一致（缺字段会渲染成空白，结构漂移会静默丢内容）
 *   - 数组长度一致，且每个下标的键集合一致
 *   - 交替段落（plugins / features / faq / install.steps / docs.cards 等）逐项对齐
 *   - 内建插件分组、名称不重复
 */

import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))
const load = (name) => import(new URL(`../src/data/content/${name}.js`, `file://${here}/`).href)

const zh = (await load('zh-CN')).default
const en = (await load('en')).default

const problems = []

/** 单边允许留空的字段路径（英文站没有中文名之类的语言差异） */
const OPTIONAL_BLANK = new Set(['root.meta.cnName'])

const walk = (a, b, path) => {
  if (Array.isArray(a) || Array.isArray(b)) {
    if (!Array.isArray(a) || !Array.isArray(b)) {
      problems.push(`${path}: 一边是数组另一边不是`)
      return
    }
    if (a.length !== b.length) {
      problems.push(`${path}: 长度 ${a.length} ≠ ${b.length}`)
    }
    const shared = Math.min(a.length, b.length)
    for (let i = 0; i < shared; i += 1) walk(a[i], b[i], `${path}[${i}]`)
    return
  }

  const plain = (v) => v !== null && typeof v === 'object'
  if (plain(a) || plain(b)) {
    if (!plain(a) || !plain(b)) {
      problems.push(`${path}: 一边是对象另一边不是`)
      return
    }
    const keys = new Set([...Object.keys(a), ...Object.keys(b)])
    for (const key of keys) {
      if (!(key in a)) problems.push(`${path}.${key}: 中文缺字段`)
      else if (!(key in b)) problems.push(`${path}.${key}: 英文缺字段`)
      else walk(a[key], b[key], `${path}.${key}`)
    }
    return
  }

  if (typeof a !== typeof b) problems.push(`${path}: 类型 ${typeof a} ≠ ${typeof b}`)
  // 两边都留空是有意的（例如英文站的 cnName、不需要换图的 altAlt），只有单边空才算漏译
  const optionalBlank = OPTIONAL_BLANK.has(path)
  if (!optionalBlank && typeof a === 'string' && !a.trim() && typeof b === 'string' && b.trim()) {
    problems.push(`${path}: 中文为空`)
  }
  if (!optionalBlank && typeof b === 'string' && !b.trim() && typeof a === 'string' && a.trim()) {
    problems.push(`${path}: 英文为空`)
  }
}

walk(zh, en, 'root')

const groupCount = (dict) =>
  dict.plugins.reduce((acc, plugin) => {
    acc[plugin.group] = (acc[plugin.group] ?? 0) + 1
    return acc
  }, {})

for (const [locale, dict] of [
  ['zh', zh],
  ['en', en]
]) {
  const names = dict.plugins.map((plugin) => plugin.name)
  const dupes = names.filter((name, index) => names.indexOf(name) !== index)
  if (dupes.length) problems.push(`${locale}: 插件名重复 → ${dupes.join(', ')}`)
  for (const plugin of dict.plugins) {
    if (!['user', 'developer'].includes(plugin.group)) {
      problems.push(`${locale}: 插件「${plugin.name}」分组非法 → ${plugin.group}`)
    }
    if (!dict.pluginsSection.groups[plugin.group]) {
      problems.push(`${locale}: 缺少分组标题 ${plugin.group}`)
    }
  }
}

const summary = `插件 zh=${zh.plugins.length}${JSON.stringify(groupCount(zh))} en=${en.plugins.length}${JSON.stringify(groupCount(en))}` +
  ` · 特性 ${zh.features.items.length} · FAQ ${zh.faq.items.length} · 步骤 ${zh.install.steps.length} · 文档卡片 ${zh.docs.cards.length}`

if (problems.length) {
  console.error(`✗ 发现 ${problems.length} 处不一致`)
  for (const problem of problems) console.error(`  - ${problem}`)
  process.exit(1)
}

console.log(`✓ 中英结构一致：${summary}`)
console.log(`  resolve: ${resolve(here, '../src/data/content')}`)
