import store from '@/store/index'

var toRoute = store.state.global.toRoute
var vuexModuleName = toRoute.path

store.registerModule(vuexModuleName, {
  namespaced: true,
  state: {
    status: 0
  },
  getters: {
  },
  mutations: {
    changeStatus (state, payload) {
      state.status = payload.status
    }
  },
  actions: {
    getOrderList (data) {

    }
  }
})

export {
  store,
  vuexModuleName
}
