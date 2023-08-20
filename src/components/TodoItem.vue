<script setup>

const props = defineProps({
  todo: {
    type: Object,
    required: true,
  }
})
</script>

<template>
  <article class="card-todo">
    <div class="card-todo__content">
      <div class="card-todo__title">
        {{ todo.title }}
      </div>
    </div>
    <span
        class="card-todo__status card-todo__status--success" v-if="todo.completed">
      task is done
    </span>
    <span
        class="card-todo__status"
        v-else
    >
      task is in progress
    </span>
  </article>
</template>


<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.card-todo {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  padding: 30px 70px 50px 30px;
  clip-path: polygon(83% 0, 100% 29%, 100% 100%, 0 100%, 0 0);
  border-radius: 3px;
  background-color: #ffe6e6;
  -webkit-box-shadow: 1px 2px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 1px 2px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 1px 2px 8px 0px rgba(34, 60, 80, 0.2);
  @media screen and (max-width: 768px) {
    padding: 30px;
    clip-path: none;
  }

  &:before {
    content: '';
    position: absolute;
    display: block;
    right: -33px;
    top: 0;
    background-color: #ffeded;
    border: 0 solid transparent;
    border-bottom-width: 0px;
    border-top-width: 98px;
    border-left: 98px solid #ffeded;
    -webkit-box-shadow: 4px 6px 12px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 4px 6px 12px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 4px 6px 12px 0px rgba(34, 60, 80, 0.2);
    @media screen and (max-width: 768px) {
     content: none;
    }
  }

  &:after {
    content: '';
    position: absolute;
    display: block;
    right: -5px;
    top: 0;
    background-color: #ffe4e4;
    opacity: .7;
    width: 100px;
    height: 100px;
    clip-path: polygon(0% -70%, 74% 100%, 100% 100%);
    @media screen and (max-width: 768px) {
      content: none;
    }
  }

  &__title {
    font-family: $font-accent;
    font-size: 30px;
    color: #274d62;
    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
  }

  &__status {
    display: block;
    background-color: #ead1cd;
    border-radius: 5px;
    padding: 5px 10px;
    width: fit-content;

    &--success {
      background-color: #dcefdb;
    }
  }
}
</style>