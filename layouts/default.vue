<template>
  <div
    class="min-h-screen bg-gray-100 text-gray-900 dark:(bg-gray-800 text-gray-50)"
  >
    <div class="" v-if="$route.name.includes('docs')">
      <DocNavbar />
      <div class="container">
        <div class="flex pt-16">
          <DocBar class="w-auto" />
          <Nuxt class="h-full overflow-auto my-8 w-full" />
        </div>
      </div>
    </div>
    <div class="flex flex-col h-[100vh]" v-else-if="$route.name.includes('panel')">
      <PanelNav class="w-full" />
      <Nuxt class="h-full" />
    </div>
    <div v-else class="flex flex-col h-[100vh] h-full">
      <NavDefault />
      <Nuxt class="h-full" />
      <NavFooter />
    </div>
  </div>
</template>

<script>
export default {
  
};
</script>

<style>
html {
  font-family: "Noto Sans", sans-serif;
}
</style>
