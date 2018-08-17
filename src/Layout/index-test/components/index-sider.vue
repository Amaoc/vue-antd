<template>
   <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed"
   >
     <div class="logo">
      <img :src="logo" alt="">
    </div>
    <a-menu
      :defaultSelectedKeys="['home']"
      mode="inline"
      theme="dark"
      :inlineCollapsed="collapsed"
      @click="handleClick"
    >
      <a-menu-item key="home">
        <a-icon type="home" />
        <span>首页</span>
      </a-menu-item>
      <a-menu-item key="RequestInquiry/list">
        <a-icon type="pie-chart" />
        <span>询价单</span>
      </a-menu-item>
      <a-menu-item key="PackingSlip/list">
        <a-icon type="appstore" />
        <span>码单</span>
      </a-menu-item>
      <a-menu-item key="Declaration/list">
        <a-icon type="solution" />
        <span>报单</span>
      </a-menu-item>
      <a-menu-item key="Demo/page1/123?type=1">
        <a-icon type="solution" />
        <span>报单</span>
      </a-menu-item>
      <!-- <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="mail" /><span>询价单</span></span>
        <a-menu-item key="5">询价单</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title"><a-icon type="appstore" /><span>码单</span></span>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title"><a-icon type="appstore" /><span>报单</span></span>
      </a-sub-menu> -->
    </a-menu>
  </a-layout-sider>
</template>

<script>
import Vue from 'vue'
import { Layout, Menu, Icon } from 'ant-design-vue'
import logo from '@/assets/logo.png'
import { mapState } from 'vuex'
import { vuxModuleName } from '../store'

Vue.component(Icon.name, Icon)
Vue.component(Layout.Sider.name, Layout.Sider)
Vue.component(Menu.name, Menu)
Vue.component(Menu.Item.name, Menu.Item)
Vue.component(Menu.SubMenu.name, Menu.SubMenu)

export default {
  data () {
    return {
      logo
    }
  },
  computed: {
    ...mapState(vuxModuleName, {
      collapsed: state => state.collapsed
    })
  },
  methods: {
    handleClick (e) {
      if (e.key) {
        let url = '/index/' + e.key
        this.$router.push(url)
      }
    }
  }
}
</script>

<style>
.logo {
  height: 32px;
  margin: 25px 10px;
  text-align: center;
}
.logo img{
  width: 100%;
  max-width: 100px;
}
</style>
