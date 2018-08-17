<template>
  <a-layout id="Layout">
    <!-- 头部 -->
    <index-header></index-header>
    <a-layout>
      <!-- 侧边导航栏 -->
      <index-sider></index-sider>
      <a-layout style="padding: 0 24px">
        <!-- 面包屑导航 -->
        <index-breadcrumb></index-breadcrumb>
        <!-- 内容区域 -->
        <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
          <!-- Spin 加载中 -->
          <a-spin tip="页面加载中..." :spinning="isLoading">
            <div class="spin-content">
              <!-- 路由 -->
              <router-view></router-view>
            </div>
          </a-spin>
        </a-layout-content>
      </a-layout>
    </a-layout>
    <!-- 页面底部 -->
    <index-footer></index-footer>
    <!-- 返回顶部 -->
    <a-back-top>
      <div class="ant-back-top-content">
        <div class="ant-back-top-icon">
          <a-icon type="arrow-up"></a-icon>
        </div>
      </div>
    </a-back-top>
  </a-layout>
</template>

<script>
import Vue from 'vue'
import { Layout, Spin, BackTop, Icon } from 'ant-design-vue'
import indexHeader from './components/index-header'
import indexSider from './components/index-sider'
import indexBreadcrumb from './components/index-breadcrumb'
import indexFooter from './components/index-footer'
import { mapState, mapMutations } from 'vuex'
import { moduleName } from './store'

Vue.component(Spin.name, Spin)
// Vue.component(Spin.Content.name, Spin.Content)
Vue.component(Layout.name, Layout)
Vue.component(Icon.name, Icon)
Vue.component(BackTop.name, BackTop)
Vue.component(Layout.Content.name, Layout.Content)

export default {
  name: 'layout',
  components: {
    indexHeader,
    indexSider,
    indexBreadcrumb,
    indexFooter
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapMutations(moduleName, [
      'changeStatus'
    ])
  },
  computed: {
    ...mapState({
      isLoading: state => state.global.isLoading
    })
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
