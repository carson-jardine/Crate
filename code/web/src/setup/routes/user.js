// App Imports
import Login from '../../modules/user/Login'
import Signup from '../../modules/user/Signup'
import Profile from '../../modules/user/Profile'
import Subscriptions from '../../modules/user/Subscriptions'
import EditProfile from '../../modules/user/EditProfile'
import PastOrders from '../../modules/user/PastOrders'

// User routes
export default {
  login: {
    path: '/user/login',
    component: Login
  },

  signup: {
    path: '/user/signup',
    component: Signup
  },

  profile: {
    path: '/user/profile',
    component: Profile,
    auth: true
  },

  editProfile: {
    path: '/user/edit-profile',
    component: EditProfile,
    auth: true
  },

  subscriptions: {
    path: '/user/subscriptions',
    component: Subscriptions,
    auth: true
  },

  pastOrders: {
    path: '/user/past-orders',
    component: PastOrders,
    auth: true
  }
}
