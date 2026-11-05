<script setup>
import { computed, ref } from 'vue'
import { plugins, pluginsSection } from '../data/site.js'

/** 分组展示顺序：面向用户的插件在前，开发者模式调试插件在后 */
const GROUP_ORDER = ['user', 'developer']

const query = ref('')

const normalized = plugins.map((plugin) => ({
  ...plugin,
  haystack: `${plugin.name} ${plugin.text} ${plugin.tags}`.toLowerCase()
}))

const groups = computed(() => {
  const tokens = query.value.trim().toLowerCase().split(/\s+/).filter(Boolean)
  const matches = (plugin) => !tokens.length || tokens.every((token) => plugin.haystack.includes(token))

  return GROUP_ORDER.map((key) => {
    const all = normalized.filter((plugin) => plugin.group === key)
    return {
      key,
      title: pluginsSection.groups[key],
      note: pluginsSection.groupNotes[key],
      total: all.length,
      items: all.filter(matches)
    }
  }).filter((group) => group.items.length || !tokens.length)
})

const total = normalized.length
const shown = computed(() => groups.value.reduce((sum, group) => sum + group.items.length, 0))
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
      <span class="count">{{ shown }} / {{ total }}</span>
    </div>

    <div v-for="group in groups" :key="group.key" class="plugin-group">
      <h3 class="plugin-group-title">
        {{ group.title }}
        <span class="count">{{ group.items.length }} / {{ group.total }}</span>
      </h3>
      <p class="plugin-group-note">{{ group.note }}</p>

      <div class="grid grid-3 plugin-grid">
        <article v-for="plugin in group.items" :key="plugin.name" class="plugin">
          <h3>{{ plugin.name }}</h3>
          <p>{{ plugin.text }}</p>
        </article>
      </div>
    </div>

    <p v-if="!shown" class="grid-empty">{{ pluginsSection.empty }}</p>
  </section>
</template>
