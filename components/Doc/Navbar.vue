<template>
  <div class="flex fixed w-full">
    <div
      class="
        h-auto
        flex
        p-4
        w-full
        justify-between
        items-center
        bg-gray-200
        text-gray-900
        dark:(bg-gray-900
        text-gray-50)
      "
    >
      <h1 class="font-bold text-3xl">RepeatPay</h1>
      <div class="flex items-center">
        <nuxt-link
          to="/"
          class="
            bg-gray-300
            dark:(bg-gray-800)
            p-2
            flex
            rounded-xl
            items-center
          "
          >Go Back<Icon
            v-if="this.$colorMode.value === 'light'"
            name="arrow-right-dark"
            class="w-5 h-5 ml-1"
          /><Icon v-else name="arrow-right-light" class="w-5 h-5 ml-1" />
        </nuxt-link>
        <Color class="ml-2" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>