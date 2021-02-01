import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

const url = "https://jsonplaceholder.typicode.com/posts/";

export default new Vuex.Store({
  state: {
    newFavourite: {},
    favouritePosts: [],
    allPosts: [],
    collectionLoading: false
  },
  actions: {
    async fetchPosts({ commit }) {
      this.state.collectionLoading = true;
      const response = await axios.get(url);
      if (response.data) {
        this.state.collectionLoading = false
        commit("setCollectionLoading", false)
        commit("setPosts", response.data)
      } else {
        commit("setCollectionLoading", false)

      }
    },
    async fetchFavPosts({ commit }) {
      // const response = await axios.get(url);
      commit("setFavPosts", [])
    },

    async addFavourite({ commit }, post) {
      // const response = await axios.post("http://localhost:3000/users", user);
      commit("addNewFavourite", post)
    },
    async removeFavourite({ commit }, id) {
      // const response = await axios.post("http://localhost:3000/users", user);
      commit("removeFavourite", id)
    },
  },
  mutations: {
    setPosts: (state, posts) => (
      state.allPosts = posts
    ),
    setCollectionLoading: (state, loading) => (
      state.collectionLoading = loading
    ),
    setFavPosts: (state, favPosts) => (
      state.favouritePosts = favPosts
    ),
    addNewFavourite: (state, newFav) => state.favouritePosts.unshift(newFav),
    // setNewFavourite(state, payload) {
    //   state.favouritePosts.push(payload)
    // }
    // removeFavourite: (state, id) => state.favouritePosts.unshift(id),
    removeFavourite: (state, id) => (
      state.favouritePosts.filter(post => post.id !== id),
      state.favouritePosts.splice(post => post.id, 1)
    )

  },

  modules: {

  },
  getters: {
    collection: state => state.allPosts,
    favourites: state => state.favouritePosts,
    collectionLoading: state => state.collectionLoading

  }
});
