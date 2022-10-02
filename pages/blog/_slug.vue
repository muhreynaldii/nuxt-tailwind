<template>
  <main v-if="$route.params.slug">
    <h1>Ini page Blog dengan params</h1>
    <p>{{ $route.params.slug }}</p>
  </main>
  <main v-else>
    <h1>Ini page Blog tanpa Params</h1>
  </main>
</template>

<script>
export default {
  validate({ params }) {
    // Must be a Alphabet
    return /^[A-Z]+$/i.test(params.slug);
  },
};
</script>
