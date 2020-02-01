import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/landing',
    name: 'landing',
    component: () => import('../views/UserLanding.vue')
  },
  {
    path: '/viewquestion/:questionId',
    name: 'viewquestion',
    component: () => import('../views/Viewquestion.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/categoryselection',
    name: 'categoryselection',
    component: () => import('../views/CategorySelection.vue')
  },
  {
    path: '/createorganization',
    name: 'createorganization',
    component: () => import('../views/CreateOrganization.vue')
  },
  {
    path: '/selectrole',
    name: 'selectrole',
    component: () => import('../views/SelectRole.vue')
  },
  {
    path: '/profile/:userId/:approvalFlag',
    name: 'profile',
    component: () => import('../views/UserProfile.vue')
  },
  {
    path: '/userapproveanswer/:questionIdToApprove',
    name: 'userapproveanswer',
    component: () => import('../views/UserApproval.vue')
  },
  {
    path: '/organizationProfile/:organizationId',
    name: 'organizationprofile',
    component: () => import('../views/OrganizationProfile.vue')
  },
  {
    path: '/myprofile',
    name: 'myprofile',
    component: () => import('../views/MyProfile.vue')
  }, 
  {
    path: '/searchresults',
    name: 'searchresults',
    component: () => import('../views/SearchResults.vue')
  },
  {
    path: '/moderator',
    name: 'moderator',
    component: () => import('../views/moderator/Moderator.vue'),
    children: [
      {
        path: 'approveuser',
        name: 'approveuser',
        component: () => import('../views/moderator/ModeratorApproveUser.vue')
      },
      {
        path: 'approvequestion',
        name: 'approvequestion',
        component: () => import('../views/moderator/ModeratorApproveQuestion.vue')
      },
      {
        path: 'approveanswer',
        name: 'approveanswer',
        component: () => import('../views/moderator/ModeratorApproveAnswer.vue')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
