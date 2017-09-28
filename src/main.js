// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import VueTouch from 'vue-touch'

Vue.config.productionTip = false

Vue.use(VueTouch, { name: 'v-touch' })
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // error: 'static/error.png',
  loading: 'static/loading.gif',
  attempt: 1
})

router.beforeEach((to, from, next) => {
  const scrollTop = to.query.s
  if (scrollTop && scrollTop == 1) {
    next()
  } else {
    document.body.scrollTop = 0
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
