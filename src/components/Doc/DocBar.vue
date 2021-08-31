<template>
  <div class="w-64 p-4 h-full m-4">
    <div class="grid fixed space-y-1 justify-items-start">
      <h1 class="font-bold text-lg">Getting Started</h1>
      <DocCard
        v-for="(post, index) in posts.all"
        :key="`all-${index}`"
        :post="post"
        class="w-full"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: {
        all: [],
      },
    };
  },
  async fetch() {
    const allPosts = await this.$content()
      .sortBy("position")
      .without(["body"])
      .fetch();

    this.posts = {
      all: allPosts || [],
    };
  },
};
</script>

<style>
</style>