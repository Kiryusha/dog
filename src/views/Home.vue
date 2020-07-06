<template>
  <div class="home">
    123
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Dog',

  created () {
    this['list/fetchData']()
    this['breeds/fetchData']()
  },

  methods: {
    ...mapActions(['list/fetchData', 'breeds/fetchData'])
  }
}
</script>
