<template>
  <div class="grid sm:grid-cols-2 h-full">
    <div
      class="bg-gray-300 flex flex-col items-start text-gray-900 dark:(bg-gray-700 text-gray-50) m-4 p-4"
    >
      <h1 class="mb-2 font-bold">Biography</h1>
      <textarea
        name=""
        id=""
        v-model="bio"
        class="p-2 rounded-md h-full w-full bg-gray-400 dark:bg-gray-600 resize-none"
      ></textarea>
      <button
        :class="
          `w-full flex justify-center rounded-md p-2 mt-2 ${saveButBio.color}`
        "
        @click="updateBio()"
      >
        {{ saveButBio.text }}
      </button>
    </div>
    <div>
      h
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      bio: "",
      papara: "",
      iban: "",
      patreon: ""
    };
  },
  async fetch() {
    var user = this.$fire.auth.currentUser;
    if (!user) {
      this.$router.push("/login");
    } else {
      this.$fire.firestore
        .collection("users")
        .doc(user.uid)
        .get()
        .then(doc => {
          (this.data = doc.data()),
            (this.bio = doc.data().bio),
            (this.papara = doc.data().papara),
            (this.iban = doc.data().iban),
            (this.patreon = doc.data().patreon);
        });
    }
  },
  methods: {
    updateBio() {
      var user = this.$fire.auth.currentUser;

      if (this.data.bio === this.bio) {
        alert("Nothing changed");
      } else {
        this.$fire.firestore
          .collection("users")
          .doc(user.uid)
          .update({
            bio: this.bio
          })
          .then(doc => {
            this.saveButBio.color = "bg-green-500";
            this.saveButBio.text = "Saved!";
            this.$fire.firestore
              .collection("users")
              .doc(user.uid)
              .get()
              .then(doc => {
                this.data = doc.data();
              });
          });
      }
    }
  },
  computed: {
    saveButBio() {
      var color = "";
      var text = "";
      if (this.data.bio === this.bio) {
        color = "bg-green-500";
        text = "Nothing changed";
      } else {
        color = "bg-red-500";
        text = "Changes avalible please save";
      }

      return {
        color,
        text
      };
    }
  }
};
</script>

<style></style>
