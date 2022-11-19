//  配置路由
import Vue from "vue";
import VueRouter from "vue-router";
//使用路由
Vue.use(VueRouter)
//引入路由组件
import Login from '@/pages/Login/Login.vue'
import Message from '@/pages/Message/Message.vue'
import About from '@/pages/About/About.vue'
import Home from '@/pages/Home/Home.vue'
import Pig from '@/pages/Found/Pig.vue'
import Cla from '@/pages/Found/Cla.vue'
import Tap from '@/pages/Found/Tap.vue'
import Photo from '@/pages/Ent/Photo.vue'
import Talk from '@/pages/Ent/Talk.vue'
import Link from '@/pages/Link/Link.vue'
//配置路由
export default new VueRouter({
    routes:[
        {
            //默认页
            path:"/",
            redirect:"/home"
        },
        {
            //首页也是默认页
            path:"/home",
            component:Home
        },
        {
            //链接页
            path:"/link",
            component:Link
        },
        {
            //登录页
            path:"/login",
            component:Login
        },
        {
            //留言页
            path:"/message",
            component:Message
        },
        {
            //关于页
            path:"/about",
            component:About
        },
        {
            //发现页的归档
            path:"/pig",
            component:Pig
        },
        {
            //发现页的分类
            path:"/cla",
            component:Cla
        },
        {
            //发现页的标签
            path:"tap",
            component:Tap
        },
        {
            //娱乐的相册
            path:'/photo',
            component:Photo
        },
        {
            //娱乐的说说
            path:"/talk",
            component:Talk
        }
    ]
})