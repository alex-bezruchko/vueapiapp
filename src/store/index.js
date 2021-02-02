import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newFavourite: {},
    favouritePosts: [],
    collection: null,
    collectionLoading: false
  },
  actions: {
    async fetchPosts({ commit }) {
      commit("setCollectionLoading", true)

      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/`);
        commit("setCollectionLoading", false)
        commit("setPosts", response.data)
      } catch (e) {
        commit("setCollectionLoading", false)
        commit("setPosts", [])
        console.log(e)
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
