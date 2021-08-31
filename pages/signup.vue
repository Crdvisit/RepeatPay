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
      <button @click="signUp()" class="w-full bg-gray-300 dark:bg-gray-700 rounded-md p-4">Signup</button>
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
          if(usrLower === 'signup' || usrLower === 'panel' || usrLower === 'login' || usrLower === 'index' || usrLower === 'docs' || usrLower === 'us' || usrLower === 'repeatpay'){
            alert("haha ure sucha funny dude");
          }
          else if (doc.data() === undefined) {
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
                  seenusername: this.username,
                  linkusername: usrLower,
                  bio: "",
                  papara: "",
                  iban: "",
                  patreon: "",
                  banner: "",
                  profile: "",
                });
              this.$fire.firestore
                .collection("usernames")
                .doc(this.username)
                .set({
                  username: this.username
                });
              this.$router.push("/login")
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
