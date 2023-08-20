<template>
  <div class="nav__item">
    <div class="nav__icon">
      <slot name="icon"></slot>
    </div>
    <div class="nav__link">
      <slot name="link"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavItem"
}
</script>

<style lang="scss" scoped>
.nav__item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
}


</style>