<template>
  <div class="grid justify-items-center items-center">
    <input
      type="email"
      class="txtbox"
      v-model="email"
      placeholder="Enter your mail"
    />
    <button
      class="
          w-full flex justify-center rounded-md p-2 mt-2 bg-green-500
        "
      @click="sendMail()"
    >
      Reset
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: ""
    };
  },
  methods: {
    sendMail() {
      if (this.email === "") {
        alert("Please enter a valid email");
      } else {
        this.$fire.auth
          .sendPasswordResetEmail(email)
          .then(() => {
            alert("Password rest mail sent successfully.");
          })
          .catch(error => {
            alert(error.message);
          });
      }
    }
  }
};
</script>

<style></style>
