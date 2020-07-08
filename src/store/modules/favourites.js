// Модуль отвечает за полчуение и хранение данных об избранных фоторграфиях
// Его данные сохраняются в localStorage

const state = () => {
  return {
    data: []
  }
}

const mutations = {
  toggleItem (state, payload) {
    if (state.data.length && state.data.some(item => item.url === payload.url)) {
      state.data = state.data.filter(item => item.url !== payload.url)
    } else {
      state.data = [...state.data, payload]
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
