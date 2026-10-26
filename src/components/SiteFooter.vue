<script setup>
import { asset, links, meta } from '../data/site.js'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="wrap footer-inner">
      <div class="footer-brand">
        <img :src="asset('favicon.png')" alt="" width="32" height="32" />
        <div>
          <strong>Anomaly {{ meta.cnName }}</strong>
          <p class="muted small">{{ meta.tagline }}</p>
        </div>
      </div>

      <div class="footer-links">
        <div>
          <h4>项目</h4>
          <a :href="links.repo" target="_blank" rel="noreferrer">源码仓库</a>
          <a :href="links.releases" target="_blank" rel="noreferrer">发布页</a>
          <a :href="links.license" target="_blank" rel="noreferrer">许可证</a>
          <a :href="links.notice" target="_blank" rel="noreferrer">NOTICE</a>
        </div>
        <div>
          <h4>文档</h4>
          <a :href="links.userGuide" target="_blank" rel="noreferrer">用户文档</a>
          <a :href="links.developerGuide" target="_blank" rel="noreferrer">开发者文档</a>
          <a :href="links.apiReference" target="_blank" rel="noreferrer">API 参考</a>
        </div>
        <div>
          <h4>社区</h4>
          <span class="muted small">QQ 群 {{ meta.qq }}</span>
          <a :href="links.issues" target="_blank" rel="noreferrer">问题反馈</a>
        </div>
      </div>
    </div>

    <div class="wrap footer-bottom">
      <p class="muted small">
        © {{ year }} AnomalyNTE · 以 GNU Affero General Public License v3.0（{{ meta.license }}）分发.
      </p>
    </div>
  </footer>
</template>
