import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Подключение глобальных стилей
import '@/assets/scss/global.scss'

// Подключение глобальных компонентов
import '@/components/general/index'

Vue.config.productionTip = false

// Восстанавливаем данные из localStorage
store.commit('initialiseStore')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
