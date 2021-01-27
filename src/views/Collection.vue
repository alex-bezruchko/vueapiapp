<template>
  <b-container fluid>
    <h1>Collection</h1>
    <b-card v-for="post in posts" :key="post.id">
      <router-link :to="{ name: 'postDetails', params: { id: post.id } }"
        ><h1>{{ post.title }}</h1>
      </router-link>
    </b-card>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => (this.posts = data))
      .catch((err) => console.log(err.message));
  },
  name: "Collection",
};
</script>

<style lang="scss" scoped>
.card-body h1 {
  text-align: left;
  text-transform: capitalize;
}
</style>
