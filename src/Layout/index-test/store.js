import store from '@/store/index'
const vuxModuleName = 'LayoutVuex'

store.registerModule(vuxModuleName, {
  namespaced: true,
  state: {
    collapsed: false
  },
  getters: {
  },
  mutations: {
    changeCollapsed (state) {
      state.collapsed = !state.collapsed
    }
  },
  actions: {
  }
})

export {
  vuxModuleName
}
