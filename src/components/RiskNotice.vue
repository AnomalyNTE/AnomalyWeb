<script setup>
import { links } from '../data/site.js'
</script>

<template>
  <section class="wrap">
    <details class="notice notice-warn" open>
      <summary>⚠️ 免责声明与风险提示</summary>
      <div class="notice-body">
        <p>
          Anomaly 是<strong>面向研究、诊断与插件开发</strong>的工具，不得用于作弊行为。内存读写、hook、patch、
          实体扫描会修改或读取其他进程的运行状态，可能导致游戏崩溃、数据损坏或账号封禁。日志、崩溃转储、
          Profile 数据与诊断包<strong>可能包含敏感信息</strong>，分享前请审查并脱敏。
        </p>
        <p>
          根据<a :href="links.fairPlay" target="_blank" rel="noreferrer">《异环》公平游戏宣言</a>，
          严禁使用任何第三方工具破坏游戏公平性。<strong>您应充分了解并自愿承担使用本工具可能带来的所有风险。</strong>
        </p>
      </div>
    </details>
  </section>
</template>
