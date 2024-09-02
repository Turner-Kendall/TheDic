<script setup>
import Header from './components/TheHeader.vue'
import HomeSection from './components/HomeSection.vue'
import Footer from './components/TheFooter.vue'
const siteData = 
  {
    title: 'The Dic Site',
    subtitle: 'by Turner Kendall',
    description: 'This is a simple little project I whipped up.  It is a dictionary essentailly...',
    image: '/images/theDic.webp',
    imageAlt: 'The Dic Site by Turner',
  }
</script>

<template>
  <Header />
  <section class="site-content">
    <HomeSection :siteData="siteData" />
  </section>
  <Footer />
</template>
