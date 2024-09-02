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
        {{ data.copy }}
      </p>
    </div>
  </footer>
</template>

<script setup>
import { data } from '@/js/utils'
import {handleTermsClick,  handlePrivacyClick} from '@/js/utils'
</script>
