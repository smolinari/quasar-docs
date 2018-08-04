
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
        path: 'guide',
        component: () => import('pages/guide/Index.vue')
      },
      {
        path: 'components',
        component: () => import('pages/components/Index.vue')
      },
      {
        path: 'components/button',
        component: () => import('pages/components/Button.vue')
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
