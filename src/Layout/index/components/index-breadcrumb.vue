<template>
  <a-breadcrumb style="margin: 16px 0">
    <a-breadcrumb-item>Home</a-breadcrumb-item>
    <a-breadcrumb-item>List</a-breadcrumb-item>
    <a-breadcrumb-item>App</a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
import Vue from 'vue'
import { Breadcrumb } from 'ant-design-vue'

Vue.component(Breadcrumb.name, Breadcrumb)
Vue.component(Breadcrumb.Item.name, Breadcrumb.Item)

export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
</style>
