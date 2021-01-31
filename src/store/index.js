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
    async removeFavourite({ commit }, id) {
      // const response = await axios.post("http://localhost:3000/users", user);
      commit("removeFavourite", id)
      console.log('click')
      console.log(this.state.favouritePosts)

    },
  },
  mutations: {
    setPosts: (state, posts) => (
      state.allPosts = posts
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
    favourites: state => state.favouritePosts

  }
});
