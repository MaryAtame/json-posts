<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <article class="post">
    <div class="post__content">
      <div class="post__title">
        {{ post.title }}
      </div>
      <div class="post__text">
        {{ post.body }}
      </div>
    </div>

    <div class="post__author">
      {{ post.user.name }}
    </div>
  </article>
</template>


<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.post {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 30px;
  border-radius: 10px;
  background-color: #ffffff;
  -webkit-box-shadow: 1px 2px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 1px 2px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 1px 2px 8px 0px rgba(34, 60, 80, 0.2);

  &__title {
    font-family: $font-accent;
    font-size: 25px;
    margin-bottom: 15px;
    color: #274d62;
  }

  &__text {
    margin-bottom: 10px;
  }

  &__author {
    font-size: 14px;
    color: #a2a2a2;
  }
}
</style>