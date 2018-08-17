/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * axios: axios
 *
 */

let baseUrl = '/'
let routerMode = 'history'

if (process.env.NODE_ENV === 'dev') {
  baseUrl = '/'
} else if (process.env.NODE_ENV === 'alpha') {
  baseUrl = '/'
} else if (process.env.NODE_ENV === 'prelease') {
  baseUrl = '/'
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = '/'
}

export {
  baseUrl,
  routerMode
}
