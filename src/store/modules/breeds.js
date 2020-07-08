// Модуль отвечает за полчуение и хранение данных пород и их группировку.

import {
  fetchAllBreeds
} from '@/api/dog'

const state = () => {
  return {
    data: [],
    isOpen: false,
    isFetching: false
  }
}

const mutations = {
  startFetchingData (state) {
    state.isFetching = true
  },

  stopFetchingData (state) {
    state.isFetching = false
  },

  fetchedData (state, { message = {} }) {
    state.data = Object.keys(message)
  },

  toggleOpen (state) {
    state.isOpen = !state.isOpen
  }
}

const actions = {
  async fetchData ({ commit }) {
    commit('startFetchingData')
    try {
      const response = await fetchAllBreeds()
      commit('fetchedData', response.data)
    } finally {
      commit('stopFetchingData')
    }
  }
}

const getters = {
  groupedBreeds (state) {
    return state.data.reduce((obj, breed) => {
      const firstLetter = breed.charAt(0)

      obj[firstLetter] = obj[firstLetter] || []
      obj[firstLetter] = [...obj[firstLetter], breed]

      return obj
    }, {})
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
