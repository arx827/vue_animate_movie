import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    loadingDelay: 1000 // 附加延遲
  },
  actions: {
    updateLoading(context, status) {
      context.commit("LOADING", status);
    }
  },
  mutations: {
    LOADING(state, status) {
      state.isLoading = status;
    }
  }
});
