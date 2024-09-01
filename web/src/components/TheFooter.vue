<template>
  <footer id="main-footer">
    <div class="container footer-wrapper">
      <div class="row">
        <div v-for="section in footerSections" 
          :key="section.title" 
          class="col-lg-3 col-md-6 col-sm-12">
          <h5>{{ section.title }}</h5>
          <ul class="list-unstyled">
            <li v-for="link in section.links" :key="link.id">
              <a :href="link.link">{{ link.title }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="copyright-text">
      <p class="mt-2">&copy; {{ data.year }}
        The Dic Site by <a :href="data.link"> {{ data.site }}</a>
        {{ data.copy }}
      </p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { footerSections } from '../js/footerSections'
const data = ref({
  year: new Date().getFullYear(),
  link: "https://turnerkendall.com",
  site: "Turner Kendall",
  copy: "Some Rights Reserved.",
});
</script>
