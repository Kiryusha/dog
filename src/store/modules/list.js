// Модуль отвечает за получение и хранение данных запроса случайных фотографий собак
// и их сортировку.

import {
  fetchRandom
} from '@/api/dog'
import parseBreed from '@/util/parseBreed'

const state = () => {
  return {
    data: [],
    pageSize: 20,
    isFetching: false,
    sorting: ''
  }
}

const mutations = {
  startFetchingData (state) {
    state.isFetching = true
  },

  stopFetchingData (state) {
    state.isFetching = false
  },

  fetchedData (state, { message = [] }) {
    const items = message.map(item => ({
      url: item,
      breed: parseBreed(item)
    }))

    state.data = [...state.data, ...items]
  },

  setSorting (state, payload) {
    state.sorting = payload
  }
}

const actions = {
  async fetchData ({ commit, state: { pageSize } }) {
    commit('startFetchingData')
    try {
      const response = await fetchRandom(pageSize)
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
