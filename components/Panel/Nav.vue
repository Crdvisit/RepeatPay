<template>
  <div
    class="p-4 flex  bg-gray-200
        text-gray-900
        dark:(bg-gray-900
        text-gray-50) items-center justify-between"
  >
    <div>Hello, {{ data.username }}</div>
    <div class="flex">
      <button
        class="
              bg-gray-300
              dark:(bg-gray-800)
              p-2
              flex
              rounded-xl
              items-center
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
