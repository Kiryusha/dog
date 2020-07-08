<template>
  <div
    class="app-list"
    ref="scroll-container"
  >
    <template v-if="list">
      <app-item
        v-for="(item, index) in processedList"
        :key="index"
        v-bind="item"
        :is-big="index === 0"
        :is-favourite="isFavourite(item)"
        @click="$emit('click', item)"
      />
    </template>
    <template v-else>
      Фоторграфий для такой породы не найдено.
    </template>
  </div>
</template>

<script>
export default {
  name: 'AppList',

  props: {
    favourites: {
      type: Array,
      default: () => []
    },

    list: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    processedList () {
      console.log(1)
      return this.list.map(item => ({
        ...item,
        isFavourite: !this.isFavourite(item)
      }))
    }
  },

  mounted () {
    document.addEventListener('scroll', this.handleScroll)
  },

  beforeDestroy () {
    document.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll (e) {
      if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        this.$emit('scrolledDown')
      }
    },

    isFavourite (item) {
      return !!(this.favourites.length && this.favourites.some(fav => fav.url === item.url))
    }
  }
}
</script>

<style lang="scss" scoped>
.app-list {
  display: flex;
  flex-wrap: wrap;
  margin-right: -30px;
  margin-bottom: -30px;
}
</style>
