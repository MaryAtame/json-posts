<script setup>
import TodoItem from "@/components/TodoItem.vue";
import usePostStore from "@/stores/postStore";
import {onMounted} from "vue";


const postStore = usePostStore()

onMounted(() => {
  postStore.getTodoes()
})
</script>

<template>
  <div class="todo-grid">
    <transition-group name="todo-list">
      <todo-item
          v-for="todo of postStore.todoes"
          :key="todo.id"
          :todo="todo"
      />
    </transition-group>
  </div>
</template>


<style lang="scss" scoped>
.todo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: row;
  gap: 30px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
</style>