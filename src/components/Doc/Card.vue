<template>
  <nuxt-link
    :to="{ name: 'docs-slug', params: { slug: getData.slug } }"
    class="flex justify-center"
  >
    <h1
      class="
        text-gray-50
        p-2
        w-full
        opacity-70
        rounded-md
        bg-blue-900
        transition
        ease-in
        hover:(bg-blue-900 opacity-100)
      "
    >
      {{ getData.title }}
    </h1>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  data() {
    return {
      postnm: "hello",
    };
  },
  computed: {
    getData() {
      return {
        title: this.post.title || "",
        slug: this.post.slug || "",
      };
    },
    mounted() {
      this.postnm = this.post.slug;
      console.log(this.postnm);
    },
    getSelected() {
      if (this.$route.name?.includes(this.postnm)) {
        return "";
      } else {
        return "text-gray-50 p-2 w-full rounded-xl bg-gray-600 transition ease-in hover:bg-blue-900";
      }
    },
  },
};
</script>

<style scoped>
.links {
  @apply;
}
</style>