// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 解决es6语法不兼容的问题
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
// 解决点击200-300毫秒的延迟问题
import fastclick from 'fastclick'
// 全局引入样式
import 'common/stylus/index.styl'

Vue.config.productionTip = false
// 设置body下面的所有元素没有点击延迟的问题
fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // eslint-disable-next-line vue/require-render-return
  // 设置渲染模板
  render: h => h(App),
  // 挂载路由
  router
})
