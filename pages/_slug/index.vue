<template>
  <div>
    <p>Page Slug : {{ this.slug }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slug: this.$route.params.slug,
    };
  },
};
</script>
