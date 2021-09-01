<template>
  <div class="grid justify-items-center items-center">
    <div v-if="$fetchState.pending">Fetching...</div>
    <div
      v-else-if="user.seenusername === undefined"
      class="flex flex-grow h-full justify-center items-center"
    >
      <h1 class="font-bold text-3xl">User not found</h1>
    </div>
    <div v-else class="flex w-full flex-col items-center">
      <img :src="userImage.banner" class="object-cover h-48 w-full h-65" alt="" />
      <div class="grid justify-items-center sm:flex h-full w-full">
        <div
          class="grid sm:flex m-5 p-4 sm:w-full rounded-md bg-gray-300 bg-gray-900 dark:(bg-gray-700 text-gray-50)"
        >
          <img :src="userImage.profile" class="h-64 mr-4" alt="" />
          <div class="">
            <h1 class="sm:flex w-full grid justify text-3xl font-semibold">
              {{ user.seenusername }}
            </h1>
            <p class="text-md">{{ user.bio }}</p>
          </div>
        </div>
        <div
          class="bg-gray-700 mx-2 sm:mx-0 my-5 sm:mr-5 rounded-md p-4 sm:w-full"
        >
          <h1 class="font-bold text-2xl">Donate</h1>
          <div v-if="getPapara">
            <details>
              <summary class="font-light">[ Papara ]</summary>
            <h1 >
              {{ user.papara }}
            </h1>
            </details>
          </div>

          <div v-if="getIban">
            <details>
              <summary class="font-light">[ Iban ]</summary>
            <h1 >
              {{ user.iban }}
            </h1>
            </details>
          </div>

          <div v-if="getPatreon">
            <details>
              <summary class="font-light">[ Patreon ]</summary>
            <a :href="getPatreon" class="hover:text-gray-400 transition ease-out duration-500">
              {{ this.user.patreon }}
            </a>
            </details>
          </div>

        </div>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      error: "",
      user: []
    };
  },
  async fetch() {
    await this.$fire.firestore
      .collection("users")
      .where("linkusername", "==", this.$route.params.user)
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
    },
    getPapara() {
      if(this.user.papara === "") {
        return false
      }
      else{
        return true
      }
    },
    getIban() {
      if(this.user.iban === "") {
        return false
      } else {
        return true
      }
    },
    getPatreon() {
      if(this.user.patreon === "") {
        return false
      } else {
        var url = `https://patreon.com/${this.user.patreon}`
        return url
      }
    }
  },
  head() {
    const title = `${this.user.seenusername}`;
    const titlenf = `User not found`;

    const description = `Donate ${this.user.seenusername} on RepeatPay`;
    const image = this.userImage.profile || "/icon.png";
    const href = `https://repeatpay.ga/user/${this.user.linkusername}`;
    if (this.user.seenusername === undefined) {
      const object = {
        titlenf
      };
      return object;
    } else {
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
          }
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
  }
};
</script>

<style>
.banner {
  background-size: cover; /* <------ */
}
</style>
