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
    loadingDelay: 1500, // 附加延遲
    theaterSize: {
      theaterW: 0,
      theaterH: 0
    }
  },
  actions: {
    updateLoading(context, isLoading) {
      context.commit('LOADING', isLoading);
    },
    updateOpt(context, isOptShow) {
      context.commit('OPTIONSHOW', isOptShow);
    },
    updateFinally(context, isFinally) {
      context.commit('FINALLY', isFinally);
    },
    updateShow(context, isShow) {
      context.commit('CHANGESHOW', isShow);
    },
    updateTheaterSize(context, theaterSize) {
      context.commit('CHANGETHEATERSIZE', theaterSize);
    }
  },
  mutations: {
    LOADING(state, isLoading) {
      state.isLoading = isLoading;
    },
    OPTIONSHOW(state, isOptShow) {
      state.isOptShow = isOptShow;
    },
    FINALLY(state, isFinally) {
      state.isFinally = isFinally;
    },
    CHANGESHOW(state, isShow) {
      state.isShow = isShow;
    },
    CHANGETHEATERSIZE(state, {theaterW,theaterH}) {
      state.theaterSize.theaterW = theaterW;
      state.theaterSize.theaterH = theaterH;
    }
  },
  getters: {
    getTheaterSize(state){
      return state.theaterSize;
    }
  },
  modules: {
    ScenceManger
  },
});
