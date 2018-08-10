
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Landing.vue')
      },
      {
        path: 'components/button',
        component: () => import('pages/components/Button.vue')
      },
      {
        path: 'components/other',
        component: () => import('pages/components/Other.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
