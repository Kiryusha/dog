// Модуль отвечает за полчуение и хранение данных об избранных фоторграфиях
// Его данные сохраняются в localStorage

const state = () => {
  return {
    data: []
  }
}

const mutations = {
  addItem (state, payload) {
    state.data = [...state.data, payload]
  },

  removeItem (state, payload) {
    state.data = state.data.filter(item => item.url !== payload.url)
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
