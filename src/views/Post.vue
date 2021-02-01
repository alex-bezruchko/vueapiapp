<template>
  <b-container>
    <header>
      <!-- Successfull deletion alert -->
      <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
        Post Deleted Successfully. Redirecting...
      </b-alert>
    </header>

    <!-- Edit/Delete Action buttons -->
    <b-container v-if="post" class="post-actions">
      <router-link :to="{ name: 'editPost', params: { id: this.post.id } }"
        ><b-icon icon="pencil" scale="2" variant="warning"> </b-icon
      ></router-link>
      <b-icon
        icon="x-circle"
        scale="2"
        variant="danger"
        v-on:click="deletePost(post.id)"
      ></b-icon>
      <b-icon
        v-show="!isFav"
        icon="bookmark-plus"
        scale="2"
        variant="info"
        v-on:click="onAddNewFavourite()"
      ></b-icon>
      <b-icon
        v-show="isFav"
        icon="bookmark-dash"
        scale="2"
        variant="info"
        v-on:click="onRemoveFavourite()"
      ></b-icon>
    </b-container>

    <b-card v-if="post">
      <!-- Post title -->
      <h3>
        {{ post.title }}
      </h3>

      <!-- Post body -->
      <p>{{ post.body }}</p>

      <div class="divider"></div>

      <!-- Comment Section -->
      <b-container
        ><b-icon icon="BIconChatLeftText"></b-icon>Comments
        {{ commentsTotal }}</b-container
      >
      <b-list-group>
        <b-list-group-item v-for="comment in comments" :key="comment.id">
          <span
            ><b>{{ comment.email }}:</b></span
          ><br />{{ comment.body }}</b-list-group-item
        >
      </b-list-group>
    </b-card>
    <b-container v-if="loading">
      <img src="./../assets/loading.gif" />
    </b-container>
  </b-container>
</template>

<script>
import router from "./../router";
// import loading from "./../assets/loading.gif"
import { mapActions, mapGetters } from "vuex";

export default {
  props: ["id"],
  name: "Post",
  data() {
    return {
      post: null,
      comments: null,
      commentsTotal: null,
      showDismissibleAlert: false,
      isFav: false,
      loading: false,
    };
  },
  methods: {
    deletePost(post_id) {
      fetch("https://jsonplaceholder.typicode.com/posts/" + post_id, {
        method: "DELETE",
      })
        .then(() => {
          this.showDismissibleAlert = true;
          setTimeout(function() {
            router.push("/collection");
          }, 1800);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },

    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },

    ...mapActions(["addFavourite"]),
    ...mapActions(["removeFavourite"]),
    ...mapActions(["fetchFavPosts"]),

    onAddNewFavourite() {
      this.addFavourite(this.post);
      this.isFav = true;
    },
    onRemoveFavourite() {
      this.removeFavourite(this.post.id);
      this.isFav = false;
    },
  },
  computed: mapGetters(["favourites"]),
  mounted() {
    this.loading = true;
    fetch("https://jsonplaceholder.typicode.com/posts/" + this.id)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          this.loading = false;
          this.post = data;
          // Check if Post is favourite
          for (let i = 0; i < this.favourites.length; i++) {
            if (this.favourites[i].id === this.post.id) {
              this.isFav = true;
            }
          }
        } else {
          this.loading = false;
          this.post = null;
        }
      })
      .catch((err) => console.log(err.message));

    fetch("https://jsonplaceholder.typicode.com/posts/" + this.id + "/comments")
      .then((res) => res.json())
      .then((data) => (this.comments = data))
      .then((data) => (this.commentsTotal = data.length))
      .catch((err) => console.log(err.message));
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.divider {
  border: 1px solid black;
  height: 1px;
  max-height: 1px;
  margin-bottom: 2rem;
}
img {
  max-height: 150px;
  height: 150px;
  margin-top: 100px;
}
h3,
p,
.list-group-item {
  text-align: left;
}
.post-actions {
  display: flex;
  justify-content: flex-end;
}
.bi-x-circle,
.bi-pencil,
.bi-bookmark-plus,
.bi-bookmark-dash {
  padding: 2rem;
}
</style>
