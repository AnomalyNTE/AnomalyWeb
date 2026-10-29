<script setup>
import { features } from '../data/site.js'
</script>

<template>
  <section class="wrap section" id="features">
    <header class="section-head">
      <h2>{{ features.title }}</h2>
      <p>{{ features.sub }}</p>
    </header>
    <div class="grid grid-3">
      <article v-for="feature in features.items" :key="feature.title" class="card">
        <h3>{{ feature.icon }} {{ feature.title }}</h3>
        <p>{{ feature.text }}</p>
      </article>
    </div>
  </section>
</template>
