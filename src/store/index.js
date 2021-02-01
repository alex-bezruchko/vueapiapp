import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

const url = "https://jsonplaceholder.typicode.com/posts/";

export default new Vuex.Store({
  state: {
    newFavourite: {},
    favouritePosts: [],
    collection: [],
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
      commit("setFavPosts", [])
    },
    async addFavourite({ commit }, post) {
      commit("addNewFavourite", post)
    },
    async removeFavourite({ commit }, id) {
      commit("removeFavourite", id)
    },
  },
  mutations: {
    setPosts: (state, posts) => (
      state.collection = posts
    ),
    setCollectionLoading: (state, loading) => (
      state.collectionLoading = loading
    ),
    setFavPosts: (state, favPosts) => (
      state.favouritePosts = favPosts
    ),
    addNewFavourite: (state, newFav) => state.favouritePosts.unshift(newFav),
    removeFavourite: (state, id) => (
      state.favouritePosts.filter(post => post.id !== id),
      state.favouritePosts.splice(post => post.id, 1)
    )
  },
  modules: {
  },
  getters: {
    collection: state => state.collection,
    favourites: state => state.favouritePosts,
    collectionLoading: state => state.collectionLoading
  }
});
