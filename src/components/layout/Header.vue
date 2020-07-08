<template>
  <header class="header">
    <div class="content">
      <Logo />
      <Navigation />
    </div>
  </header>
</template>

<script>
import Logo from '@/components/layout/Logo'
import Navigation from '@/components/layout/Navigation'

export default {
  name: 'Header',

  components: {
    Logo,
    Navigation
  }
}
</script>

<style lang="scss" scoped>
.header {
  box-shadow: 0px 8px 16px rgba(0, 0, 0, .55);
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
}

.link {
  display: inline-block;
}

.logo {
  width: 118px;
  height: 27px;
}
</style>
