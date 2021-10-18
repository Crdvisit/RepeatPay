<template>
  <div v-if="!isVerified">
    Please verify your account. We are sended verification email to your email
    account.
    <button
      class="
          w-full flex justify-center rounded-md p-2 mt-2 bg-green-500
        "
      @click="sendVerification()"
    >
      Verify your account
    </button>
  </div>
  <div class="grid sm:grid-cols-2 h-full" v-else>
    <div
      class="bg-gray-300 flex flex-col items-start rounded-sm text-gray-900 dark:(bg-gray-700 text-gray-50) m-4 p-4"
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
    <div
      class="bg-gray-300 otherstuff rounded-sm flex flex-col items-start text-gray-900 dark:(bg-gray-700 text-gray-50) m-4 p-4"
    >
      <h1 class="flex items-center text-lg font-bold">
        <Icon name="papara" class="w-12 mr-2" />Papara
      </h1>
      <p>Enter your papara number here</p>

      <input type="text" class="othertext" v-model="papara" />
      <h1 class="flex items-center text-lg font-bold">
        IBAN (International Banking Number)
      </h1>
      <p>Enter your IBAN here</p>

      <input type="text" class="othertext" v-model="iban" />
      <h1 class="flex items-center text-lg font-bold">
        <Icon name="patreon" class="fill-current w-5 mr-2  text-hex-FF424D" />
        Patreon
      </h1>
      <p>Enter your patreon username here</p>

      <input type="text" class="othertext" v-model="patreon" />
      <p>Enter your banner link (Minimum 1920x1080)</p>

      <input type="text" class="othertext" v-model="banner" />
      <p>Enter your profile picture link</p>

      <input type="text" class="othertext" v-model="profile" />
      <button
        class="
          w-full flex justify-center rounded-md p-2 mt-2 bg-green-500
        "
        @click="updateOtherInfo()"
      >
        Save
      </button>
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
      patreon: "",
      profile: "",
      banner: ""
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
          this.banner = doc.data().banner;
          this.profile = doc.data().profile;
          console.log(user);
        });
    }
  },
  asyncData({ redirect, $fire }) {
    var user = $fire.auth.currentUser;
    if (!user) {
      redirect("/login");
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
    },
    updateOtherInfo() {
      var user = this.$fire.auth.currentUser;
      this.$fire.firestore
        .collection("users")
        .doc(user.uid)
        .update({
          patreon: this.patreon,
          papara: this.papara,
          iban: this.iban,
          banner: this.banner,
          profile: this.profile
        })
        .then(doc => {
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
        });
    },
    sendVerification() {
      this.$fire
        .auth
        .currentUser.sendEmailVerification()
        .then(() => {
          alert("Verification email sent to your email address");
        });
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
    },
    isVerified() {
      var user = this.$fire.auth.currentUser;
      return user.emailVerified;
    }
  }
};
</script>

<style lang="scss">
.othertext {
  @apply bg-gray-400 dark:bg-gray-600 rounded-md p-2 w-full mt-2 mb-4;
}
.otherstuff {
  p {
    @apply my-1;
  }
}
</style>
