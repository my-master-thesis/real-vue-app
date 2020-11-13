import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import VueRx from 'vue-rx'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueRx)

new Vue({
  render: h => h(App),
}).$mount('#app')
