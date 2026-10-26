<script setup>
import { ref } from 'vue'
import LensTabs from './LensTabs.vue'

const segItems = [
  { key: 'installed', label: '已安装' },
  { key: 'available', label: '可用' },
  { key: 'updates', label: '更新' },
  { key: 'thirdparty', label: '第三方' }
]
const segment = ref('installed')

const dockItems = [
  { key: 'plugins', label: '插件', icon: '▦' },
  { key: 'diagnostics', label: '诊断', icon: '◫' },
  { key: 'settings', label: '设置', icon: '⚙' }
]
const dock = ref('plugins')

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
    <h2 v-reveal>每一个控件，都是一块玻璃。</h2>
    <p v-reveal="{ delay: 0.05 }" class="sub">
      选择镜片会被拉伸、会回弹，背景在它下面折射。动手试试。
    </p>

    <div class="demo-grid">
      <div v-reveal class="demo glass">
        <h3>分段控件</h3>
        <LensTabs v-model="segment" :items="segItems" variant="seg" aria-label="分段控件演示" />
        <p>镜片在选项之间滑动，移动时会被拉长。</p>
      </div>

      <div v-reveal="{ delay: 0.08 }" class="demo glass">
        <h3>开关</h3>
        <div class="switches">
          <label v-for="(item, index) in toggles" :key="index" class="sw">
            <input v-model="toggles[index]" type="checkbox" />
            <span></span>
          </label>
        </div>
        <p>所有复选框都换成了开关，按下时拇指会变宽。</p>
      </div>

      <div v-reveal="{ delay: 0.16 }" class="demo glass">
        <h3>滑块</h3>
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
        <p>拖动时拇指变成透明镜片，能看到下面的轨道。</p>
      </div>

      <div v-reveal="{ delay: 0.24 }" class="demo glass">
        <h3>浮动标签栏</h3>
        <LensTabs v-model="dock" :items="dockItems" variant="dock" aria-label="浮动标签栏演示" />
        <p>导航沉到底部，浮在内容上方。</p>
      </div>
    </div>
  </section>
</template>
