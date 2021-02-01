import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Collection from "../views/Collection.vue";
import Favourites from "../views/Favourites.vue";

import AddPost from "../views/AddPost.vue";
import EditPost from "../views/EditPost.vue";


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
    component: Collection
  },
  {
    path: "/favourites",
    name: "Favourites",
    component: Favourites
  },
  {
    path: "/post/:id",
    name: "postDetails",
    component: Post,
    props: true
  },
  {
    path: "/edit-post/:id",
    name: "EditPost",
    component: EditPost,
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
