<template>
  <div class="grid justify-items-center items-center">
    <div class="grid w-3/6 space-y-3 text-left justify-items-start">
      <form
        @submit.prevent="loginUser"
        class="grid w-full space-y-3 text-left justify-items-start"
      >
        <h1 class="">E-Mail</h1>
        <input
          type="email"
          v-model="email"
          class="txtbox"
          placeholder="Enter your mail"
        />
        <h1>Password</h1>
        <input
          type="password"
          class="txtbox"
          placeholder="Enter your password"
          v-model="password"
        />
      </form>
      <button @click="loginUser()" class="w-full bg-gray-300 dark:bg-gray-700 rounded-md p-4">Login</button>
      <h1 class="flex font-semibold">
        New to RepeatPay?
        <nuxt-link class="text-blue-600 ml-2" to="/signup">Signup</nuxt-link>
      </h1>
      <h1 class="flex font-semibold">
        Forgot you password?
        <nuxt-link class="text-blue-600 ml-2" to="/forgot">Reset from here</nuxt-link>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    loginUser() {
      this.$fire.auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(cred => {
          console.log(cred);
          this.$router.push("/panel");
        })
        .catch(err => {
          alert(err.message);
        });
    }
  }
};
</script>

<style scoped>
.txtbox {
  @apply rounded-xl p-4 text-gray-900 bg-gray-300 focus:outline-none dark:(bg-gray-700 text-gray-50) w-full;
}
</style>
