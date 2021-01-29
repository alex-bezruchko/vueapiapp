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
  mutations: {
    setPosts: (state, posts) => (
      state.allPosts = posts
    ),
    // setNewFavourite(state, payload) {
    //   state.favouritePosts.push(payload)
    // }
  },
  actions: {
    async fetchPosts({ commit }) {
      const response = await axios.get(url);
      commit("setPosts", response.data)
    },
  },
  modules: {

  },
  getters: {
    collection: state => state.allPosts
  }
});
