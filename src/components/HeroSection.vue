<script setup>
import { asset, downloads, meta, pageRoot, promoTeaser } from '../data/site.js'

const promoHref = `${pageRoot}${promoTeaser.href}`
</script>

<template>
  <section class="hero" id="top">
    <div class="hero-glow" aria-hidden="true"></div>
    <div class="wrap hero-inner">
      <div class="hero-text">
        <a class="announce" :href="promoHref">
          <span class="announce-badge">{{ promoTeaser.announce.badge }}</span>
          <span class="announce-copy">
            <b>{{ promoTeaser.announce.title }}</b>
            <span>{{ promoTeaser.announce.text }}</span>
          </span>
          <span class="announce-cta">{{ promoTeaser.announce.cta }} →</span>
        </a>

        <h1>{{ meta.name }} <span class="grad">{{ meta.cnName }}</span></h1>
        <p class="tagline">{{ meta.tagline }}</p>
        <p class="lede">
          解压 Runtime，选中 <code>HTGame.exe</code> 所在目录即可安装；按 <kbd>Insert</kbd>
          呼出游戏内管理界面，启用内建插件、浏览社区插件、查看诊断状态，一个入口全部搞定。
        </p>

        <div class="cta">
          <a
            v-for="item in downloads"
            :key="item.key"
            class="btn"
            :class="item.key === 'github' ? 'btn-primary' : ''"
            :href="item.href"
            target="_blank"
            rel="noreferrer"
            :title="item.note"
          >
            {{ item.label }}
          </a>
        </div>
      </div>

      <div class="hero-art">
        <a class="hero-preview" :href="promoHref" :aria-label="promoTeaser.imageAlt">
          <img :src="asset(promoTeaser.image)" :alt="promoTeaser.imageAlt" width="1180" height="680" />
          <span class="hero-preview-tag">{{ promoTeaser.announce.badge }}</span>
          <span class="hero-preview-cta">{{ promoTeaser.announce.cta }} →</span>
        </a>
      </div>
    </div>
  </section>
</template>
