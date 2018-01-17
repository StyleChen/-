// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import iview from 'iview'
import Resource from 'vue-resource'
import Vddl from 'vddl'
import App from './App'
import router from './router'
import 'iview/dist/styles/iview.css'
import './assets/style/vars.css'
import '../static/utf8-net/ueditor.config'
import '../static/utf8-net/ueditor.all'
import '../static/utf8-net/lang/zh-cn/zh-cn'

Vue.config.productionTip = false
Vue.use(iview)
Vue.use(Resource)
Vue.use(Vddl)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
