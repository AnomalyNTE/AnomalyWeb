<script setup>
import { computed, ref } from 'vue'
import { plugins } from '../data/site.js'

const query = ref('')

const normalized = plugins.map((plugin) => ({
  ...plugin,
  haystack: `${plugin.name} ${plugin.text} ${plugin.tags}`.toLowerCase()
}))

const filtered = computed(() => {
  const tokens = query.value.trim().toLowerCase().split(/\s+/).filter(Boolean)
  if (!tokens.length) return normalized
  return normalized.filter((plugin) => tokens.every((token) => plugin.haystack.includes(token)))
})
</script>

<template>
  <section class="wrap section" id="plugins">
    <header class="section-head">
      <h2>内建插件</h2>
      <p>随运行包提供，默认全部关闭。输入关键词可筛选，例如「相机」「自动」「ESP」。</p>
    </header>

    <div class="search">
      <input
        v-model="query"
        type="search"
        placeholder="搜索内建插件…"
        aria-label="搜索内建插件"
        autocomplete="off"
        @keydown.esc="query = ''"
      />
      <span class="count">{{ filtered.length }} / {{ plugins.length }}</span>
    </div>

    <div class="grid grid-3 plugin-grid">
      <article v-for="plugin in filtered" :key="plugin.name" class="plugin">
        <h3>{{ plugin.name }}</h3>
        <p>{{ plugin.text }}</p>
      </article>
    </div>

    <p v-if="!filtered.length" class="grid-empty">没有匹配的内建插件，换个关键词试试。</p>
  </section>
</template>
