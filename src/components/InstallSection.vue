<script setup>
import { steps } from '../data/site.js'
</script>

<template>
  <section class="wrap section" id="install">
    <header class="section-head">
      <h2>快速上手</h2>
      <p>普通用户无需构建源码，下载 Runtime 并按下面四步走即可。</p>
    </header>

    <ol class="steps">
      <li v-for="step in steps" :key="step.title">
        <h3>{{ step.title }}</h3>
        <p v-html="step.html"></p>
      </li>
    </ol>

    <div class="two-col">
      <div class="card code-card">
        <h3>游戏目录</h3>
        <pre><code>Neverness To Everness\Client\WindowsNoEditor\HT\Binaries\Win64\</code></pre>
        <h3>安装后结构</h3>
        <pre><code>Win64\
  HTGame.exe
  dwmapi.dll
  Anomaly\
    Anomaly.Core.dll</code></pre>
        <p class="muted small">启动器本体不需要复制进游戏目录；更新时把新版 Runtime 解压到新文件夹再点<b>更新</b>。</p>
      </div>
      <div class="card code-card">
        <h3>从源码构建（开发者）</h3>
        <pre><code>.\build.cmd</code></pre>
        <p class="muted small">
          <code>build.cmd</code> 是唯一受支持构建路径（CMake Preset <code>windows-vs2022</code> +
          <code>windows-relwithdebinfo</code>）的薄包装器；开发夹具、诊断探针与 PDB 用
          <code>build.cmd fixtures|probes|symbols</code> 按需开启。
        </p>
      </div>
    </div>
  </section>
</template>
