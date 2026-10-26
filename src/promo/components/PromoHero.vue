<script setup>
import { ref } from 'vue'
import { asset, links } from '../../data/site.js'

const shot = ref(null)
const tilt = ref('')
const mx = ref('30%')
const my = ref('20%')

function onMove(event) {
  const el = shot.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  const x = (event.clientX - rect.left) / rect.width
  const y = (event.clientY - rect.top) / rect.height
  tilt.value = `perspective(1400px) rotateY(${(x - 0.5) * 6}deg) rotateX(${(0.5 - y) * 5}deg)`
  mx.value = `${x * 100}%`
  my.value = `${y * 100}%`
}

function onLeave() {
  tilt.value = ''
}

const jumps = [
  { href: '#compare', label: '新旧对比' },
  { href: '#glass', label: '液态玻璃' },
  { href: '#details', label: '细节' },
  { href: '#gallery', label: '插件画廊' }
]
</script>

<template>
  <header class="promo-hero">
    <p v-reveal class="promo-eyebrow">Anomaly UI · 全新设计</p>
    <h1 v-reveal="{ delay: 0.05 }">透过玻璃，<br /><span class="grad">看见你的世界。</span></h1>
    <p v-reveal="{ delay: 0.1 }" class="promo-lede">
      实时折射、柔和高光、会流动的选择镜片。<br />一套为游戏内覆盖层重新打造的 Liquid Glass 界面。
    </p>

    <div
      ref="shot"
      v-reveal="{ delay: 0.15 }"
      class="promo-hero-shot"
      :style="{ transform: tilt, '--mx': mx, '--my': my }"
      @pointermove="onMove"
      @pointerleave="onLeave"
    >
      <img :src="asset('promo/img/new-plugins.webp')" alt="Liquid Glass 版插件页" />
      <div class="shine"></div>
    </div>

    <nav v-reveal="{ delay: 0.2 }" class="promo-jump glass" aria-label="页内导航">
      <a v-for="item in jumps" :key="item.href" :href="item.href">{{ item.label }}</a>
    </nav>

    <div class="promo-scroll-hint">向下滚动</div>

    <p v-reveal="{ delay: 0.25 }" class="promo-hero-meta">
      现已在
      <a :href="links.repo" target="_blank" rel="noreferrer">Anomaly 主仓库</a>
      的 <code>feat/liquid-glass-ui</code> 分支开发。
    </p>
  </header>
</template>
