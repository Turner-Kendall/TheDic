<template>
  <footer id="main-footer">
    <div class="container footer-wrapper">
      <div class="row">
        
        <div class="col-lg-3 col-md-6 col-sm-12">
          <h5>The Dic Site</h5>
          <ul class="list-unstyled">
            <li><a href="/">The Dic Site</a></li>
            <li><a target="_blank" href="https://github.com/Turner-Kendall/TheDic/blob/main/README.md">About This</a></li>
            <li><a href="https://turnerkendall.com/contact">Contact Me</a></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12">
          <h5>Turner Kendall</h5>
          <ul class="list-unstyled">
            <li><a href="https://turnerkendall.com">Turner Kendall</a></li>
            <li><a href="https://x.com/tkendall_III">Me on X</a></li>
            <!-- <li><a href="https://kayso.com">Kayso Podcast</a></li> -->
            <li><a href="https://turnerkendall.com/page/link">More Links</a> </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12">
          <h5>Deets</h5>
          <ul class="list-unstyled">
            <li><a @click="handlePrivacyClick">Privacy Policy</a></li>
            <li><a @click="handleTermsClick">Terms of Use</a></li>
            <li><a href="https://github.com/Turner-Kendall/TheDic">Get This Code</a></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12">
          <h5>External</h5>
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
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
          <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"/>
        </svg>
        {{ data.copy }}
      </p>
    </div>
  </footer>
</template>

<script setup>
import { data } from '@/js/utils'
import {handleTermsClick,  handlePrivacyClick} from '@/js/utils'
</script>
