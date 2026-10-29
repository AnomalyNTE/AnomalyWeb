<script setup>
import { install } from '../data/site.js'
</script>

<template>
  <section class="wrap section" id="install">
    <header class="section-head">
      <h2>{{ install.title }}</h2>
      <p>{{ install.sub }}</p>
    </header>

    <ol class="steps">
      <li v-for="step in install.steps" :key="step.title">
        <h3>{{ step.title }}</h3>
        <p v-html="step.html"></p>
      </li>
    </ol>

    <div class="two-col">
      <div class="card code-card">
        <h3>{{ install.directoryTitle }}</h3>
        <pre><code>Neverness To Everness\Client\WindowsNoEditor\HT\Binaries\Win64\</code></pre>
        <h3>{{ install.layoutTitle }}</h3>
        <pre><code>Win64\
  HTGame.exe
  dwmapi.dll
  Anomaly\
    Anomaly.Core.dll</code></pre>
        <p class="muted small" v-html="install.directoryNote"></p>
      </div>
      <div class="card code-card">
        <h3>{{ install.buildTitle }}</h3>
        <pre><code>.\build.cmd</code></pre>
        <p class="muted small" v-html="install.buildNote"></p>
      </div>
    </div>
  </section>
</template>
