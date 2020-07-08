<template functional>
  <nav>
    <div class="item">
      <router-link
        class="link"
        to="/favourites"
      >
        <span class="text">
          Избранные пёсели
        </span>
        <app-icon
          class="icon heart"
          name="heart"
        />
        <app-icon
          class="icon heart-full"
          name="heartFull"
        />
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  align-items: center;
}

.heart-full {
  display: none;
}

.link {
  display: inline-block;

  &.router-link-active {
    color: $white;

    .heart {
      display: none;
    }

    .heart-full {
      display: inline-block;
    }
  }
}

.icon {
  position: relative;
  top: 2px;
  width: 16px;
  height: 14px;
  margin-left: 10px;
}
</style>
