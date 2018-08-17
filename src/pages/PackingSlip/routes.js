const lazy = (path) => () => import(`@/pages/PackingSlip/${path}`)

export default [
  {
    path: 'PackingSlip/list',
    name: 'PackingSlip-list',
    component: lazy('list/index'),
    meta: {
      name: '码单列表'
    }
  },
  {
    path: 'PackingSlip/detail',
    name: 'PackingSlip-detail',
    component: lazy('detail/index'),
    meta: {
      name: '码单详情'
    }
  }
]
