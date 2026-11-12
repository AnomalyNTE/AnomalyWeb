<script setup>
import { asset, downloads, meta, support, supportCopy } from '../data/site.js'

/**
 * Ko-fi 官方 Widget_2 内联按钮。
 * snippet 里的 kofiwidget2.draw() 内部是 document.writeln，只能落在脚本标签所在的解析位置，
 * 没法塞进 Vue 渲染的 hero 里；这里用同一份配置取 getHTML()，让按钮直接排在爱发电按钮右边。
 * Widget_2.js 在入口 HTML 里同步加载，模块脚本其后执行，所以此时 window.kofiwidget2 已就绪；
 * CDN 被挡或未加载时返回空串，模板回退成普通链接。
 */
const kofiEmbedHtml = (() => {
  const widget = typeof window === 'undefined' ? null : window.kofiwidget2
  if (!widget || typeof widget.getHTML !== 'function') return ''
  try {
    widget.init(supportCopy.kofiLabel, '#72a4f2', 'L1F621P7S2')
    // 按钮字体已强制跟随站点，官方那段 Google Fonts <link> 没有用处，去掉少一次外部请求
    return widget.getHTML().replace(/<link[^>]*fonts\.googleapis[^>]*>/i, '')
  } catch (error) {
    return ''
  }
})()
</script>

<template>
  <section class="hero" id="top">
    <div class="hero-glow" aria-hidden="true"></div>
    <div class="wrap hero-inner">
      <div class="hero-text">
        <h1>{{ meta.name }} <span v-if="meta.cnName" class="grad">{{ meta.cnName }}</span></h1>
        <p class="tagline">{{ meta.tagline }}</p>

        <div class="cta">
          <a
            v-for="item in downloads"
            :key="item.key"
            class="btn"
            :class="item.key === 'github' ? 'btn-primary' : ''"
            :href="item.href"
            target="_blank"
            rel="noreferrer"
            :title="item.note"
          >
            {{ item.label }}
          </a>
        </div>

        <div class="support">
          <span class="support-label">{{ supportCopy.label }}</span>
          <div class="support-links">
            <a
              class="support-btn support-btn-afdian"
              :href="support.afdian"
              target="_blank"
              rel="noreferrer"
              :title="supportCopy.afdian"
              :aria-label="supportCopy.afdian"
            >
              <img
                :src="asset(support.afdianIcon)"
                alt=""
                width="21"
                height="16"
                loading="lazy"
                decoding="async"
              />
              <span>{{ supportCopy.afdianLabel }}</span>
            </a>
            <span
              v-if="kofiEmbedHtml"
              class="support-kofi"
              :title="supportCopy.kofi"
              v-html="kofiEmbedHtml"
            ></span>
            <a
              v-else
              class="support-btn support-btn-kofi"
              :href="support.kofi"
              target="_blank"
              rel="noreferrer"
              :title="supportCopy.kofi"
              :aria-label="supportCopy.kofi"
            >
              <span>{{ supportCopy.kofiLabel }}</span>
            </a>
          </div>
        </div>
      </div>

      <div class="hero-art" aria-hidden="true">
        <img :src="asset('logo.png')" alt="" width="360" height="360" />
      </div>
    </div>
  </section>
</template>
