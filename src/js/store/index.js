import Vue from 'vue'
import Vuex from 'vuex'

import auth from "./modules/auth/auth"
import products from "./modules/products/products"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    products
  }
})
