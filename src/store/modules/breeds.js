import {
  fetchAllBreeds
} from '@/api/dog'

const state = () => {
  return {
    data: [],
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
  }
}

const actions = {
  async fetchData ({ commit, state: { pageSize } }) {
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
