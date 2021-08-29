<template>
  <div>
    <div v-if="!show">User not found</div>

    <div>
      {{ user.bio }}
      {{ user.username }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: [],
      username: this.$route.params.user,
      error: "",
      show: false
    };
  },
  async fetch() {
    this.$fire.firestore
      .collection("users")
      .where("username", "==", this.username)
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          this.show = true;
        });
      })
      .catch(err => {
        alert(err.message);
      });
  },
  computed: {
    returnUser() {
      this.$fire.firestore
        .collection("users")
        .where("username", "==", this.username)
        .get()
        .then(snapshot => {
          snapshot.docs.forEach(doc => {
            this.data = doc.data();
          });
        })
        .catch(err => {
          alert(err.message);
        });
    }
  }
};
</script>

<style></style>
