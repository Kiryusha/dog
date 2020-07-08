// Модуль отвечает за полчуение и хранение фотографий конкретной породы

import {
  fetchBreed
} from '@/api/dog'
import parseBreed from '@/util/parseBreed'

const state = () => {
  return {
    data: [],
    isFetching: false,
    pageSize: 20,
    currentBreed: ''
  }
}

const mutations = {
  startFetchingData (state) {
    state.isFetching = true
  },

  stopFetchingData (state) {
    state.isFetching = false
  },

  fetchedData (state, { message = {}, shouldAdd }) {
    const items = message.map(item => ({
      url: item,
      breed: parseBreed(item)
    }))

    if (shouldAdd) {
      state.data = [...state.data, ...items]
    } else {
      state.data = items
    }
  }
}

const actions = {
  async fetchData ({ commit, state: { pageSize } }, { breed, shouldAdd }) {
    commit('startFetchingData')
    try {
      const response = await fetchBreed({ breed, amount: pageSize })
      commit('fetchedData', { message: response.data.message, shouldAdd })
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
