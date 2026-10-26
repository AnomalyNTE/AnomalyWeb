<script setup>
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import RiskNotice from './components/RiskNotice.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import PluginsSection from './components/PluginsSection.vue'
import MarketSection from './components/MarketSection.vue'
import InstallSection from './components/InstallSection.vue'
import FaqSection from './components/FaqSection.vue'
import DocsSection from './components/DocsSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <a class="skip" href="#main">跳到主要内容</a>
  <SiteHeader />
  <main id="main">
    <HeroSection />
    <RiskNotice />
    <FeaturesSection />
    <PluginsSection />
    <MarketSection />
    <InstallSection />
    <FaqSection />
    <DocsSection />
  </main>
  <SiteFooter />
</template>
