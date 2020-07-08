<template lang="html">
  <section class="filters">
    <BreedList />
  </section>
</template>

<script>
import BreedList from '@/components/index/BreedList'

export default {
  name: 'Filters',

  components: {
    BreedList
  }
}
</script>

<style lang="scss" scoped>
.filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
}
</style>
