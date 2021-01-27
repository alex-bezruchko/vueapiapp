<template>
  <b-card v-if="post">
    <b-icon icon="x-circle" scale="2" variant="danger"></b-icon>
    <h3>
      {{ post.title }}
    </h3>
    <p>{{ post.body }}</p>
    <div class="divider"></div>
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
</template>

<script>
// chat-left-text
// import { BIconChatLeftText } from "bootstrap-vue";

export default {
  props: ["id"],
  data() {
    return {
      post: null,
      comments: null,
      commentsTotal: null,
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/posts/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.post = data))
      .catch((err) => console.log(err.message));

    fetch("https://jsonplaceholder.typicode.com/posts/" + this.id + "/comments")
      .then((res) => res.json())
      .then((data) => (this.comments = data))
      .then((data) => (this.commentsTotal = data.length))
      .catch((err) => console.log(err.message));
  },
  name: "Post",
};
</script>

<style lang="scss" scoped>
.divider {
  border: 1px solid black;
  height: 1px;
  max-height: 1px;
  margin-bottom: 2rem;
}
// .card-body {
//   h3,
//   p {
//     padding-right: 2rem;
//   }
// }
h3,
p,
.list-group-item {
  text-align: left;
}
.bi-x-circle {
  float: right;
}
</style>
