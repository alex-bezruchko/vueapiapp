<template>
  <b-container>
    <h1 class="page-title">Collection</h1>
    <b-container v-if="collectionLoading">
      <img src="./../assets/loading.gif" />
    </b-container>
    <b-row v-if="collection" class="collection" align-h="center">
      <b-col cols="8" v-for="post in collection" :key="post.id">
        <b-card>
          <router-link :to="{ name: 'postDetails', params: { id: post.id } }"
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
  name: "collection",
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    ...mapActions(["fetchPosts"]),
  },
  computed: mapGetters(["collection", "collectionLoading"]),
  created() {
    this.fetchPosts();
  },
};
</script>

<style lang="scss" scoped>
img {
  max-height: 150px;
  height: 150px;
  margin-top: 100px;
}
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
    color: #42b983;
  }
}
</style>
