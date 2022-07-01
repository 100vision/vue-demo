import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store ({
  state:{
    routes:[]
  },
  mutations:{
    saveRoutes2Store(state,routes_from_api) {
      state.routes = routes_from_api;
    }
  }
})


