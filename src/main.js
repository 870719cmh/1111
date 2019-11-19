// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAMap from 'vue-amap'
import echarts from 'echarts'
import VideoPlayer from 'vue-video-player'
import 'videojs-contrib-hls'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.config.productionTip = false

Vue.prototype.$echarts = echarts
Vue.use(ElementUI)
Vue.use(VideoPlayer)
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: '9dedbd8f3dc843233b8d0f5c1a745950',
  plugin: ['MarkerClusterer','AMap.DistrictSearch'],
  v: '1.4.4',
  uiVersion: '1.0.11'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
