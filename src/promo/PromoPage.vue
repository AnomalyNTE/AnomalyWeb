<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import PromoHero from './components/PromoHero.vue'
import CompareSection from './components/CompareSection.vue'
import GlassDemos from './components/GlassDemos.vue'
import DetailsSection from './components/DetailsSection.vue'
import GallerySection from './components/GallerySection.vue'
import { asset, links, pageRoot } from '../data/site.js'

const blur = ref(0)
let ticking = false

function onScroll() {
  if (ticking) return
  ticking = true
  window.requestAnimationFrame(() => {
    // 滚过首屏后壁纸逐渐模糊成面纱
    blur.value = Math.min(1, window.scrollY / window.innerHeight) * 18
    ticking = false
  })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <div class="promo">
    <div class="promo-bg" aria-hidden="true">
      <img :src="asset('promo/img/wallpaper.webp')" alt="" />
    </div>
    <div class="promo-veil" :style="{ '--blur': blur.toFixed(1) + 'px' }" aria-hidden="true"></div>

    <SiteHeader current="promo" :theme-toggle="false" />

    <main>
      <PromoHero />
      <CompareSection />
      <GlassDemos />
      <DetailsSection />
      <GallerySection />

      <section class="end">
        <h2 v-reveal><span class="grad">Anomaly</span> Liquid Glass</h2>
        <p v-reveal="{ delay: 0.05 }">现已在 <code>feat/liquid-glass-ui</code> 分支。</p>
        <div v-reveal="{ delay: 0.1 }" class="end-links">
          <a :href="pageRoot">返回官网首页</a>
          <a :href="pageRoot + '#plugins'">内建插件</a>
          <a :href="links.repo" target="_blank" rel="noreferrer">源码仓库</a>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>
