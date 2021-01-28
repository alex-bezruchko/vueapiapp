import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Collection from "../views/Collection.vue";
import AddPost from "../views/AddPost.vue";
import Post from "../views/Post.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/collection",
    name: "Collection",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/Collection.vue")
    component: Collection
  },
  {
    path: "/post/:id",
    name: "postDetails",
    component: Post,
    props: true
  },
  {
    path: "/add-post",
    name: "addPost",
    component: AddPost,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
