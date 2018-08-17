<template>
  <a-breadcrumb style="margin: 16px 0">
    <a-breadcrumb-item><router-link to='/index/home'>工作台</router-link></a-breadcrumb-item>
    <a-breadcrumb-item v-for="bc in breadcrumbList" :key="bc.name">
      <router-link :to="bc.url" v-if="bc.url">{{ bc.name }}</router-link>
      <template v-if="!bc.url">{{ bc.name }}</template>
    </a-breadcrumb-item>
    <!-- <a-breadcrumb-item>App</a-breadcrumb-item> -->
  </a-breadcrumb>
</template>

<script>
import Vue from 'vue'
import { Breadcrumb } from 'ant-design-vue'
import { mapState } from 'vuex'

Vue.component(Breadcrumb.name, Breadcrumb)
Vue.component(Breadcrumb.Item.name, Breadcrumb.Item)

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      breadcrumbList: state => state.route.meta.Breadcrumb
    })
  },
  methods: {
  },
  created () {
  }
}
</script>

<style scoped>
</style>
