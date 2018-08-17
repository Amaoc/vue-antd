<template>
  <a-layout-header class="header">
    <div class="logo">
      <img :src="logo" alt="">
    </div>
    <a-menu
      theme="dark"
      mode="horizontal"
      :defaultSelectedKeys="['1']"
      :style="{ lineHeight: '64px' }"
    >
      <a-menu-item key="/index/home">首页</a-menu-item>
      <a-menu-item key="2">工作台</a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script>
import Vue from 'vue'
import { Layout, Menu } from 'ant-design-vue'
import logo from '@/assets/logo.png'

Vue.component(Layout.Header.name, Layout.Header)
Vue.component(Menu.name, Menu)
Vue.component(Menu.Item.name, Menu.Item)

export default {
  data () {
    return {
      logo,
      key1: '1'
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.logo {
  width: 120px;
  float: left;
  margin-right: 56px;
}
.logo img{
  width: 100px;
}
.header .ant-menu-item{
  padding: 0 50px;
}
</style>
