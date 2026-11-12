<script setup>
import { asset, launcherShot } from '../data/site.js'
</script>

<template>
  <figure class="wrap launcher-shot">
    <img :src="asset(launcherShot.image)" :alt="launcherShot.alt" loading="lazy" decoding="async" />
    <figcaption>{{ launcherShot.caption }}</figcaption>
  </figure>
</template>
