import 'font-awesome/css/font-awesome.min.css'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import router from './router/router'

Vue.config.productionTip = false
Vue.use(VueRouter)


new Vue({
  router: router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
