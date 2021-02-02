<template>
  <div class="submit-form">
    <b-alert v-model="showDismissibleAlert" variant="success" dismissible>
      Post Addedd Successfully. Redirecting...
    </b-alert>
    <div v-if="!submitted">
      <h1 class="page-title">Add a Post</h1>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="post.title"
          name="title"
          placeholder="Title"
        />
      </div>

      <div class="form-group">
        <textarea
          class="form-control"
          id="body"
          required
          v-model="post.body"
          name="body"
          rows="15"
          placeholder="Body"
        />
      </div>

      <button @click="savePost" class="btn btn-success">Submit</button>
    </div>
  </div>
</template>

<script>
import router from "./../router";

export default {
  name: "AddPost",
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
      submitted: false,
      show: false,
      showDismissibleAlert: false,
    };
  },
  methods: {
    savePost() {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: this.post.title,
          body: this.post.body,
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => {
          if (response) {
            this.show = true;
            this.showDismissibleAlert = true;
            setTimeout(function() {
              // Console log response of successfully submitted post
              console.log(response);
              router.push("/collection");
            }, 1800);
          } else {
            this.show = false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
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
