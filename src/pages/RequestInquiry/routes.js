const lazy = (path) => () => import(`@/pages/RequestInquiry/${path}`)

export default [
  {
    path: 'RequestInquiry/list',
    name: 'RequestInquiry-list',
    component: lazy('list/index'),
    meta: {
      name: '询价单列表'
    }
  },
  {
    path: 'RequestInquiry/detail',
    name: 'RequestInquiry-detail',
    component: lazy('detail/index'),
    meta: {
      name: '询价单详情'
    }
  }
]
