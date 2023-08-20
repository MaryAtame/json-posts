<script setup>
import PostItem from "@/components/PostItem.vue";
import usePostStore from "@/stores/postStore";
import {onMounted} from "vue";

const postStore = usePostStore()

onMounted(() => {
  postStore.getPosts()
})

</script>


<template>
  <div class="post-grid">
    <transition-group name="post-list">
      <post-item
          v-for="post of postStore.posts"
          :key="post.id"
          :post="post"
      />
    </transition-group>
  </div>
</template>


<style lang="scss" scoped>
.post-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  gap: 30px;
  grid-auto-flow: row;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
</style>