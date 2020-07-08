<template>
  <div class="home">
    <div class="content">
      <Filters />
    </div>
  </div>
</template>

<script>
import Filters from '@/components/index/Filters'
import { mapActions } from 'vuex'

export default {
  name: 'Dog',

  components: {
    Filters
  },

  created () {
    this['list/fetchData']()
    this['breeds/fetchData']()
  },

  methods: {
    ...mapActions(['list/fetchData', 'breeds/fetchData'])
  }
}
</script>
