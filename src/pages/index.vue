<template>
  <div class="flex flex-col justify-center items-center">
    <div class="md:flex grid main justify-items-center space-x-5 md:justify-center items-center">
      <div class="grid justify-items-center main text-center md:text-left md:block">
        <h1 class="font-extrabold text-5xl">RepeatPay</h1>
        <p class="mt-4">
          New open-source donate system for community. Easy, fast and secure.
        </p>
      </div>
      <img src="/main.jpg" class="flex mt-4 img md:mt-0 w-3/6 h-auto" alt="">
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@media screen and (max-device-width: 950px) {
  .main {
    @apply grid text-center;
  }
  .img{
    @apply mt-4;
  }
}
</style>