<template>
  <div>
    <h1>Funny Pages for laugh</h1>
    <p v-for="(data, index) in posts" :key="data.id">
      {{ data.description }}
    </p>
    <NuxtLink to="/posts" class="underline"> Halaman post</NuxtLink>
  </div>
</template>

<script>
export default {
  layout: "article",
  data: () => ({
    posts: [],
  }),
  async fetch() {
    this.posts = await this.$http.$get("https://api.nuxtjs.dev/posts");
  },
};
</script>
