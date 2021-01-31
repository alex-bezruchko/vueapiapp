import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

const url = "https://jsonplaceholder.typicode.com/posts/";

export default new Vuex.Store({
  state: {
    newFavourite: {},
    favouritePosts: [],
    allPosts: []
  },
  actions: {
    async fetchPosts({ commit }) {
      const response = await axios.get(url);
      commit("setPosts", response.data)
    },
    async fetchFavPosts({ commit }) {
      // const response = await axios.get(url);
      // console.log(response)
      commit("setFavPosts", [])
    },

    async addFavourite({ commit }, post) {
      // const response = await axios.post("http://localhost:3000/users", user);
      commit("addNewFavourite", post)
      console.log('click')
      console.log(this.state.favouritePosts)

    },
  },
  mutations: {
    setPosts: (state, posts) => (
      state.allPosts = posts
    ),
    setFavPosts: (state, posts) => (
      state.favouritePosts = posts
    ),
    addNewFavourite: (state, newFav) => state.favouritePosts.unshift(newFav),
    // setNewFavourite(state, payload) {
    //   state.favouritePosts.push(payload)
    // }
  },

  modules: {

  },
  getters: {
    collection: state => state.allPosts,
    favourites: state => state.favouritePosts

  }
});
