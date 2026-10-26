import { createApp } from 'vue'
import PromoPage from './PromoPage.vue'
import '../style.css'
import './promo.css'

/** v-reveal：元素进入视口时淡入上浮（可用 v-reveal="{ delay: 0.1 }" 错峰） */
const reveal = {
  mounted(el, binding) {
    el.classList.add('reveal')
    const delay = binding.value?.delay
    if (typeof delay === 'number') el.style.transitionDelay = `${delay}s`
    if (!('IntersectionObserver' in window)) {
      el.classList.add('in')
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          el.classList.add('in')
          io.unobserve(el)
        })
      },
      { threshold: 0.15 }
    )
    io.observe(el)
    el.__reveal = io
  },
  unmounted(el) {
    el.__reveal?.disconnect()
  }
}

const app = createApp(PromoPage)
app.directive('reveal', reveal)
app.mount('#app')
