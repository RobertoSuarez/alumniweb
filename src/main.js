import 'font-awesome/css/font-awesome.min.css'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import router from './router/router'
import store from './store'
import axios from './plugins/axios'
import VueAxios from 'vue-axios'


Vue.config.productionTip = false
Vue.use(VueAxios, axios)

Vue.use(VueRouter)


new Vue({
  router: router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
