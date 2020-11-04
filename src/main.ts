import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
Vue.use(ViewUI)

import VueLoading from 'vuejs-loading-plugin'
Vue.use(VueLoading)

import common from './common'
Vue.mixin(common)

Vue.config.productionTip = false
Vue.use(VueLoading, {
  dark: true, // default false
  text: 'loading', // default 'Loading'
  loading: true, // default false
  background: 'rgb(255,255,255)', // set custom background
  classes: ['myclass'] // array, object or string
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
