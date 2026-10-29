<script setup>
import { asset, promo } from '../../data/site.js'

const copy = promo.details
const [search, topbar, theme] = copy.features
</script>

<template>
  <section id="details" class="section">
    <h2 v-reveal>{{ copy.title }}</h2>

    <div v-reveal class="feature">
      <div class="f-text">
        <h3>{{ search.title }}</h3>
        <p>{{ search.text }}</p>
      </div>
      <div class="f-shot hover-swap">
        <img :src="asset('promo/img/new-plugins.webp')" :alt="search.alt" />
        <img class="alt" :src="asset('promo/img/new-search.webp')" :alt="search.altAlt" />
        <span class="hint glass">{{ copy.hint }}</span>
      </div>
    </div>

    <div v-reveal class="feature rev">
      <div class="f-text">
        <h3>{{ topbar.title }}</h3>
        <p>{{ topbar.text }}</p>
      </div>
      <div class="f-shot spot" style="--x: 9.6%; --y: 10.6%; --w: 82%; --h: 6.4%">
        <img :src="asset('promo/img/new-plugins.webp')" :alt="topbar.alt" />
        <i></i>
      </div>
    </div>

    <div v-reveal class="feature">
      <div class="f-text">
        <h3>{{ theme.title }}</h3>
        <p>{{ theme.text }}</p>
      </div>
      <div class="f-shot">
        <img :src="asset('promo/img/new-naiwa.webp')" :alt="theme.alt" />
      </div>
    </div>

    <div v-reveal class="promo-video">
      <video
        controls
        playsinline
        preload="none"
        :poster="asset('promo/img/new-plugins.webp')"
      >
        <source :src="asset('promo/anomaly-liquid-glass.mp4')" type="video/mp4" />
        {{ copy.videoFallback }}
      </video>
    </div>
  </section>
</template>
