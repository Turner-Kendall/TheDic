<script setup>
import Header from './components/TheHeader.vue'
import HomeSection from './components/HomeSection.vue'
import Footer from './components/TheFooter.vue'
import { siteData } from './js/utils'
</script>

<template>
  <Header />
  <section class="site-content">
    <HomeSection :siteData="siteData" />
  </section>
  <Footer />
</template>
