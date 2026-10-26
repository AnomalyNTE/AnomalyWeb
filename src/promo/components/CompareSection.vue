<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import LensTabs from './LensTabs.vue'
import { asset } from '../../data/site.js'

const tabs = [
  { key: 'plugins', label: '插件' },
  { key: 'diagnostics', label: '诊断' },
  { key: 'settings', label: '设置' },
  { key: 'developer', label: '开发者' },
  { key: 'naiwa', label: '奶蛙主题' }
]

const active = ref('plugins') // 选中的标签
const shown = ref('plugins') // 当前实际显示的截图
const fading = ref(false)
const box = ref(null)
const position = ref(50)
const dragging = ref(false)

const newSrc = computed(() => asset(`promo/img/new-${shown.value}.webp`))
const oldSrc = computed(() => asset(`promo/img/old-${shown.value}.webp`))

let swapTimer = null
let fadeTimer = null

watch(active, (key) => {
  fading.value = true
  window.clearTimeout(swapTimer)
  window.clearTimeout(fadeTimer)
  // 淡出 → 换图 → 解码完成后淡入
  swapTimer = window.setTimeout(() => {
    shown.value = key
    const images = [newSrc.value, oldSrc.value].map((src) => {
      const img = new Image()
      img.src = src
      return img.decode().catch(() => {})
    })
    Promise.all(images).then(() => {
      fading.value = false
    })
  }, 280)
  // 兜底：解码卡住也要恢复可见
  fadeTimer = window.setTimeout(() => (fading.value = false), 1500)
})

/* ---------- 拖动对比 ---------- */
function setFromClientX(clientX) {
  const el = box.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  position.value = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100))
}

function onPointerDown(event) {
  dragging.value = true
  box.value?.setPointerCapture?.(event.pointerId)
  setFromClientX(event.clientX)
}

function onPointerMove(event) {
  if (!dragging.value) return
  setFromClientX(event.clientX)
}

function onPointerUp() {
  dragging.value = false
}

/* ---------- 首次进入视口时扫一遍 ---------- */
let observer = null
let raf = 0
let startTime = 0

function sweep(now) {
  const k = Math.min(1, (now - startTime) / 2200)
  if (!dragging.value) position.value = 50 + Math.sin(k * Math.PI * 2) * 32 * (1 - k)
  if (k < 1) raf = window.requestAnimationFrame(sweep)
}

onMounted(() => {
  // 预热其余截图，切换时不再等网络
  tabs.forEach((tab) => {
    new Image().src = asset(`promo/img/new-${tab.key}.webp`)
    new Image().src = asset(`promo/img/old-${tab.key}.webp`)
  })

  if (!('IntersectionObserver' in window) || !box.value) return
  observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        obs.disconnect()
        startTime = performance.now()
        raf = window.requestAnimationFrame(sweep)
      })
    },
    { threshold: 0.5 }
  )
  observer.observe(box.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  window.cancelAnimationFrame(raf)
  window.clearTimeout(swapTimer)
  window.clearTimeout(fadeTimer)
})
</script>

<template>
  <section id="compare" class="section">
    <h2 v-reveal>拖动，看看变化有多大。</h2>
    <p v-reveal="{ delay: 0.05 }" class="sub">左边是旧版，右边是全新的 Liquid Glass。</p>

    <LensTabs v-reveal="{ delay: 0.1 }" v-model="active" :items="tabs" variant="tabs" aria-label="对比项目" />

    <div
      ref="box"
      v-reveal="{ delay: 0.15 }"
      class="compare"
      :class="{ fading }"
      :style="{ '--p': position + '%' }"
      @pointerdown="onPointerDown"
      @pointermove="onPointerMove"
      @pointerup="onPointerUp"
      @pointercancel="onPointerUp"
    >
      <img class="c-new" :src="newSrc" alt="新版界面" />
      <div class="c-old-wrap"><img class="c-old" :src="oldSrc" alt="旧版界面" /></div>
      <span class="tag tag-old">旧版</span>
      <span class="tag tag-new">新版</span>
      <div class="handle"><div class="knob glass">⟷</div></div>
    </div>
  </section>
</template>
