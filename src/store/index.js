// Основной модуль стора. Получает все остальные модули и часть из них сохраняет в localStorage

import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import list from './modules/list'
import breeds from './modules/breeds'
import breed from './modules/breed'
import favourites from './modules/favourites'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    version: '0.0.1'
  },
  mutations: {
    // Loading from localStorage
    initialiseStore (state) {
      if (localStorage.getItem('store')) {
        const store = JSON.parse(localStorage.getItem('store'))

        // Проверка версий нужна для того, чтобы быть уверенными, что структура модулей
        // не изменилась
        if (store.version === state.version) {
          this.replaceState(Object.assign(state, store))
        }
      }
    }
  },

  modules: {
    list,
    breeds,
    breed,
    favourites
  }
})

// Saving in localStorage
store.subscribe((mutation, state) => {
  const filteredStore = {
    version: state.version,
    favourites: state.favourites
  }

  localStorage.setItem('store', JSON.stringify(filteredStore))
})

export default store
