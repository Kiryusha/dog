<template lang="html">
  <section class="filters">
    <div class="left">
      <BreedList />
    </div>
    <div
      v-if="!currentBreed"
      class="right"
    >
      <Sorting />
    </div>
  </section>
</template>

<script>
import BreedList from '@/components/index/BreedList'
import Sorting from '@/components/index/Sorting'

export default {
  name: 'Filters',

  components: {
    BreedList,
    Sorting
  },

  computed: {
    currentBreed () {
      return this.$route.params.breed
    }
  }
}
</script>

<style lang="scss" scoped>
.filters {
  position: relative;
  padding: 50px 0;
}

.right {
  position: absolute;
  top: 50px;
  right: 0;
}
</style>
