<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import {
  asset,
  links,
  meta,
  navHref,
  navItems,
  pageRoot,
  switchCode,
  switchHref,
  switchLabel,
  switchTitle,
  ui
} from '../data/site.js'

const props = defineProps({
  /** 当前页面标识：'home' | 'promo'（同时用于语言切换时的同名页面跳转） */
  current: { type: String, default: 'home' },
  /** /promo 页固定深色玻璃风格，不显示主题开关 */
  themeToggle: { type: Boolean, default: true }
})

const theme = ref('dark')
const active = ref('')
const progress = ref(0)
const STORAGE_KEY = 'anomaly-theme'

const sectionItems = navItems.filter((item) => item.href?.startsWith('#'))

function applyTheme(next) {
  theme.value = next
  document.documentElement.setAttribute('data-theme', next)
  const color = next === 'light' ? '#f7f8fb' : '#0b0e14'
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', color)
  try {
    localStorage.setItem(STORAGE_KEY, next)
  } catch {
    /* 隐私模式下忽略 */
  }
}

function toggleTheme() {
  applyTheme(theme.value === 'light' ? 'dark' : 'light')
}

let ticking = false

function onScroll() {
  const doc = document.documentElement
  const max = doc.scrollHeight - window.innerHeight
  progress.value = max > 0 ? (window.scrollY / max) * 100 : 0

  const line = window.scrollY + 96
  let current = ''
  for (const item of sectionItems) {
    const el = document.querySelector(item.href)
    if (el && el.offsetTop <= line) current = item.href
  }
  active.value = current
}

function scheduleScroll() {
  if (ticking) return
  ticking = true
  window.requestAnimationFrame(() => {
    onScroll()
    ticking = false
  })
}

onMounted(() => {
  if (props.themeToggle) {
    const query = (new URLSearchParams(location.search).get('theme') || '').toLowerCase()
    let saved = null
    try {
      saved = localStorage.getItem(STORAGE_KEY)
    } catch {
      /* ignore */
    }
    if (query === 'dark' || query === 'light') saved = query
    const prefersLight =
      saved === 'light' ||
      (!saved && window.matchMedia?.('(prefers-color-scheme: light)').matches)
    applyTheme(prefersLight ? 'light' : 'dark')
  }

  window.addEventListener('scroll', scheduleScroll, { passive: true })
  window.addEventListener('resize', scheduleScroll)
  onScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', scheduleScroll)
  window.removeEventListener('resize', scheduleScroll)
})
</script>

<template>
  <header class="topbar">
    <div class="wrap topbar-inner">
      <a class="brand" :href="pageRoot">
        <img :src="asset('favicon.png')" alt="" width="28" height="28" />
        <span>{{ meta.name }} <b v-if="meta.cnName">{{ meta.cnName }}</b></span>
      </a>

      <nav class="nav" :aria-label="ui.navAria">
        <a
          v-for="item in navItems"
          :key="item.page || item.href"
          :href="navHref(item, current)"
          :class="{
            active: item.page ? item.page === current : active === item.href,
            'nav-accent': item.page
          }"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="topbar-actions">
        <a
          class="icon-btn lang-btn"
          :href="switchHref(current)"
          :hreflang="switchCode"
          :title="switchTitle"
          :aria-label="switchTitle"
        >
          {{ switchLabel }}
        </a>
        <button
          v-if="themeToggle"
          class="icon-btn"
          type="button"
          :aria-label="theme === 'light' ? ui.themeToDark : ui.themeToLight"
          :title="ui.themeTitle"
          @click="toggleTheme"
        >
          ◐
        </button>
        <a class="btn btn-ghost btn-sm" :href="links.repo" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </div>
    <div class="progress" :style="{ width: progress + '%' }" aria-hidden="true"></div>
  </header>
</template>
