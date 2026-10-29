<script setup>
import { market } from '../data/site.js'
</script>

<template>
  <section class="wrap section" id="market">
    <header class="section-head">
      <h2>{{ market.title }}</h2>
      <p v-html="market.sub"></p>
    </header>

    <div class="table-wrap">
      <table>
        <thead>
          <tr><th>{{ market.colPage }}</th><th>{{ market.colUse }}</th></tr>
        </thead>
        <tbody>
          <tr v-for="row in market.rows" :key="row.page">
            <td><b>{{ row.page }}</b></td>
            <td>{{ row.desc }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="muted small" v-html="market.footnote"></p>

    <details class="notice notice-caution">
      <summary>{{ market.warningTitle }}</summary>
      <div class="notice-body">
        <p v-html="market.warning"></p>
      </div>
    </details>
  </section>
</template>
