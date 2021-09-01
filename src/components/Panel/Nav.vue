<template>
  <div
    class="p-4 flex  bg-gray-200
        text-gray-900
        dark:(bg-gray-900
        text-gray-50)
        items-center
        justify-between
        transition ease-out duration-700"
  >
    <div>Hello, <b>{{ data.seenusername }}</b></div>
    <div class="flex">
      <button
        class="
              bg-gray-300
              dark:(bg-gray-800)
              hover:(dark:bg-gray-700 transition ease duration-300)
              hover:(bg-gray-400 transition ease duration-300)
              p-2
              mr-2
              flex
              rounded-xl
              items-center
              transition ease-out duration-700
            ">
        <a :href="data.linkusername">My Profile</a>
      </button>
      <button
        class="
              bg-gray-300
              dark:(bg-gray-800)
              hover:(dark:bg-gray-700 transition ease duration-300)
              hover:(bg-gray-400 transition ease duration-300)
              p-2
              flex
              rounded-xl
              items-center
              transition ease-out duration-700
            "
        @click="signOut()"
      >
        Sign Out
      </button>
      <Color class="ml-2" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    signOut() {
      this.$fire.auth.signOut().then(() => {
        console.log("user sign out");
        this.$router.push("/");
      });
    }
  },
  data() {
    return {
      data: []
    };
  },
  async fetch() {
    var user = this.$fire.auth.currentUser;
    if (!user) {
    } else {
      this.$fire.firestore
        .collection("users")
        .doc(user.uid)
        .get()
        .then(doc => {
          this.data = doc.data();
        });
    }
  }
};
</script>

<style></style>
