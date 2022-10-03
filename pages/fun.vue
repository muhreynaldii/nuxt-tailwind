<template>
  <div>
    <div v-if="loading" class="loading-page">
      <p>Loading...</p>
    </div>
    <div v-if="loading === false">
      <h1>Funny Pages for laugh</h1>
      <ol>
        <li v-for="(data, index) in posts" :key="data.id">
          {{ data.description }}
        </li>
      </ol>
      <NuxtLink to="/posts" class="underline"> Halaman post</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  // layout: "article",
  data: () => ({
    posts: [],
    loading: false,
  }),
  async fetch() {
    this.loading = true;
    this.posts = await this.$http.$get("https://api.nuxtjs.dev/posts");
    if (this.posts.length > 0) this.loading = false;
  },
};
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
}
</style>
