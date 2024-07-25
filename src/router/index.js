import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/Rootlayot.vue'),
      children:[
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: '/properitins',
          name: 'properitins',
          component: () => import('../views/properitins.vue')
        },
        {
          path: '/rent',
          name: 'rent',
          component: () => import('../views/RentView.vue')
        },
        {
          path: '/sell',
          name: 'sell',
          component: () => import('../views/sellHomeView.vue')
        },
        {
          path: '/detailsView',
          name: 'detailsView',
          component: () => import('../views/detailsView.vue')
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import('../views/profileView.vue')
        },
        {
          path: '/userPassword',
          name: 'userPassword',
          component: () => import('../views/userPasswordView.vue')
        },
        {
          path: '/myProperty',
          name: 'myProperty',
          component: () => import('../views/myPropertyView.vue')
        },
        {
          path: '/liveHome',
          name: 'liveHome',
          component: () => import('../views/liveHomeView.vue')
        },
        {
          path: '/comments',
          name: 'comments',
          component: () => import('../views/CommentsView.vue'),
        }, 
        {
          path: '/commentsUser',
          name: 'commentsUser',
          component: () => import('../views/commentUserView.vue'),
        },
        {
          path: '/notification',
          name: 'notification',
          component: () => import('../views/notificationView.vue')
        },
        {
          path: '/support',
          name: 'support',
          component: () => import('../views/supportView.vue')
        },
        {
          path: '/record',
          name: 'record',
          component: () => import('../views/recordView.vue')
        },
        {
          path: '/plan',
          name: 'plan',
          component: () => import('../views/planView.vue')
        },
        {
          path: '/blog',
          name: 'blog',
          component: () => import('../views/blogView.vue')
        } ,
        {
          path: '/detailsBlog',
          name: 'detailsBlog',
          component: () => import('../views/detailsBlogView.vue')
        },
        {
          path: '/contactUs',
          name: 'contactUs',
          component: () => import('../views/contactUs.vue')
        },
        {
          path: '/404',
          name: '404',
          component: () => import('../views/404View.vue')
        },
        {
          path: '/edit/:productId',
          name: 'edit',
          component: () => import('../views/EditView.vue')
        },
       
      ]
    },
    {
      path: '/auth',
      component: () => import('../layouts/Authlayot.vue'),
      children: [{
        path:'login',
        component: () => import('../views/loginView.vue')
      },{
        path:'register',
        component: () => import('../views/RegisterView.vue')
      },
    ]
    },
    {
      path: '/realstate',
      // component: () => import('../layouts/Authlayot.vue'),
      children: [
        {
        path:'profileUsers',
        component: () => import('../profileProperty/ProfileUsersView.vue')
      },
      {
        path:'adminPassword',
        component: () => import('../profileProperty/AdminPassword.vue')
      },
      {
        path:'myHome',
        component: () => import('../profileProperty/MyHomeView.vue')
      },
      {
        path:'liveHomeAdmin',
        component: () => import('../profileProperty/LiveHomeAdmin.vue')
      },
      {
        path: 'commentsAdmin',
        component: () => import('../profileProperty/commentAdmin.vue'),
      },
    ]
    }
   
   
  ]
})

export default router;
