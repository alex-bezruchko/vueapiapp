<template>
  <div id="app">
    <Navigation />
    <!-- <Collection /> -->
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import Navigation from "@/components/Navigation.vue";
// import Collection from "./views/Collection.vue";

export default {
  name: "App",
  components: {
    Navigation
    // Collection,
  }
};
</script>
