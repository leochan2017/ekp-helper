import Vue from 'vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './main'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.use(ElementUI)

Vue.http.options.root = 'http://product.landray.com.cn/km/workhours/'

Vue.http.interceptors.push((request, next) => {
  request.headers.set('Access-Control-Allow-Origin', 'http://product.landray.com.cn')

  let loading = ''
  let tLoading = setTimeout(_ => {
    loading = ElementUI.Loading.service({ fullscreen: true })
  }, 600)

  console.log(ElementUI)

  next(response => {
    clearTimeout(tLoading)
    if (typeof loading === 'object') loading.close()

    const body = response.body
    const status = body.status

    if (body && typeof body === 'string' && body.indexOf('账号登录') !== -1) {
      response.ok = false
      ElementUI.MessageBox.alert('请先在EKP中登陆后再使用本插件', '温馨提示', {
        callback: action => {
          location.href = 'http://product.landray.com.cn/login.jsp'
        }
      })
    }
    return response
  })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render(h) {
    return h('app')
  },
  components: { App }
})