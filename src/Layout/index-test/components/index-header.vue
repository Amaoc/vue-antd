<template>
  <a-layout-header class="header">
    <a-icon
      class="trigger"
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="changeCollapsed"
    />
  </a-layout-header>
</template>

<script>
import Vue from 'vue'
import { Layout, Menu } from 'ant-design-vue'
import { mapState, mapMutations } from 'vuex'
import { vuxModuleName } from '../store'

Vue.component(Layout.Header.name, Layout.Header)
Vue.component(Menu.name, Menu)
Vue.component(Menu.Item.name, Menu.Item)

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState(vuxModuleName, {
      collapsed: state => state.collapsed
    })
  },
  methods: {
    ...mapMutations(vuxModuleName, [
      'changeCollapsed'
    ])
  }
}
</script>

<style scoped>
.header{
  background: #ffffff;
  padding: 0;
}
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}
.trigger:hover {
  color: #1890ff;
}

</style>
