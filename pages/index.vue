<template>
  <fragment>
    <p>Ini page Index</p>
    <NuxtLink to="/home">Home page</NuxtLink>
    <img src="~images/badminton.png" alt="" srcset="" class="w-[100px]" />
  </fragment>
</template>

<script>
export default {
  transition: "home",
  // mounted() {
  //   this.$nextTick(() => {
  //     this.$nuxt.$loading.start();
  //     setTimeout(() => this.$nuxt.$loading.finish(), 500);
  //   });
  // },
};
</script>

<style>
.home-enter-active {
  animation: bounce-in 1s;
}

.home-leave-active {
  animation: bounce-out 1s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(0);
  }
}
</style>
