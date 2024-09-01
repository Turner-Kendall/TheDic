<template>
  <section class="home-section container-fluid container">
    <code>Pro-Tips:  Keep it simple. Don't search for "what is a woman" just search for "woman".</code>

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
          <li v-for="r in result.result" class="mt-3">
            {{ r }}
          </li>
        </ul>
      </transition>
    </div>

    <!-- <TriStories />
    <LeadStory /> -->

  </section>
</template>

<style>
h4 {
  padding-bottom: 10px;
  padding-top: 5px;
}

#handle-submit,
#results {
  margin: 10px;
}

#results {
  margin-top: 35px;
  margin-left: 15px;
}

.form-input {
  margin-right: 10px;
  background-color: #14151a;
  border: 2px solid #282a36;
}
</style>

<script setup>
import { ref, onMounted } from 'vue'
import { defineProps } from 'vue'
import TriStories from './TriStories.vue'
import LeadStory from './LeadStory.vue'

const theLinks = ref({})
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

    let lower_case_term = searchTerm.value.toLowerCase();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        term: lower_case_term,
      }),
    };

    const response = await fetch(
      "http://localhost:3030/info",
      requestOptions
    );

    const data = await response.json();
    // console.log(data)
    result.value = data
  } catch (err) {
    console.log(err);
  }
}


</script>
