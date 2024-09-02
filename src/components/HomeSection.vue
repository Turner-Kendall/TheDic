<template>
  <section class="home-section container-fluid container">

    <form id="handle-submit" class="justify-content-center" @submit.prevent="getDefinition">
      <label>Keep it simple. Don't search for "what is a woman" just search for "woman".</label>

      <input class="form-control form-input mt-1" 
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
        Get The Definition!
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
  // console.log(checkTerm(searchTerm.value))
  // try {
  //   result.value = search(searchTerm.value)
  // } catch (err) {
  //   console.log(err);
  // }
}

</script>
