import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueStash from 'vue-stash'

Vue.use(VueStash)
Vue.config.productionTip = false

new Vue({
  data: { store },
  router,
  render: h => h(App)
}).$mount('#app')
