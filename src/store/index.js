import Vue from 'vue'
import Vuex from 'vuex'
import admin from './admin';
import roleBase from './rolebase';
Vue.use(Vuex)


export default new Vuex.Store({
  namespaced: true,
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    admin: admin,
    roleBase: roleBase
  }
})
