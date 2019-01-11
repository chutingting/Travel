import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/home/home'
import City from '@/pages/city/city'
import Detail from '@/pages/detail/detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      // component: Home'
      // 异步组件 实现按需加载  打开首页时只加载首页内容  项目很庞大时推荐使用 其余不推荐
      component: () => import('@/pages/home/home')
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  // 页面切换时回到最顶部
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
