// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/* 解决移动端 300毫秒 点击延迟问题 */
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
/* 解决移动端白屏问题  让浏览器支持promise */
import 'babel-polyfill'

import store from './store'
import 'styles/reset.css'
/* 解决1像素问题 */
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
