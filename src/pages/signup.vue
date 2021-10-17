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
      <button
        @click="signUp()"
        class="w-full bg-gray-300 dark:bg-gray-700 rounded-md p-4"
      >
        Signup
      </button>
      <h1 class="flex font-semibold">
        Are you have a account?
        <nuxt-link class="text-blue-600 ml-2" to="/login">Login</nuxt-link>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      username: "",
      routes: [
        "signup",
        "login",
        "repeatpay",
        "panel",
        "docs",
        "icon.png",
        "favicon.ico",
        "logo.svg"
      ]
    };
  },
  methods: {
    signUp() {
      var usernameRegex = /^[a-zA-Z0-9]+$/;
      this.$fire.firestore
        .collection("usernames")
        .doc(this.username.toLowerCase())
        .get()
        .then(doc => {
          if (this.routes.includes(this.username.toLowerCase())) {
            alert("haha ure sucha funny dude");
          } else if (!usernameRegex.test(this.username.toLowerCase())) {
            alert(
              "Please don't use special characters and letters in your username"
            );
          } else if (doc.data() === undefined) {
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
        }
        else if (this.username.length < 15) {
          alert("bak knk bug buldun aynen");
        } else {
          await this.$fire.auth
            .createUserWithEmailAndPassword(this.email, this.password)
            .then(cred => {
              this.$fire.firestore
                .collection("users")
                .doc(cred.user.uid)
                .set({
                  seenusername: this.username,
                  linkusername: this.username.toLowerCase(),
                  bio: "",
                  papara: "",
                  iban: "",
                  patreon: "",
                  banner: "",
                  profile: "",
                  verified: false,

                });
              this.$fire.firestore
                .collection("usernames")
                .doc(this.username.toLowerCase())
                .set({
                  username: this.username.toLowerCase()
                });
              this.$router.push("/login");
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
