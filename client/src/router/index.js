import Vue from 'vue'
import Router from 'vue-router'
import EditData from '@/components/EditData'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/EditData',
      name: 'EditData',
      component: EditData
    }
  ]
})
