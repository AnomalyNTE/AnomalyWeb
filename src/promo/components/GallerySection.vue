<script setup>
import { asset } from '../../data/site.js'
</script>

<template>
  <section id="gallery" class="section">
    <h2 v-reveal>插件，也是玻璃做的。</h2>
    <p v-reveal="{ delay: 0.05 }" class="sub">
      插件窗口直接浮在游戏画面上，背景透过来，界面仍然清楚。
    </p>

    <div v-reveal="{ delay: 0.1 }" class="duo">
      <figure>
        <img :src="asset('promo/img/old-gallery.webp')" alt="旧版插件窗口" />
        <figcaption>旧版</figcaption>
      </figure>
      <figure class="hl">
        <img :src="asset('promo/img/new-gallery.webp')" alt="新版插件窗口" />
        <figcaption>新版</figcaption>
      </figure>
    </div>
  </section>
</template>
