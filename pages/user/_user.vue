<template>
  <div class="flex flex-col items-start">
    <img :src="userImage.banner" class="p-5 rounded-3xl" alt="" />
    <div class="grid justify-items-center sm:flex h-full w-full">
      <div class="grid m-5 p-4 sm:w-full rounded-md bg-gray-700">
        <h1
          class="sm:flex grid justify-items-center text-3xl  items-center font-semibold"
        >
          <img :src="userImage.profile" class="h-64 mr-4" alt="" />
          {{ user.seenusername }}
        </h1>
      </div>
      <div
        class="bg-gray-700 mx-2 sm:mx-0 my-5 sm:mr-5 rounded-md p-4 sm:w-full"
      >
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
  },
  head() {
    const title = `${this.data.seenusername}`;
    const description = `Donate ${this.data.seenusername} on RepeatPay`;
    const image = this.userImage.profile || "/icon.png";
    const href = `https://repeatpay.ga/user/${this.data.linkusername}`;
    const object = {
      title,
      meta: [
        {
          hid: "og:title",
          name: "og:title",
          content: title
        },
        {
          hid: "og:description",
          name: "og:description",
          content: description
        },
        {
          hid: "og:url",
          name: "og:url",
          content: href
        },
        {
          hid: "og:image",
          name: "og:image",
          content: image
        },
        // Twitter
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: title
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: description
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: image
        },
      ].map(i => {
        if (i.name && !i.property) i.property = i.name;
        return i;
      }),
      link: [
        {
          rel: "canonical",
          href
        }
      ]
    };
    return object;
  }
};
</script>

<style>
.banner {
  background-size: cover; /* <------ */
}
</style>
