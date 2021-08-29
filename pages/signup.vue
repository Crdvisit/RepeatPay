<template>
  <div class="grid justify-items-center items-center">
    <div class="grid w-3/6 space-y-3 text-left justify-items-start">
      <form class="grid w-full space-y-3 text-left justify-items-start">
        <h1 class="">Username</h1>
        <input
          type="text"
          class="txtbox"
          v-model="username"
          placeholder="Enter your username"
        />

        <h1 class="">E-Mail</h1>
        <input
          type="email"
          class="txtbox"
          v-model="email"
          placeholder="Enter your mail"
        />
        <h1>Password</h1>
        <input
          type="password"
          v-model="password"
          class="txtbox"
          placeholder="Enter your password"
        />
      </form>
      <button @click="signUp()">Signup</button>
      <h1 class="flex font-semibold">
        Are you have a account?
        <nuxt-link class="text-blue-600 ml-2" to="/login">Login</nuxt-link>
      </h1>
      <h1 class="font-semibold w-full text-center">Signup with</h1>
      <div class="flex items-center justify-center w-full space-x-4">
        <button
          class="
            bg-gray-300
            flex
            rounded-xl
            w-max
            dark:(bg-gray-700
            text-gray-50)
            p-4
            focus:outline-none
          "
        >
          <Icon class="" name="google" />
        </button>
        <button
          class="
            bg-gray-300
            flex
            rounded-xl
            w-max
            dark:(bg-gray-700
            text-gray-50)
            p-4
            focus:outline-none
          "
        >
          <Icon class="" name="facebook" />
        </button>
        <button
          class="
            bg-gray-300
            flex
            rounded-xl
            w-max
            dark:(bg-gray-700
            text-gray-50)
            p-4
            focus:outline-none
          "
        >
          <Icon name="github" class="fill-current dark:text-gray-50" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      username: ""
    };
  },
  methods: {
    signUp() {
      var usr = this.username;
      var usrLower = usr.toLowerCase();
      this.$fire.firestore
        .collection("usernames")
        .doc(usrLower)
        .get()
        .then(doc => {
          if (doc.data() === undefined) {
            this.createUser();
          } else {
            alert(this.username + " is already registered");
          }
        });
    },
    async createUser() {
      try {
        if (this.password.length < 6) {
          alert(" Password must be at least 6 characters ");
        } else {
          var usr = this.username;
          var usrLower = usr.toLowerCase();
          await this.$fire.auth
            .createUserWithEmailAndPassword(this.email, this.password)
            .then(cred => {
              this.$fire.firestore
                .collection("users")
                .doc(cred.user.uid)
                .set({
                  username: usrLower,
                  bio: "",
                  papara: "",
                  iban: "",
                  patreon: ""
                });
              this.$fire.firestore
                .collection("usernames")
                .doc(this.username)
                .set({
                  username: this.username
                });
            })
            .catch(err => {
              alert(err.message);
            });
        }
      } catch (e) {}
    }
  }
};
</script>

<style scoped>
.txtbox {
  @apply rounded-xl p-4 text-gray-900 bg-gray-300 focus:outline-none dark:(bg-gray-700 text-gray-50) w-full;
}
</style>
