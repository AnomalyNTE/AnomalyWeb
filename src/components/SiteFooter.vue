<script setup>
import { asset, copyright, footer, links, meta } from '../data/site.js'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="wrap footer-inner">
      <div class="footer-brand">
        <img :src="asset('favicon.png')" alt="" width="32" height="32" />
        <div>
          <strong>{{ meta.name }}<template v-if="meta.cnName"> {{ meta.cnName }}</template></strong>
          <p class="muted small">{{ meta.tagline }}</p>
        </div>
      </div>

      <div class="footer-links">
        <div>
          <h4>{{ footer.project }}</h4>
          <a :href="links.repo" target="_blank" rel="noreferrer">{{ footer.source }}</a>
          <a :href="links.releases" target="_blank" rel="noreferrer">{{ footer.releases }}</a>
          <a :href="links.license" target="_blank" rel="noreferrer">{{ footer.license }}</a>
          <a :href="links.notice" target="_blank" rel="noreferrer">{{ footer.notice }}</a>
        </div>
        <div>
          <h4>{{ footer.docs }}</h4>
          <a :href="links.userGuide" target="_blank" rel="noreferrer">{{ footer.userGuide }}</a>
          <a :href="links.developerGuide" target="_blank" rel="noreferrer">{{ footer.developerGuide }}</a>
          <a :href="links.apiReference" target="_blank" rel="noreferrer">{{ footer.apiReference }}</a>
        </div>
        <div>
          <h4>{{ footer.community }}</h4>
          <span class="muted small">{{ footer.qq }} {{ meta.qq }}</span>
          <a :href="links.issues" target="_blank" rel="noreferrer">{{ footer.issues }}</a>
        </div>
      </div>
    </div>

    <div class="wrap footer-bottom">
      <p class="muted small">{{ copyright(year) }}</p>
    </div>
  </footer>
</template>
