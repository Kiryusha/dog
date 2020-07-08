<template functional>
  <router-link
    class="link"
    to="/"
  >
    <app-icon
      class="logo"
      name="logo"
    />
  </router-link>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style lang="scss" scoped>
.link {
  display: inline-block;
}

.logo {
  width: 118px;
  height: 27px;
}
</style>
