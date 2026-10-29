<script setup>
import { faq } from '../data/site.js'
</script>

<template>
  <section class="wrap section" id="faq">
    <header class="section-head">
      <h2>{{ faq.title }}</h2>
      <p v-html="faq.sub"></p>
    </header>
    <div class="faq">
      <details v-for="item in faq.items" :key="item.q">
        <summary v-html="item.q"></summary>
        <p v-html="item.a"></p>
      </details>
    </div>
  </section>
</template>
