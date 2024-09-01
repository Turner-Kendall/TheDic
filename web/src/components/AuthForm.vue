<script setup>
import { shallowRef, computed } from "vue";
import { useRouter } from "vue-router";
import {
  useFetch,
  hasErrorOccured,
  errorMessage,
  usernameError,
  emailError,
  passwordError,
  turnOffError,
  passwordErrorMessge
} from "@/js/fetch";

// import { store } from "../../store";
// import { BIconEye } from "bootstrap-icons-vue";

const props = defineProps({
  authName: String,
});

const user = shallowRef({
  username: null,
  email: null,
  password: null,
});

const router = useRouter();
const showPassword = shallowRef(false);

const hideAllErrors = () => {
  turnOffError();
};

const handleAuth = async () => {
  try {
    await useFetch(`auth/${props?.authName}/`, user.value);
    if (store.hasLogin) router.push("/");
  } catch (err) {
    console.log(err);
  }
};

const goTo = () => {
  if (props.authName == 'login') router.push("/register");
  else router.push("/login")
};

</script>
<template>
  <div class="container my-5 pt-5">

    <form class="form my-5" @submit.prevent="handleAuth" @click="hideAllErrors">
      <p :class="{ Gerror: hasErrorOccured }" v-show="hasErrorOccured">
        {{ errorMessage }}
      </p>

      <h2 class="title">
        {{ props?.authName || "Authentication" }}
      </h2>

      <div class="input-group" v-if="props?.authName == 'register'">
        <label for="username" class="input-label">Username
          <span v-show="usernameError" :class="{ error: usernameError }">required</span></label>
        <input type="text" id="username" name="username" v-model="user.username" class="form-control input-field"
          autocomplete="name" :class="{ inpError: usernameError }" />
      </div>


      <div class="input-group ">
        <label for="email" class="input-label">Email
          <span v-show="emailError" :class="{ error: emailError }">required</span></label>
        <input type="email" id="email" name="email" v-model="user.email" class="form-control input-field"
          autocomplete="email" :class="{ inpError: emailError }" />
        </div>

        <div class="input-group">
          <label for="password" class="input-label">Password
            <span v-show="passwordError" :class="{ error: passwordError }">
              {{ passwordErrorMessge ? passwordErrorMessge : "required" }}
            </span>
          </label>
          <input :type="showPassword ? 'text' : 'password'" id="password" name="password" v-model="user.password"
            class="input-field form-control" autocomplete="current-password" :class="{ inpError: passwordError }" />
          <span class="password-toggle" @click="showPassword = !showPassword">
            <BIconEye />
          </span>
        </div>

        <button type="submit" class="btn btn-primary mt-4">
          {{ props.authName == 'register' ? 'Register' : 'Login' }}
        </button>

        <div class="input-group mt-5" v-if="props?.authName == 'login'">
          Already have an account?  <a href="/register" class="login"> Click to here login.</a>
        </div>

    </form>

  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}


.login{
  color: #7d7d7d;
  padding-left: 10px;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #b3b3b3;
}

.input-group {
  margin-bottom: 15px;
  position: relative;
}

.form-control {
  border: 1px solid #b3b3b380;
  background-color: #fefefe;
  border-radius: 6px !important;
}

.message {
  vertical-align: text-top;
}

.dark .form-control {
  background-color: #151416;
  color: #fefefe!important;
  border: 2px solid rgba(0, 0, 0, 0.33);
}

.password-toggle {
  position: absolute;
  right: 10px;
  top: 50%;
  color: #b3b3b3;
}

.password-toggle:hover {
  cursor: pointer;
}

.input-label {
  font-size: 16px;
  /* margin-left: 5px; */
}

.input-field {
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  border: 1px solid #b3b3b380;
  border-radius: 6px;
  font-size: 16px;
  padding: 5px;
  margin-right: 5px;
}

.input-field:focus {
  outline: currentColor;
}

.auth-link {
  font-size: 16px;
  margin-top: 15px;
  font-weight: 800;
}

.auth-link a {
  color: #6ab5db;
  text-decoration: none;
}

.auth-link a:hover {
  text-decoration: underline;
  cursor: pointer;
}

.error {
  position: absolute;
  color: #6ab5db;
  top: 0;
  top: 0;
  right: 10px;
  font-size: 15px;
  margin: 0;
}

.Gerror {
  position: absolute;
  color: #6ab5db;
  margin: 0;
  top: 5px;
  right: 5px;
  font-size: 17px;
}

.inpError {
  border: 1px solid #6ab5db;
}
</style>
