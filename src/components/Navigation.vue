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
            ><router-link to="/add-post">Add Post</router-link></b-nav-item
          >
          <b-nav-item
            ><b-icon
              v-if="favCollection"
              icon="heart"
              variant="success"
            ></b-icon
            >+ {{ favCollection.length }}</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
  <!-- <b-container> -->
  <!-- </b-container> -->
</template>

<script>
// import route from "vue-router";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "favCollection",
  data() {
    return {
      favPosts: [],
    };
  },
  methods: {
    ...mapActions(["fetchFavPosts"]),
  },
  computed: mapGetters(["favCollection"]),
  created() {
    this.fetchFavPosts();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  color: red;
  text-align: center;
}
@media (min-width: 992px) {
  .navbar-expand-lg .navbar-collapse {
    flex-direction: column;
  }
}
</style>
