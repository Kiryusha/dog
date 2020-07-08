<template>
  <div class="home">
    <div class="content">
      <app-list
        :list="favourites"
        :favourites="favourites"
        @click="handleClick"
      />
    </div>
  </div>
</template>

<script>
import {
  mapMutations,
  mapState
} from 'vuex'

export default {
  name: 'Favourites',

  computed: {
    ...mapState('favourites', { favourites: 'data' })
  },

  methods: {
    ...mapMutations('favourites', ['toggleItem']),

    handleClick (item) {
      this.toggleItem(item)
    }
  }
}
</script>
