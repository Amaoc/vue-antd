const lazy = (path) => () => import(`@/pages/Declaration/${path}`)

export default [
  {
    path: 'Declaration/list',
    name: 'Declaration-list',
    component: lazy('list/index'),
    meta: {
      name: '报单列表'
    }
  },
  {
    path: 'Declaration/detail',
    name: 'Declaration-detail',
    component: lazy('detail/index'),
    meta: {
      name: '报单详情'
    }
  }
]
