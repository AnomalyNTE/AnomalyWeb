<script setup>
import { risk } from '../data/site.js'
</script>

<template>
  <section class="wrap">
    <details class="notice notice-warn" open>
      <summary>{{ risk.summary }}</summary>
      <div class="notice-body">
        <p v-html="risk.p1"></p>
        <p v-html="risk.p2"></p>
      </div>
    </details>
  </section>
</template>
