<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import PromoHero from './components/PromoHero.vue'
import CompareSection from './components/CompareSection.vue'
import GlassDemos from './components/GlassDemos.vue'
import DetailsSection from './components/DetailsSection.vue'
import GallerySection from './components/GallerySection.vue'
import { asset, entry, links, promo } from '../data/site.js'

const homeHref = entry('home')
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
        <h2 v-reveal v-html="promo.end.title"></h2>
        <p v-reveal="{ delay: 0.05 }" v-html="promo.end.text"></p>
        <div v-reveal="{ delay: 0.1 }" class="end-links">
          <a :href="homeHref">{{ promo.end.home }}</a>
          <a :href="homeHref + '#plugins'">{{ promo.end.plugins }}</a>
          <a :href="links.repo" target="_blank" rel="noreferrer">{{ promo.end.repo }}</a>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>
