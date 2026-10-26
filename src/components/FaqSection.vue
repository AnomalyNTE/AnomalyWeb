<script setup>
import { faqs, links } from '../data/site.js'
</script>

<template>
  <section class="wrap section" id="faq">
    <header class="section-head">
      <h2>常见问题</h2>
      <p>
        更多问题见<a :href="links.troubleshooting" target="_blank" rel="noreferrer">故障排查与 FAQ</a>。
      </p>
    </header>
    <div class="faq">
      <details v-for="item in faqs" :key="item.q">
        <summary v-html="item.q"></summary>
        <p v-html="item.a"></p>
      </details>
    </div>
  </section>
</template>
