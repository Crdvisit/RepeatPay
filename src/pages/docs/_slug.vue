<template>
  <div class="text-left flex">
    <article><nuxt-content class="nuxt-content" :document="post" /></article>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {},
    };
  },
  async fetch() {
    const post = await this.$content(this.$route.params.slug).fetch();
    if (!post) return this.$router.push("/");
    this.post = post;
  },
};
</script>

<style lang="scss">
.nuxt-content {
  h1 {
    @apply text-3xl font-bold text-blue-500;
  }
  h2 {
    @apply text-blue-500;
  }
  a {
    @apply text-green-600;
  }
  code{
    @apply bg-gray-900 text-base p-1 static;
  }
}
</style>