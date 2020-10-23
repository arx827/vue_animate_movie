import Vue from 'vue';
import Vuex from 'vuex';
import { ScenceManger } from './scence_manger/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isShow: 'Opening',
    isLoading: false,
    isOptShow: false,
    isFinally: false,
    loadingDelay: 500, // 附加延遲
  },
  actions: {
    updateLoading(context, status) {
      context.commit('LOADING', status);
    },
    updateOpt(context, status) {
      context.commit('OPTIONSHOW', status);
    },
    updateFinally(context, status) {
      context.commit('FINALLY', status);
    },
    updateShow(context, status) {
      context.commit('CHANGESHOW', status);
    },
  },
  mutations: {
    LOADING(state, status) {
      state.isLoading = status;
    },
    OPTIONSHOW(state, status) {
      state.isOptShow = status;
    },
    FINALLY(state, status) {
      state.isFinally = status;
    },
    CHANGESHOW(state, status) {
      state.isShow = status;
    },
  },
  modules: {
    ScenceManger,
  },
});
