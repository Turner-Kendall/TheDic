<script setup>
import Header from './components/TheHeader.vue'

import Footer from './components/TheFooter.vue'
import { RouterView } from 'vue-router'
const siteData = 
  {
    title: 'The Dic Site',
    subtitle: 'by Turner Kendall',
    description: 'This is a little project I whipped up.  It is a dictionary essentailly, if it catches on I will open up the admin.',
    image: '/images/vic.webp',
    imageAlt: 'The Dic Site by Turner',
  }
</script>

<template>
  <Header />
  <!-- <section class="site-content">
    <HomeSection :siteData="siteData" />
  </section> -->
  <RouterView />
  <Footer />
</template>
