<script setup>
import { asset } from '../../data/site.js'
</script>

<template>
  <section id="details" class="section">
    <h2 v-reveal>藏在细节里。</h2>

    <div v-reveal class="feature">
      <div class="f-text">
        <h3>搜索，只在需要时出现</h3>
        <p>平时只是一个放大镜。指针靠近，搜索框向左展开。</p>
      </div>
      <div class="f-shot hover-swap">
        <img :src="asset('promo/img/new-plugins.webp')" alt="插件页" />
        <img class="alt" :src="asset('promo/img/new-search.webp')" alt="搜索框展开" />
        <span class="hint glass">把鼠标移到这里</span>
      </div>
    </div>

    <div v-reveal class="feature rev">
      <div class="f-text">
        <h3>一行顶栏</h3>
        <p>标签、搜索、筛选、排序收进同一行，内容区更大。</p>
      </div>
      <div class="f-shot spot" style="--x: 9.6%; --y: 10.6%; --w: 82%; --h: 6.4%">
        <img :src="asset('promo/img/new-plugins.webp')" alt="顶栏高亮" />
        <i></i>
      </div>
    </div>

    <div v-reveal class="feature">
      <div class="f-text">
        <h3>主题依然由你决定</h3>
        <p>自定义背景、配色和贴纸系统全部保留。奶蛙主题也换上了玻璃。</p>
      </div>
      <div class="f-shot">
        <img :src="asset('promo/img/new-naiwa.webp')" alt="奶蛙主题" />
      </div>
    </div>

    <div v-reveal class="promo-video">
      <video
        controls
        playsinline
        preload="none"
        :poster="asset('promo/img/new-plugins.webp')"
      >
        <source :src="asset('promo/anomaly-liquid-glass.mp4')" type="video/mp4" />
        你的浏览器不支持内嵌视频播放。
      </video>
    </div>
  </section>
</template>
