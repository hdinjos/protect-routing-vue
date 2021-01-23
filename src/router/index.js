import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue'),
    meta: {
      requiresAuth:true
    }

  },
  {
    path: '/location',
    name: 'Location',
    component: () => import(/*webpackChunkName: "location" */ '../views/Location.vue')
  },
  {
    path: '/observable',
    name: 'Observable',
    component: () => import(/*webpackChunkName: "observable" */ '../views/Observable.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next)=> {
//   const isAuth = localStorage.getItem('user');
//   if (isAuth) {
//     next()
//   } else {
//     next({name: 'Login'});
//   }
// })

router.beforeEach((to, from, next) => { 
  if (to.matched.some(record => record.meta.requiresAuth)) { 
      // this route requires auth, check if logged in 
      // if not, redirect to login page. 
      const isAuth = localStorage.getItem('user');
      if (!isAuth) { 
          next({ 
              path: '/login', 
              query: { redirect: to.fullPath } 
          }) 
      } else { 
          next() 
      } 
  } else { 
      next() // make sure to always call next()! 
  } 
}) 


export default router
