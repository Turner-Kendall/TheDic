<template>
  <section class="home-section container-fluid container">

    <form id="handle-submit" class="justify-content-center" @submit.prevent="getDefinition">
      <label>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-through-heart-fill" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.854 15.854A.5.5 0 0 1 2 15.5V14H.5a.5.5 0 0 1-.354-.854l1.5-1.5A.5.5 0 0 1 2 11.5h1.793l3.103-3.104a.5.5 0 1 1 .708.708L4.5 12.207V14a.5.5 0 0 1-.146.354zM16 3.5a.5.5 0 0 1-.854.354L14 2.707l-1.006 1.006c.236.248.44.531.6.845.562 1.096.585 2.517-.213 4.092-.793 1.563-2.395 3.288-5.105 5.08L8 13.912l-.276-.182A24 24 0 0 1 5.8 12.323L8.31 9.81a1.5 1.5 0 0 0-2.122-2.122L3.657 10.22a9 9 0 0 1-1.039-1.57c-.798-1.576-.775-2.997-.213-4.093C3.426 2.565 6.18 1.809 8 3.233c1.25-.98 2.944-.928 4.212-.152L13.292 2 12.147.854A.5.5 0 0 1 12.5 0h3a.5.5 0 0 1 .5.5z"/>
        </svg>
        Keep it simple. Don't search for "what is a woman" just search for "woman".</label>

      <input class="form-control form-input mt-2" 
        required="required" 
        maxlength="64" 
        v-model="searchTerm" 
        type="search"
        placeholder="Search TheDic.site" 
        aria-label="Search"  
        pattern="[0-9a-zA-Z_.-]*" 
        @input="validateInput">
        
      <div class="invalid-feedback">This does not compute.</div>

      <button class="btn btn-primary d-flex align-items-center justify-content-between mt-2" type="submit">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journals" viewBox="0 0 16 16">
          <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2"/>
          <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0"/>
        </svg>  Get The Definition!
      </button>
    </form>

    <div id="results">

      <h4 v-if="result">
        The Results for <span class="link-secondary">{{ searchTerm }}</span>:
      </h4>

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
// import { HeartIcon } from '@/components/HeartIcon.vue'

const result = ref('')
const searchTerm = ref('')

const props = defineProps({
  siteData: {
    type: Object,
    required: true
  }
})

const validateInput = () => {
  const regex = /^[0-9a-zA-Z_.-]*$/;
  if (!regex.test(searchTerm.value)) {
    const inputField = document.querySelector('.form-input');
    inputField.setCustomValidity('Invalid field. Only alphanumeric characters, dots, underscores, and hyphens are allowed.');
  } else {
    const inputField = document.querySelector('.form-input');
    inputField.setCustomValidity('');
  }
};

const getDefinition = async () => {
  validateInput();
  if (!document.querySelector('#handle-submit').checkValidity()) {
    return;
  }

  try {
    result.value = search(searchTerm.value);
  } catch (err) {
    console.log(err);
  }
}

</script>
