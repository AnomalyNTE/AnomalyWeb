<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import LensTabs from './LensTabs.vue'
import { asset, promo } from '../../data/site.js'

const copy = promo.compare
const tabs = copy.tabs

const active = ref(tabs[0].key) // 选中的标签
const shown = ref(active.value) // 当前实际显示的截图
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
    <h2 v-reveal>{{ copy.title }}</h2>
    <p v-reveal="{ delay: 0.05 }" class="sub">{{ copy.sub }}</p>

    <LensTabs v-reveal="{ delay: 0.1 }" v-model="active" :items="tabs" variant="tabs" :aria-label="copy.tabsAria" />

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
      <img class="c-new" :src="newSrc" :alt="copy.newAlt" />
      <div class="c-old-wrap"><img class="c-old" :src="oldSrc" :alt="copy.oldAlt" /></div>
      <span class="tag tag-old">{{ copy.tagOld }}</span>
      <span class="tag tag-new">{{ copy.tagNew }}</span>
      <div class="handle"><div class="knob glass">⟷</div></div>
    </div>
  </section>
</template>
