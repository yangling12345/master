// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'

import axios from "axios"
Vue.prototype.$http = axios

//import Swiper from 'Swiper'

//样式
import './assets/css/font/iconfont.css'
import './assets/css/reset.css'
import '../node_modules/mint-ui/lib/style.css'

import './assets/css/swiper-3.4.2.min.css'
import '../static/swiper-3.4.2.min.js'


//import './assets/css/animate.min.css'
//import 	Swiper from '../static/swiper-3.4.2.min.js'
//import 	Swiper from '../static/swiper-3.4.2.jquery.min.js'
//import 	Swiper from '../static/swiper.animate1.0.2.min.js'

//////////////////
import ElementUI from 'element-ui'
 Vue.use(ElementUI)
import 'element-ui/lib/theme-chalk/index.css'

//公共组件
import vHeader from './components/common/Header.vue'
import vFooter from './components/common/Footer.vue'
import vBanner from './components/home/Banner.vue'
//全局注册组件
Vue.component('v-header',vHeader)
Vue.component('v-footer',vFooter)
Vue.component('v-banner',vBanner)


//登录注册
import { Field } from 'mint-ui';
Vue.component(Field.name, Field);

import { Button } from 'mint-ui';
Vue.component(Button.name, Button);


//轮播图
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//对整个页面使用fastclick避免300ms延迟问题
fastclick.attach(document.body);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
