import { createRouter, createWebHashHistory } from 'vue-router'
// import storage from 'utils/storage'
// import store from '../store'
// import { ElMessage } from 'element-plus'

const allModules = import.meta.globEager('./modules/*.js')
const routeList = []
Object.keys(allModules).forEach(path => {
  const fileName = path.replace(/(.*\/)*([^.]+).*/ig, '$2')
  const route = allModules[path][fileName] || allModules[path].default || allModules[path]
  routeList.push(route)
})

export const otherRoute = [
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: () => import('@/views/other/login.vue'),
  // },
  // {
  //   path: '/register',
  //   name: 'Register',
  //   component: () => import('@/views/other/register.vue'),
  // },
  // {
  //   path: '/notaccess',
  //   name: 'NotAccess',
  //   component: () => import('@/views/other/notAccess.vue'),
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...otherRoute,
    ...routeList,
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/other/notFound.vue'),
    },
  ],
})

// 不需要登录的路由
// const noLoginWhiteList = ['Login', 'NotFound', 'NotAccess']
// // 不需要权限验证的路由
// const whiteList = [
//   'NotAccess',
//   'ProfileBase',
// ]
// 权限判断
// router.beforeEach((to, from, next) => {
//   if (storage.getToken()) {
//     if (to.name === 'Login') {
//       next({ path: '/' })
//     } else {
//       // add admin whitelist
//       // if (store.state.user.userInfo.isAdmin) {
//       //   whiteList.push('ProfileBase_Organization')
//       // }
//       if (whiteList.includes(to.name)) {
//         next()
//       } else {
//         // const permission = store.state.user.permission
//         // if (permission) {
//         //   const hasPermission = permission[to.name] && permission[to.name].find(x => x === 'show')
//         //   if (hasPermission) {
//         //     next()
//         //   } else {
//         //     ElMessage.warning('您没有权限')
//         //     next({ path: '/notaccess', replace: true, query: { noGoBack: true, path: to.path } })
//         //   }
//         // } else {
//         //   next()
//         // }
//         next()
//       }
//     }
//   } else {
//     if (noLoginWhiteList.includes(to.name)) {
//       next()
//     } else {
//       next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
//     }
//   }
// })
router.afterEach(() => {
})

export default router
