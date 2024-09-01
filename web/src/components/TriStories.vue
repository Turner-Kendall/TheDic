<template>
  <section class="tri-stories" id="what">
    <div class="container">
      <div class="tri-stories-wrapper">
        
        <LatestTweets />

        <div class="row">
          <div v-for="data in triStoriesData" :key="data.title" class="col-lg-4">
            <div class="tri-features text-center">
              <div class="tri-features-img">
                <a :href="data.link">
                <img :src="data.image" :alt="data.title" class="half">
                </a>
              </div>
              <div class="tri-features-content">
                <h3 class="tri-title">{{ data.title }}</h3>
                <p class="mb-0">{{ data.description }}</p>
                <a :href="data.link" class="btn btn-primary mt-3">
                  {{ data.text }}
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup>
import { triStoriesData } from '../js/TriStoriesData';
import LatestTweets from './LatestTweets.vue'
</script>
