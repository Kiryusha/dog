import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import list from './modules/list'
import breeds from './modules/breeds'
// import breed from './modules/breed'
// import favourites from './modules/favourites'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    list,
    breeds
    // breed,
    // favourites
  }
})
