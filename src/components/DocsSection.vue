<script setup>
import { docCards, docs } from '../data/site.js'
</script>

<template>
  <section class="wrap section" id="docs">
    <header class="section-head">
      <h2>{{ docs.title }}</h2>
      <p>{{ docs.sub }}</p>
    </header>

    <div class="grid grid-3">
      <a
        v-for="card in docCards"
        :key="card.title"
        class="card card-link"
        :href="card.url"
        target="_blank"
        rel="noreferrer"
      >
        <h3>{{ card.icon }} {{ card.title }}</h3>
        <p>{{ card.text }}</p>
      </a>
    </div>

    <p class="muted small" v-html="docs.footnote"></p>
  </section>
</template>
