// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './state'
import vueaxios from 'vue-axios'
import elm from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import Vant from 'vant'
import './mock' 
import 'vant/lib/index.css';
Vue.config.productionTip = false
Vue.use(vueaxios,axios)
Vue.use(Vant)
Vue.use(elm)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
