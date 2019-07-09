// 创建路由对象 及 配置路由规则 和 其他路由配置
import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from '@/views/login'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', name: 'login', component: Login }
  ]
})

export default router
