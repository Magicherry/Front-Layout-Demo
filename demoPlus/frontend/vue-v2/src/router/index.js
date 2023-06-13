import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout.vue'
import Cookies from "js-cookie";

Vue.use(VueRouter)

const routes = [
    //  ====== 主页  =====
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/home',
    children: [  // 子路由
      //  ====  Box-Model Layout  ====
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/boxModel/BoxModelLayout.vue'),
      },
      //  ====  Fluid Layout  ====
      {
        path: 'fluidLayout',
        name: 'FluidLayout',
        component: () => import('@/views/fluid/FluidLayout.vue'),
      },
      //  ====  Flexbox Layout  ====
      {
        path: 'flexboxLayout',
        name: 'FlexboxLayout',
        component: () => import('@/views/flexbox/FlexboxLayout.vue'),
      },
      //  ====  Grid Layout  ====
      { 
        path: 'gridLayout', 
        name: 'GridLayout', 
        component: () => import('@/views/grid/GridLayout.vue') 
      },
      //  ====  Positioning Layout ====
      { 
        path: 'positioningLayout', 
        name: 'PositioningLayout', 
        component: () => import('@/views/position/PositioningLayout.vue') 
      },

      //  ====  Multi-Column Layout  ====
      
      { 
        path: 'multiColumnLayout', 
        name: 'MultiColumnLayout', 
        component: () => import('@/views/multiColumn/MultiColumnLayout') 
      },
     
      //  ====  Responsive Layout  ====
      { 
        path: 'responsiveLayout', 
        name: 'ResponsiveLayout', 
        component: () => import('@/views/responsive/ResponsiveLayout.vue') 
      },

      //  ====  Table Layout  ====
      { 
        path: 'tableLayout', 
        name: 'TableLayout', 
        component: () => import('@/views/table/TableLayout.vue') 
      },
    ]
  },
  {
    path: "*",
    component:() => import('@/views/404')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
