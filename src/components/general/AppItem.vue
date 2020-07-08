<template functional>
  <div
    class="app-item"
    :class="{'big': props.isBig}"
    :style="`background-image: url(${props.url});`"
    v-on="listeners"
  >
    <div class="gradient" />
    <div class="title">
      {{ props.breed }}
    </div>
    <template v-if="props.isFavourite">
      <app-icon
        class="heart"
        name="heartFull"
      />
    </template>
    <template v-else>
      <app-icon
        class="heart"
        name="heart"
      />
    </template>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: ''
    },

    breed: {
      type: String,
      default: ''
    },

    isBig: {
      type: Boolean,
      default: false
    },

    isFavourite: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.app-item {
  position: relative;
  width: calc(33.3% - 30px);
  height: 290px;
  margin-right: 30px;
  margin-bottom: 30px;
  background-size: cover;
  background-repeat: no-repeat;
  color: $white;
  cursor: pointer;

  &.big {
    width: 100%;
    height: 513px;

    .title {
      @include typography-big-item;
      right: 50px;
      bottom: 50px;
    }
  }
}

.gradient {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(1deg, #000000 -5.53%, rgba(0, 0, 0, 0) 54.45%);
}

.title {
  @include typography-item;
  position: absolute;
  right: 25px;
  bottom: 25px;

  &:first-letter {
    text-transform: capitalize;
  }
}

.heart {
  position: absolute;
  top: 25px;
  left: 25px;
  width: 29px;
  height: 26px;
}
</style>
