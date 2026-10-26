<script setup>
import { docCards, links } from '../data/site.js'
</script>

<template>
  <section class="wrap section" id="docs">
    <header class="section-head">
      <h2>文档</h2>
      <p>全部文档托管在主仓库。</p>
    </header>

    <div class="grid grid-3">
      <a
        v-for="card in docCards"
        :key="card.title"
        class="card card-link"
        :href="card.url"
        target="_blank"
        rel="noreferrer"
      >
        <h3>{{ card.icon }} {{ card.title }}</h3>
        <p>{{ card.text }}</p>
      </a>
    </div>

    <p class="muted small">
      仓库内另有
      <a :href="links.architecture" target="_blank" rel="noreferrer">架构概览</a>
      与四个独立 SDK 示例，新插件仓库可从
      <a :href="links.template" target="_blank" rel="noreferrer">Anomaly 插件模板</a> 开始。
    </p>
  </section>
</template>
