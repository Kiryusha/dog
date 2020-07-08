<template>
  <div class="home">
    <div class="content">
      <Filters />
      <app-list
        :list="processedList"
        :favourites="favourites"
        @click="handleClick"
        @scrolledDown="fetchMore"
      />
    </div>
  </div>
</template>

<script>
import Filters from '@/components/index/Filters'
import {
  mapGetters,
  mapActions,
  mapMutations,
  mapState
} from 'vuex'

export default {
  name: 'Home',

  components: {
    Filters
  },

  computed: {
    ...mapState('favourites', { favourites: 'data' }),
    ...mapGetters('list', ['processedList'])
  },

  created () {
    this.fetchList()
    this.fetchBreeds()
  },

  methods: {
    ...mapMutations('favourites', ['toggleItem']),

    ...mapActions('list', { fetchList: 'fetchData' }),

    ...mapActions('breeds', { fetchBreeds: 'fetchData' }),

    fetchMore () {
      this.fetchList()
    },

    handleClick (item) {
      this.toggleItem(item)
    }
  }
}
</script>
