<template>
  <b-container fluid>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse center" is-nav>
        <b-navbar-nav>
          <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
          <b-nav-item
            ><router-link to="/collection">Collection</router-link></b-nav-item
          >
          <b-nav-item
            ><router-link to="/favourites">Favourites</router-link></b-nav-item
          >
          <b-nav-item
            ><router-link to="/add-post">Add Post</router-link></b-nav-item
          >
          <b-nav-item disabled
            ><b-icon v-if="favourites" icon="heart" variant="success"></b-icon>
            + {{ favourites.length }}</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Navigation",
  data() {
    return {
      favPosts: [],
    };
  },
  methods: {
    ...mapActions(["fetchFavPosts"]),
  },
  computed: mapGetters(["favourites"]),
  created() {
    this.fetchFavPosts();
  },
};
</script>

<style scoped lang="scss">
.container-fluid {
  padding-right: 0px;
  padding-left: 0px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.navbar-dark .navbar-nav .nav-link {
  color: #fff;
  text-align: center;
  font-weight: bold;
}
@media (min-width: 992px) {
  .navbar-expand-lg .navbar-collapse {
    flex-direction: column;
  }
}
</style>
