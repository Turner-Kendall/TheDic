<template>
  <footer id="main-footer">
    <div class="container footer-wrapper">
      <div class="row">
        
        <div class="col-lg-3 col-md-6 col-sm-12">
          <h5>The Dic Site</h5>
          <ul class="list-unstyled">
            <li><a href="/">The Dic Site</a></li>
            <li><a href="https://github.com/Turner-Kendall/TheDic/blob/main/README.md">About This</a></li>
            <li><a href="https://turnerkendall.com/contact">Contact Me</a></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12">
          <h5>Test</h5>
          <ul class="list-unstyled">
            <li><a href="https://turnerkendall.com">Turner Kendall</a></li>
            <li><a href="https://x.com/tkendall_III">Me on X</a></li>
            <!-- <li><a href="https://kayso.com">Kayso Podcast</a></li> -->
            <li><a href="https://turnerkendall.com/page/link">More Links</a> </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12">
          <h5>Test</h5>
          <ul class="list-unstyled">
            <li><a @click="handlePrivacyClick">Privacy Policy</a></li>
            <li><a @click="handleTermsClick">Terms of Use</a></li>
            <li><a href="https://github.com/Turner-Kendall/TheDic">Get This Code</a></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12">
          <h5>Test</h5>
          <ul class="list-unstyled">
            <li><a href="https://app.addy.io/">Addy</a></li>
            <li><a href="https://www.jetbrains.com/lp/mono/">Jet Brains Mono</a></li>
            <li><a href="https://www.wptallahassee.com/">WP Tallahassee</a></li>
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
import Swal from "sweetalert2";
const data = ref({
  year: new Date().getFullYear(),
  link: "https://turnerkendall.com",
  site: "Turner Kendall",
  copy: "Some Rights Reserved.",
});

const handlePrivacyClick = async () => {
  Swal.fire({
    title: 'Privacy Policy',
    text: 'This site does not collect your data - It does not record searches, track you, set cookies or anything like that 😸',
    icon: 'question',
    confirmButtonText: 'Cool'
  }).then(() => {
    window.location.href = '/admin/manage';
  });
}

const handleTermsClick = async () => {
  Swal.fire({
    title: 'Terms of Service',
    text: 'You are free to use this service to search the dic; you can click the links in the footer as well 😸  All other uses are prohibited?',
    icon: 'info',
    confirmButtonText: 'Cool'
  }).then(() => {
    window.location.href = '/admin/manage';
  });
}




</script>
