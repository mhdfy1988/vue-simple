import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import moment from 'moment'
import axios from 'axios'
import _ from 'lodash'

Vue.prototype.$moment = moment
moment.locale('zh-cn')
Vue.prototype.$axios = axios
Vue.prototype._ = _

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
