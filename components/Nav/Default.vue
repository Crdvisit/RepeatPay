<template>
  <div class="h-auto">
    <div
      class="
        flex
        p-4
        justify-between
        items-center
        bg-gray-200
        text-gray-900
        dark:(bg-gray-900
        text-gray-50)
      "
    >
      <div class="flex justify-between w-full items-center">
        <div class="flex items-end space-x-3">
          <h1 class="font-bold text-3xl">RepeatPay</h1>
          <div class="flex items-end">
            <p class="hidden sm:flex">
              New open-source donate system for community.
            </p>
          </div>
        </div>

        <div class="space-x-3 hidden md:flex items-center">
          <nuxt-link
            v-for="(link, index) in links"
            :key="`link-${index}`"
            :to="link.link"
            class="bg-gray-300 p-2 rounded-xl dark:(bg-gray-800)"
            >{{ link.title }}</nuxt-link
          >
          <div class="h-6 w-[0.1rem] bg-gray-400"></div>
          <nuxt-link
            to="/signup"
            class="
              bg-gray-300
              dark:(bg-gray-800)
              p-2
              flex
              rounded-xl
              items-center
            "
            >Signup<Icon
              v-if="this.$colorMode.value === 'light'"
              name="arrow-right-dark"
              class="w-5 h-5 ml-1" /><Icon
              v-else
              name="arrow-right-light"
              class="w-5 h-5 ml-1"
          /></nuxt-link>

        </div>
      </div>
      <Color class="ml-2" />
    </div>
    <div
      class="
        md:hidden
        bg-gray-200
        text-gray-900
        dark:(bg-gray-900
        text-gray-50)
      "
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { title: "Home", link: "/" },
        { title: "Docs", link: "/docs" },
        { title: "Login", link: "/login" },
      ],
    };
  },

};
</script>

<style scoped>
.menu {
}
</style>