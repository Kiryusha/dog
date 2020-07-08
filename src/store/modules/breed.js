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
    const items = message.map(item => ({
      url: item,
      breed: parseBreed(item)
    }))

    state.data = [...state.data, ...items]
  }
}

const actions = {
  async fetchData ({ commit, state: { pageSize } }, breed) {
    commit('startFetchingData')
    try {
      const response = await fetchBreed({ breed, amount: pageSize })
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
