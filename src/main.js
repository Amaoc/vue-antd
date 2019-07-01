// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import { sync } from 'vuex-router-sync'
import { message, notification, Modal } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
sync(store, router)

Vue.prototype.$message = message
Vue.prototype.$notification = notification
Vue.prototype.$info = Modal.info
Vue.prototype.$success = Modal.success
Vue.prototype.$error = Modal.error
Vue.prototype.$warning = Modal.warning
Vue.prototype.$confirm = Modal.confirm

store.registerModule('global', {
  state: {
    isLoading: false,
    toRoute: {}
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    },
    updateToRoute (state, payload) {
      state.toRoute = payload.toRoute
    }
  }
})

router.beforeEach(function (to, from, next) {
  store.commit('updateToRoute', {'toRoute': to})
  store.commit('updateLoadingStatus', {isLoading: true})
  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    next()
  }
})

router.afterEach(function (to, from, next) {
  store.commit('updateLoadingStatus', {isLoading: false})
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
