<template>
  <div class="submit-form">
    <!-- Successfull edit alert -->

    <b-alert v-model="showDismissibleAlert" variant="success" dismissible>
      Post Edited Successfully. Redirecting...
    </b-alert>

    <!-- Edit post input -->

    <div v-if="!submitted && post">
      <h1 class="page-title">Edit the Post</h1>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          id="title"
          required="post.title"
          v-model="post.title"
          name="title"
          placeholder="Title"
        />
      </div>

      <div class="form-group">
        <textarea
          class="form-control"
          id="body"
          required="post.body"
          v-model="post.body"
          name="body"
          rows="15"
          placeholder="Body"
        />
      </div>

      <!-- Submit edit button -->

      <button @click="savePost" class="btn btn-success">Submit</button>
    </div>
  </div>
</template>

<script>
import router from "./../router";

export default {
  name: "EditPost", // todo: rename to start with a capital letter like remaining components and files
  props: ["id"],

  data() {
    return {
      post: null,
      submitted: false,
      show: false,
      showDismissibleAlert: false,
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/posts/" + this.$route.params.id)
      .then((res) => res.json())
      .then((data) => (this.post = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    savePost() {
      fetch(
        `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            title: this.post.title,
            body: this.post.body,
            userId: this.post.userId,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
        .then((response) => {
          if (response) {
            this.show = true;
            this.showDismissibleAlert = true;
            setTimeout(function() {
              router.push("/collection");
            }, 1800);
          } else {
            this.show = false;
          }
        })
        .catch((err) => console.log(err.message));
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 80%;
  margin: 2rem auto;
}
</style>
