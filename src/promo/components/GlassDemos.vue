<script setup>
import { ref } from 'vue'
import LensTabs from './LensTabs.vue'
import { promo } from '../../data/site.js'

const copy = promo.glass
const segItems = copy.segItems
const segment = ref(segItems[0].key)

const dockItems = copy.dockItems
const dock = ref(dockItems[0].key)

const toggles = ref([true, false, true])

const value = ref(0.62)
const dragging = ref(false)
const slider = ref(null)

function setFromClientX(clientX) {
  const el = slider.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  value.value = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
}

function onPointerDown(event) {
  dragging.value = true
  slider.value?.setPointerCapture?.(event.pointerId)
  setFromClientX(event.clientX)
}

function onPointerMove(event) {
  if (!dragging.value) return
  setFromClientX(event.clientX)
}

function onPointerUp() {
  dragging.value = false
}
</script>

<template>
  <section id="glass" class="section">
    <h2 v-reveal>{{ copy.title }}</h2>
    <p v-reveal="{ delay: 0.05 }" class="sub">{{ copy.sub }}</p>

    <div class="demo-grid">
      <div v-reveal class="demo glass">
        <h3>{{ copy.seg.title }}</h3>
        <LensTabs v-model="segment" :items="segItems" variant="seg" :aria-label="copy.segAria" />
        <p>{{ copy.seg.text }}</p>
      </div>

      <div v-reveal="{ delay: 0.08 }" class="demo glass">
        <h3>{{ copy.switches.title }}</h3>
        <div class="switches">
          <label v-for="(item, index) in toggles" :key="index" class="sw">
            <input v-model="toggles[index]" type="checkbox" />
            <span></span>
          </label>
        </div>
        <p>{{ copy.switches.text }}</p>
      </div>

      <div v-reveal="{ delay: 0.16 }" class="demo glass">
        <h3>{{ copy.slider.title }}</h3>
        <div
          ref="slider"
          class="slider"
          :class="{ drag: dragging }"
          @pointerdown="onPointerDown"
          @pointermove="onPointerMove"
          @pointerup="onPointerUp"
          @pointercancel="onPointerUp"
        >
          <div class="fill" :style="{ width: value * 100 + '%' }"></div>
          <div class="thumb" :style="{ left: value * 100 + '%' }"></div>
        </div>
        <div class="val">{{ value.toFixed(2) }}</div>
        <p>{{ copy.slider.text }}</p>
      </div>

      <div v-reveal="{ delay: 0.24 }" class="demo glass">
        <h3>{{ copy.dock.title }}</h3>
        <LensTabs v-model="dock" :items="dockItems" variant="dock" :aria-label="copy.dockAria" />
        <p>{{ copy.dock.text }}</p>
      </div>
    </div>
  </section>
</template>
