<script setup>
import { asset, entry, promoTeaser } from '../data/site.js'

const promoHref = entry('promo')
</script>

<template>
  <section class="wrap section" id="ui">
    <header class="section-head">
      <h2>{{ promoTeaser.eyebrow }}</h2>
      <p>{{ promoTeaser.sub }}</p>
    </header>

    <div class="teaser">
      <a class="teaser-art" :href="promoHref" :aria-label="promoTeaser.imageAlt">
        <img :src="asset(promoTeaser.image)" :alt="promoTeaser.imageAlt" loading="lazy" />
      </a>
      <div class="teaser-text">
        <h3>{{ promoTeaser.title }}</h3>
        <p>{{ promoTeaser.text }}</p>
        <ul class="teaser-list">
          <li v-for="point in promoTeaser.points" :key="point">{{ point }}</li>
        </ul>
        <a class="btn btn-primary" :href="promoHref">{{ promoTeaser.cta }}</a>
      </div>
    </div>
  </section>
</template>
