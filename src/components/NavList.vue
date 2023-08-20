<template>
  <nav-item>
    <template #icon>
      <IconCommunity/>
    </template>
    <template #link>
      <RouterLink to="/">Posts</RouterLink>
    </template>
  </nav-item>
  <nav-item>
    <template #icon>
      <IconPicture/>
    </template>
    <template #link>
      <RouterLink to="/todo">ToDoes</RouterLink>
    </template>
  </nav-item>
</template>

<script setup>
import {RouterLink} from 'vue-router'
import NavItem from "@/components/NavItem.vue";
import IconCommunity from "@/components/icons/IconCommunity.vue";
import IconPicture from "@/components/icons/IconPicture.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";
.nav__link {
  a {
    text-decoration: none;
    font-family: $font-accent;
    font-size: 20px;
    font-weight: 600;
  }
}
</style>