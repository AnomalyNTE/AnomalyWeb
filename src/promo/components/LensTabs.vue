<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps({
  /** [{ key, label, icon? }] */
  items: { type: Array, required: true },
  modelValue: { type: String, required: true },
  /** 'tabs' | 'seg' | 'dock' */
  variant: { type: String, default: 'seg' },
  ariaLabel: { type: String, default: '' }
})

const emit = defineEmits(['update:modelValue'])

const root = ref(null)
const lens = ref(null)
const buttons = ref([])

/** 把镜片挪到当前按钮下方；animate=false 时直接定位（首次渲染/窗口尺寸变化） */
function place(animate = true) {
  const host = root.value
  const lensEl = lens.value
  if (!host || !lensEl) return

  const index = Math.max(0, props.items.findIndex((item) => item.key === props.modelValue))
  const btn = buttons.value[index]
  if (!btn) return

  const hostRect = host.getBoundingClientRect()
  const btnRect = btn.getBoundingClientRect()

  if (!animate) {
    lensEl.style.transition = 'none'
    lensEl.style.left = `${btnRect.left - hostRect.left}px`
    lensEl.style.width = `${btnRect.width}px`
    void lensEl.offsetWidth
    lensEl.style.transition = ''
    return
  }
  lensEl.style.left = `${btnRect.left - hostRect.left}px`
  lensEl.style.width = `${btnRect.width}px`
}

async function pick(item) {
  if (item.key === props.modelValue) return
  emit('update:modelValue', item.key)
  lens.value?.classList.add('stretch')
  window.setTimeout(() => lens.value?.classList.remove('stretch'), 260)
  await nextTick()
  place(true)
}

const onResize = () => place(false)

onMounted(() => {
  place(false)
  window.addEventListener('resize', onResize)
  document.fonts?.ready.then(() => place(false)).catch(() => {})
})

onBeforeUnmount(() => window.removeEventListener('resize', onResize))

watch(
  () => props.modelValue,
  async () => {
    await nextTick()
    place(true)
  }
)
</script>

<template>
  <div ref="root" :class="variant" role="tablist" :aria-label="ariaLabel">
    <span ref="lens" :class="variant === 'tabs' ? 'pill' : 'lens'" aria-hidden="true"></span>
    <button
      v-for="item in items"
      :key="item.key"
      ref="buttons"
      type="button"
      role="tab"
      :aria-selected="item.key === modelValue"
      :class="{ on: item.key === modelValue }"
      @click="pick(item)"
    >
      <i v-if="item.icon">{{ item.icon }}</i>
      <span v-if="item.label">{{ item.label }}</span>
    </button>
  </div>
</template>
