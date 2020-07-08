<template lang="html">
  <div
    class="sorting"
    :class="{'active': sorting === 'alphabetical'}"
    @click="toggleSorting"
  >
    <div class="text">
      Сортировка по алфавиту
    </div>
    <div class="switcher">
      <span />
    </div>
  </div>
</template>

<script>
import {
  mapState,
  mapMutations
} from 'vuex'

export default {
  name: 'Sorting',

  computed: {
    ...mapState('list', ['sorting'])
  },

  methods: {
    ...mapMutations('list', ['setSorting']),

    toggleSorting () {
      if (this.sorting.length) {
        this.setSorting('')
      } else {
        this.setSorting('alphabetical')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sorting {
  display: flex;
  align-items: center;
  color: $gray;
  cursor: pointer;

  &.active {
    color: $white;

    .switcher span {
      left: 16px;
      background: $white;
    }
  }
}

.text {
  margin-right: 15px;
}

.switcher {
  position: relative;
  width: 30px;
  height: 15px;
  border-radius: 7px;
  border: 1px solid;
  transition: .33s;

  span {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: $gray;
    transition: .33s;
  }
}
</style>
