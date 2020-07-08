<template>
  <div class="home">
    <div class="content">
      <Filters />
      <app-list
        :list="list"
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
  mapActions,
  mapMutations,
  mapState
} from 'vuex'

export default {
  name: 'Breed',

  components: {
    Filters
  },

  computed: {
    ...mapState('favourites', { favourites: 'data' }),
    ...mapState('breeds', { breeds: 'data' }),
    ...mapState('breed', { list: 'data' }),

    currentBreed () {
      return this.$route.params.breed
    }
  },

  watch: {
    currentBreed (value) {
      this.fetchList({
        breed: this.currentBreed
      })
    }
  },

  created () {
    this.fetchList({
      breed: this.currentBreed
    })
    if (!this.breeds.length) {
      this.fetchBreeds()
    }
  },

  methods: {
    ...mapMutations('favourites', ['toggleItem']),

    ...mapActions('breed', { fetchList: 'fetchData' }),

    ...mapActions('breeds', { fetchBreeds: 'fetchData' }),

    fetchMore () {
      this.fetchList({
        breed: this.currentBreed,
        shouldAdd: true
      })
    },

    handleClick (item) {
      this.toggleItem(item)
    }
  }
}
</script>
