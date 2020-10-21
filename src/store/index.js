import Vue from "vue";
import Vuex from "vuex";
import { ScenceManger } from "./scence_manger/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    isOptShow: false,
    loadingDelay: 500 // 附加延遲
  },
  actions: {
    updateLoading(context, status) {
      context.commit("LOADING", status);
    },
    updateOpt(context, status) {
      context.commit("OPTIONSHOW", status);
    }
  },
  mutations: {
    LOADING(state, status) {
      state.isLoading = status;
    },
    OPTIONSHOW(state, status) {
      state.isOptShow = status;
    }
  },
  modules: {
    ScenceManger
  }
});
