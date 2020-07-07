// Модуль отвечает за полчуение и хранение фотографий конкретной породы

import {
  fetchBreed
} from '@/api/dog'
import parseBreed from '@/util/parseBreed'

const state = () => {
  return {
    data: [],
    isFetching: false,
    pageSize: 20
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
    state.data = message.map(item => ({
      url: item,
      breed: parseBreed(item)
    }))
  }
}

const actions = {
  async fetchData ({ commit, state: { pageSize } }, breed) {
    commit('startFetchingData')
    try {
      const response = await fetchBreed({ breed, pageSize })
      commit('fetchedData', response.data)
    } finally {
      commit('stopFetchingData')
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
