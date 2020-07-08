<template lang="html">
  <div class="breed-list">
    <div class="controls">
      <div
        class="trigger"
        :class="{'active': isOpen}"
        @click="toggleOpen"
      >
        Породы
        <app-icon
          class="arrow"
          name="arrow"
        />
      </div>
      <div
        v-if="currentBreed"
        class="current"
      >
        <router-link
          class="breed active"
          to="/"
        >
          {{ currentBreed }}
          <app-icon
            class="cross"
            name="cross"
          />
        </router-link>
      </div>
    </div>
    <div
      class="hidden-content"
      :class="{'active': isOpen}"
    >
      <div class="all">
        <router-link
          class="breed"
          to="/"
          :class="{'active': !currentBreed}"
        >
          Все пёсели
        </router-link>
      </div>
      <div class="list">
        <template v-for="(capital, index) in capitals">
          <span :key="index" class="capital">
            {{ capital }}
          </span>
          <router-link
            v-for="(breed, index) in groupedBreeds[capital]"
            :key="index"
            :to="`/${breed}`"
            class="breed"
            :class="{'active': breed === currentBreed}"
          >
            {{ breed }}
          </router-link>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapState,
  mapMutations,
  mapGetters
} from 'vuex'

export default {
  computed: {
    ...mapState('breeds', ['isOpen']),
    ...mapGetters('breeds', ['groupedBreeds']),

    capitals () {
      return Object.keys(this.groupedBreeds)
    },

    currentBreed () {
      return this.$route.params.breed
    }
  },

  methods: {
    ...mapMutations('breeds', ['toggleOpen'])
  }
}
</script>

<style lang="scss" scoped>
.trigger {
  display: inline-block;
  color: $white;
  border-bottom: 1px dotted;
  cursor: pointer;

  &.active .arrow {
    transform: rotate(180deg);
  }
}

.controls {
  display: flex;
}

.current {
  margin-left: 15px;
}

.arrow {
  width: 9px;
  height: 5px;
  transition: .33s;
}

.cross {
  position: relative;
  top: 1px;
  width: 6px;
  height: 6px;
  margin-right: 2px;
  margin-left: 5px;
}

.capital {
  @include typography-capital;
  margin-right: 15px;
  margin-bottom: 15px;

  &:first-letter {
    text-transform: capitalize;
  }
}

.list,
.breeds {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.list {
  align-items: flex-start;
  margin-right: -40px;
  margin-bottom: -15px;
}

.breed {
  @include typography-breed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  margin-right: 15px;
  margin-bottom: 15px;
  padding: 0 10px;
  border-radius: 12px;
  border: 1px solid;
  cursor: pointer;
  transition: .33s;

  &.active,
  &:hover {
    color: $blue;
  }
}

.all {
  display: flex;
  align-items: flex-start;
  padding-top: 26px;
}

.breed + .capital {
  margin-left: 40px;
}

.hidden-content {
  max-height: 0;
  opacity: 0;
  visibility: hidden;
  overflow: hidden;
  transition: .33s;

  &.active {
    max-height: 350px;
    opacity: 1;
    visibility: visible;
  }
}
</style>
