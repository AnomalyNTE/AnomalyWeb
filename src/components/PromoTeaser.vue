<script setup>
import { asset, pageRoot, promoTeaser } from '../data/site.js'
</script>

<template>
  <section class="wrap section" id="ui">
    <header class="section-head">
      <h2>{{ promoTeaser.eyebrow }}</h2>
      <p>为游戏内覆盖层重新打造的一套 Liquid Glass 界面。</p>
    </header>

    <div class="teaser">
      <a class="teaser-art" :href="pageRoot + promoTeaser.href" :aria-label="`打开${promoTeaser.imageAlt}`">
        <img :src="asset(promoTeaser.image)" :alt="promoTeaser.imageAlt" loading="lazy" />
      </a>
      <div class="teaser-text">
        <h3>{{ promoTeaser.title }}</h3>
        <p>{{ promoTeaser.text }}</p>
        <ul class="teaser-list">
          <li>新旧版逐项对比，可拖动分割线</li>
          <li>分段控件、开关、滑块、浮动标签栏都能直接试玩</li>
          <li>背景图、配色与贴纸系统全部保留</li>
        </ul>
        <a class="btn btn-primary" :href="pageRoot + promoTeaser.href">查看界面预览</a>
      </div>
    </div>
  </section>
</template>
