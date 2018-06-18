import Vue from 'vue';
import Vuex from 'vuex';

import module from './module';

Vue.use(Vuex);

const state = {};

const actions = {};

const getters = {};

const mutations = {};

const store = new Vuex.Store({
  namespace: true,
  state,
  getters,
  actions,
  modules: module,
  mutations,
});

export default store;
