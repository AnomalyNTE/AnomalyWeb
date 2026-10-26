<script setup>
import { features } from '../data/site.js'
</script>

<template>
  <section class="wrap section" id="features">
    <header class="section-head">
      <h2>核心特性</h2>
      <p>从安装、游戏内管理到插件框架，全链路打通。</p>
    </header>
    <div class="grid grid-3">
      <article v-for="feature in features" :key="feature.title" class="card">
        <h3>{{ feature.icon }} {{ feature.title }}</h3>
        <p>{{ feature.text }}</p>
      </article>
    </div>
  </section>
</template>
