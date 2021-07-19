import Vue from 'vue'
import App from './App.vue'
import router from './js/router'
import store from './js/store'


// - - - - - PLUGINS - - - - - //
import vuetify from './js/plugins/vuetify'
import Paginate from 'vuejs-paginate'


// - - - - - GLOBAL COMPONENT - - - - - //

// - - - - - STYLES - - - - - //
import './scss/index.scss'

Vue.config.productionTip = false
Vue.component('paginate', Paginate)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
