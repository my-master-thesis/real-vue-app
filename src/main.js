import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueRx from 'vue-rx'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueRx)
Vue.filter('filter', function (items, pageIndex, pageSize = 10) {
  if (!items || typeof pageIndex !== 'number' || pageIndex < 0) {
    return items;
  }
  return items.slice((pageIndex) * pageSize, (pageIndex + 1) * pageSize);
})

new Vue({
  render: h => h(App),
}).$mount('#app')
