import Vue from 'vue'
import { router } from './router'
import './plugins/vuetify'
import { i18n } from './plugins/i18n'
import App from './App.vue'
import './registerServiceWorker'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.min.css'
Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
