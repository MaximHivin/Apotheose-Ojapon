import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: HomeView
  },
  {
    path: '/test-upload',
    name: 'TestUpload',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TestUploadView.vue')
  },
  {
    path: '/test-createguide',
    name: 'TestCreateGuide',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TestCreateGuideView.vue')
  },
  {
    path: '/',
    hash: '#japon',
    name: 'LeJapon',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/LeJaponView.vue')
    component: HomeView
  },
  {
    path: '/register',
    name: 'Inscription',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterLayout.vue')
  },
  {
    path: '/pointsinteret',
    name: 'PointsInteret',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PointsInteretView.vue')
  },
  {
    path: '/blogs',
    name: 'BlogsVoyageurs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BlogsView.vue')
  },
  {
    path: '/faq',
    name: 'FAQ',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FaqView.vue')
  },
  {
    path: '/',
    hash: '#contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue')
    component: HomeView
  },
  {
    path: '/login',
    name: 'SeConnecter',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/backoffice/poi/add',
    name: 'PoiAdd',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CreatePoiView.vue')
  },
  {
    path: '/backoffice',
    name: 'BackOffice',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BackOffice.vue')
  },
  {
    path: '/listeguidesdevoyages',
    name: 'ListeGuidesDeVoyages',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ListeGuidesDeVoyages.vue')
  },
  {
    path: '/listeguidesdevoyages/:id',
    name: 'GuideDeVoyageDetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SingleGuide.vue')
  },

  {
    path: '/listeguidesdevoyages/:id/poi',
    name: 'GuideDeVoyagePOIList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BackPointsInteret.vue')
  },
  
  {
    path: '/createguide',
    name: 'CreateGuide',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateGuide.vue')
  },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router