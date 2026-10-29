<script setup>
import { ref } from 'vue'
import { asset, promo } from '../../data/site.js'

const copy = promo.hero

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
</script>

<template>
  <header class="promo-hero">
    <p v-reveal class="promo-eyebrow">{{ copy.eyebrow }}</p>
    <h1 v-reveal="{ delay: 0.05 }" v-html="copy.title"></h1>
    <p v-reveal="{ delay: 0.1 }" class="promo-lede" v-html="copy.lede"></p>

    <div
      ref="shot"
      v-reveal="{ delay: 0.15 }"
      class="promo-hero-shot"
      :style="{ transform: tilt, '--mx': mx, '--my': my }"
      @pointermove="onMove"
      @pointerleave="onLeave"
    >
      <img :src="asset('promo/img/new-plugins.webp')" :alt="copy.shotAlt" />
      <div class="shine"></div>
    </div>

    <nav v-reveal="{ delay: 0.2 }" class="promo-jump glass" :aria-label="copy.jumpAria">
      <a v-for="item in copy.jumps" :key="item.href" :href="item.href">{{ item.label }}</a>
    </nav>

    <div class="promo-scroll-hint">{{ copy.scrollHint }}</div>

    <p v-reveal="{ delay: 0.25 }" class="promo-hero-meta" v-html="copy.meta"></p>
  </header>
</template>
