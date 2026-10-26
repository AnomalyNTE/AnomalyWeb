<script setup>
import { asset, downloads, meta } from '../data/site.js'
</script>

<template>
  <section class="hero" id="top">
    <div class="hero-glow" aria-hidden="true"></div>
    <div class="wrap hero-inner">
      <div class="hero-text">
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
      <div class="hero-art" aria-hidden="true">
        <img :src="asset('logo.png')" alt="" width="360" height="360" />
      </div>
    </div>
  </section>
</template>
