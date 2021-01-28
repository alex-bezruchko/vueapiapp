<template>
  <b-container>
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
            ><router-link to="/delete">Delete Post</router-link></b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </b-container>
  <!-- <b-container> -->
  <!-- </b-container> -->
</template>

<script>
export default {
  name: "Navigation",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
