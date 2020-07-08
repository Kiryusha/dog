<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Header from '@/components/layout/Header'

export default {
  name: 'App',

  components: {
    Header
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
