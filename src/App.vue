<script setup>
import {RouterView} from "vue-router";
import NavList from "@/components/NavList.vue";

</script>

<template>
  <main class="main">
    <header class="header">
      <div class="container">
        <nav class="nav">
          <nav-list/>
        </nav>
      </div>
    </header>
    <router-view/>
    <footer class="footer">
      <div class="container">
        <nav class="nav">
          <nav-list/>
        </nav>
      </div>
    </footer>
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.header,
.footer {
  width: 100%;
  padding: 20px 0;
  position: relative;
  z-index: 10;
  -webkit-box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
  @media (min-width: 1024px) {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}

.header {
  position: fixed;
  background-color: $color-main;
}

.footer {
  margin-top: auto;
  background-color: #7d9aa7;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;

}

.nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

</style>
