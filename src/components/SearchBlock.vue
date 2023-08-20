<script setup>
import usePostStore from "@/stores/postStore";
import {ref} from "vue";
import IconSearch from "@/components/icons/IconSearch.vue";

const postStore = usePostStore();
const searchTerm = ref('');


</script>

<template>
  <form
      class="form"
      @submit.prevent="postStore.sortPosts(searchTerm)">
    <div class="form__search-block">
      <button class="form__button" type="submit">
        <IconSearch/>
      </button>
      <label class="form__label">
        <input
            class="form__input"
            type="text"
            placeholder="Filter by author..."
            v-model="searchTerm"
            @input.prevent="postStore.sortPosts(searchTerm)"/>
      </label>
    </div>
  </form>
</template>


<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.form {
  display: flex;
  width: 33%;
  margin: 0 auto 30px;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  &__search-block {
    display: flex;
    align-items: center;
    height: 40px;
    width: 100%;
    -webkit-box-shadow: 2px 2px 8px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 2px 2px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 2px 2px 8px 0px rgba(34, 60, 80, 0.2);
    border-radius: 5px;
    overflow: hidden;
  }

  &__label {
    display: block;
    width: 100%;
  }

  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 40px;
    height: 100%;
    background-color: #ffffff;
    outline: 1px solid $color-main;
    border: none;
    cursor: pointer;

    svg {
      fill: #a2a2a2;
      width: 25px;
      height: 25px;
    }
  }

  &__input {
    display: block;
    width: 100%;
    padding: 10px 15px;
    border: none;
    outline: none;

    &:focus {
      outline: 1px solid $color-main;
    }
  }
}
</style>