<script setup>
import { asset, promo } from '../../data/site.js'

const copy = promo.gallery
const shots = [
  { file: 'old-gallery', item: copy.items[0], highlight: false },
  { file: 'new-gallery', item: copy.items[1], highlight: true }
]
</script>

<template>
  <section id="gallery" class="section">
    <h2 v-reveal>{{ copy.title }}</h2>
    <p v-reveal="{ delay: 0.05 }" class="sub">{{ copy.sub }}</p>

    <div v-reveal="{ delay: 0.1 }" class="duo">
      <figure v-for="shot in shots" :key="shot.file" :class="{ hl: shot.highlight }">
        <img :src="asset(`promo/img/${shot.file}.webp`)" :alt="shot.item.alt" />
        <figcaption>{{ shot.item.caption }}</figcaption>
      </figure>
    </div>
  </section>
</template>
