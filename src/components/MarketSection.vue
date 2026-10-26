<script setup>
import { links, marketPages } from '../data/site.js'
</script>

<template>
  <section class="wrap section" id="market">
    <header class="section-head">
      <h2>第三方插件</h2>
      <p>按 <kbd>Insert</kbd> 打开 <b>Plugins</b>，就能完成社区插件的日常管理。</p>
    </header>

    <div class="table-wrap">
      <table>
        <thead>
          <tr><th>页面</th><th>用来做什么</th></tr>
        </thead>
        <tbody>
          <tr v-for="row in marketPages" :key="row.page">
            <td><b>{{ row.page }}</b></td>
            <td>{{ row.desc }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="muted small">
      运行包预置了一个已启用的插件源，实际地址以 <code>Anomaly\plugin-repositories.json</code> 为准。
      也可以在界面中添加自己信任的 HTTPS 插件源。完整步骤见
      <a :href="links.thirdParty" target="_blank" rel="noreferrer">第三方插件文档</a>。
    </p>

    <details class="notice notice-caution">
      <summary>⚠️ 第三方插件安全提示</summary>
      <div class="notice-body">
        <p>
          第三方插件是会在游戏进程中运行的原生 DLL，不是受限脚本。插件列表和插件包目前没有发布者签名；
          Anomaly 会检查下载地址、ZIP 路径、Manifest、版本、游戏与 API 是否匹配，但这些检查不能证明插件本身安全。
          <strong>只安装你信任的来源和作者提供的插件。</strong>
        </p>
      </div>
    </details>
  </section>
</template>
