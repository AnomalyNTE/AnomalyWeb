<script setup>
import { computed, ref } from 'vue'
import { plugins, pluginsSection } from '../data/site.js'

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
      <h2>{{ pluginsSection.title }}</h2>
      <p>{{ pluginsSection.sub }}</p>
    </header>

    <div class="search">
      <input
        v-model="query"
        type="search"
        :placeholder="pluginsSection.placeholder"
        :aria-label="pluginsSection.searchAria"
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

    <p v-if="!filtered.length" class="grid-empty">{{ pluginsSection.empty }}</p>
  </section>
</template>
