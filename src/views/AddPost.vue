<template>
  <div class="submit-form">
    <b-alert v-model="showDismissibleAlert" variant="success" dismissible>
      Post Addedd Successfully. Redirecting...
    </b-alert>
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="post.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="body">Body</label>
        <textarea
          class="form-control"
          id="body"
          required
          v-model="post.body"
          name="body"
          rows="15"
        />
      </div>

      <button @click="savePost" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newPost">Add</button>
    </div>
  </div>
</template>

<script>
import router from "./../router";

export default {
  name: "addPost",
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
      }).then((response) => {
        if (response) {
          this.show = true;
          this.showDismissibleAlert = true;
          setTimeout(function() {
            router.push("/collection");

            // Console log response of successfully post
            console.log(response);
          }, 1800);
        } else {
          this.show = false;
        }
      });
    },

    newPost() {
      this.submitted = false;
      this.post = {};
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
