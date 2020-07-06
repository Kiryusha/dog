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
  processedList (state) {
    switch (state.sorting) {
      case 'alphabetical':
        return [...state.data].sort((a, b) => {
          return a.breed > b.breed ? 1 : -1
        })
      default:
        return state.data
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
