// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//  引入border.css 是为了解决某些手机在两倍屏三倍屏的情况下，1px边框显示成2px或者3px的问题
//  引入fastclick是为了解决触屏手机上部分存在的点击300ms延迟的问题
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import 'styles/reset.css'
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
