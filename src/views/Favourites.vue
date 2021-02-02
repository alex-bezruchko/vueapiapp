<template>
  <b-container>
    <!-- Favourite Posts -->

    <h1 class="page-title">Favourites</h1>
    <b-row class="collection" align-h="center">
      <b-col cols="8" v-for="post in favourites" :key="post.id">
        <b-card>
          <router-link :to="{ name: 'Post', params: { id: post.id } }"
            ><h3>{{ post.title }}</h3>
          </router-link>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Favourites",
  methods: {
    ...mapActions(["fetchFavPosts"]),
  },
  computed: mapGetters(["favourites"]),
};
</script>

<style lang="scss" scoped>
.col-8 {
  margin-bottom: 1rem;
}
.card-body {
  padding-bottom: 0.1rem;

  h3 {
    text-align: left;
    text-transform: capitalize;
  }
  a {
    color: #000;
  }
  a:hover {
    text-decoration: none;
    color: blue;
  }
}
</style>
