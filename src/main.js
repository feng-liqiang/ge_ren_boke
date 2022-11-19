import Vue from 'vue'
import App from './App.vue'


// 注册全局组件TapNav
import TapNav from '@/components/TapNav/TapNav.vue'
Vue.component('TapNav',TapNav)
import Footer from '@/components/Footer/Footer.vue'
Vue.component('Footer',Footer)
// 注册icon图标
import "@/assets/icon/iconfont.css"


//注册路由
import router from '@/router'
import store from '@/store'
//注册Element ui组件
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//使用组件
Vue.use(ElementUi)


Vue.config.productionTip = false
import {getGushi} from '@/api'
getGushi()

new Vue({
  render: h => h(App),
  //注册路由
  router,
  store
}).$mount('#app')
