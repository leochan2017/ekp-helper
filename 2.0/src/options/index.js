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
  // request.headers.set('Pragma', 'no-cache')
  // request.headers.set('Cache-Control', 'no-cache')
  // if (request.method === 'POST') {
  //   let reqBody = request.body
  //   if (reqBody) {
  //     if (reqBody.createTime) delete reqBody.createTime
  //     if (reqBody.modifyTime) delete reqBody.modifyTime
  //     if (reqBody.enabledTime) delete reqBody.enabledTime
  //   }
  // }

  // let userInfo = localStorage.getItem('userInfo')
  // // console.log('main userInfo', userInfo)

  // if (userInfo) {
  //   userInfo = JSON.parse(userInfo)
  //   store.commit('setParam', { userInfo })
  //   const token = userInfo.token
  //   // 设置header 头
  //   if (token) request.headers.set('Authorization', token)
  // }

  let loading = ''
  let tLoading = setTimeout(_ => {
    loading = ElementUI.Loading.service({ fullscreen: true })
  }, 600)

  next(response => {
    clearTimeout(tLoading)
    if (typeof loading === 'object') loading.close()

    // const body = response.body
    // const status = body.status

    // let errMsg = ''
    // let message = body.message
    // // console.log('Util.platUrl', Util.platUrl)

    // if (!body) {
    //   errMsg = '集合返回失败，请联系管理员'
    // } else if (!status) {
    //   errMsg = message || '系统繁忙，请稍候再试'
    // } else if (status === 401) { // 登录超时
    //   response.ok = false
    //   let reUrl = `${Util.platUrl}`
    //   let con = body.content || ''
    //   if (con && typeof con === 'string' && con.indexOf('http') !== -1) reUrl = con
    //   // console.log('reUrl', reUrl)
    //   location.href = reUrl
    // } else if (status !== 200) {
    //   errMsg = message || `系统繁忙，错误码:${status}`
    // } else if (typeof body.content === 'undefined') {
    //   errMsg = '糟糕，服务器返回数据内容为空'
    // }

    // if (errMsg !== '') {
    //   response.ok = false
    //   ElementUI.Notification.error(errMsg)
    // }

    return response
  })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render (h) {
    return h('app')
  },
  components: { App }
})
