<template>
  <div>
    <p>{{ posts.title }}</p>
    <p>{{ posts.description }}</p>
    <p>{{ $route.params.id }}</p>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $http }) {
    const posts = await $http.$get(`https://api.nuxtjs.dev/posts/${params.id}`);
    return { posts };
  },
};
</script>
