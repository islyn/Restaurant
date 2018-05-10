import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index'
import Login from '../pages/Login'
import Reg from '../pages/Reg'
import ShopCar from '../pages/ShopCar'
import Menu from '../pages/Menu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index

    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Reg',
      component: Reg
    },
    {
      path: '/shopCar',
      name: 'ShopCar',
      component: ShopCar
    },
    {
      path: '/menu/:id',
      name: 'Menu',
      component: Menu
      // query:{
      //   id
      // }
    }
  ]
})
