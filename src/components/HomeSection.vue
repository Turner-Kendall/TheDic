<template>
  <section class="home-section container-fluid container">
    <code>Keep it simple. Don't search for "what is a woman" just search for "woman".</code>

    <form id="handle-submit" class="d-flex justify-content-center" @submit.prevent="getDef">
      <input class="form-control form-input" v-model="searchTerm" type="search" placeholder="Look it up!"
        aria-label="Search">
      <button class="btn btn-primary d-flex align-items-center justify-content-between" type="submit">
        GetIt!
      </button>
    </form>

    <div id="results">
      <h4 v-if="result">The Results for <span class="link-secondary">{{ searchTerm }}</span>: </h4>
      <transition name="fade">
        <ul v-if="result">
          <li v-for="r in result" class="mt-3">
            {{ r }}
          </li>
        </ul>
      </transition>
    </div>

  </section>
</template>


<script setup>
import { ref } from 'vue'
import { search } from '@/js/dicSearch';
const result = ref('')
const searchTerm = ref('')

const props = defineProps({
  siteData: {
    type: Object,
    required: true
  }
})

const show = ref(false);

const getDef = async () => {
  try {

    let x = search(searchTerm.value)
    console.log(x)
    result.value = x
  } catch (err) {
    console.log(err);
  }
}


</script>
