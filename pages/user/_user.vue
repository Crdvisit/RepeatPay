<template>
  <div class="flex flex-col items-start">
    <img :src="userImage.banner" class="p-5 rounded-3xl" alt="" />
    <div class="flex h-full w-full">
      <div class="grid m-5 p-4 rounded-md bg-gray-500 w-full">
        <h1 class="flex text-3xl bg-gray-700 items-center font-semibold">
          <img :src="userImage.profile" class="h-64 mr-4" alt="" />
          {{ user.seenusername }}
        </h1>
      </div>
      <div class="bg-gray-600 my-5 mr-5 rounded-sm w-full p-4">
        <h1 class="font-bold">Biography</h1>
        <p class="text-md ">{{ user.bio }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: [],
      username: this.$route.params.user,
      error: ""
    };
  },
  mounted() {
    this.$fire.firestore
      .collection("users")
      .where("linkusername", "==", this.username)
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          this.user = doc.data();
        });
      })
      .catch(err => {
        alert(err.message);
      });
  },
  computed: {
    userImage() {
      var profile = this.user.profile;
      var banner = this.user.banner;
      return {
        profile,
        banner
      };
    }
  }
};
</script>

<style>
.banner {
  background-size: cover; /* <------ */
}
</style>
