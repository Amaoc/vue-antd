import LayoutIndex from '@/Layout/index/index'
import HomeRoutes from '@/pages/Home/routes'
import Login from '@/pages/Login/routes'
import PackingSlip from '@/pages/PackingSlip/routes'
import RequestInquiry from '@/pages/RequestInquiry/routes'
import Declaration from '@/pages/Declaration/routes'
import Demo from '@/pages/Demo/routes'

let childrenIndex = [
  ...HomeRoutes,
  ...Declaration,
  ...RequestInquiry,
  ...PackingSlip,
  ...Demo
]

let routes = [
  {
    path: '/',
    redirect: '/index/home'
  },
  {
    path: '/index',
    redirect: '/index/home'
  },
  {
    path: '/index',
    component: LayoutIndex,
    meta: {
      name: '工作台'
    },
    children: childrenIndex
  },
  ...Login
]

export default routes
