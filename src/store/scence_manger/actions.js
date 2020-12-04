import { initState } from './index';

export const actions = {
  /* ---------------scence相關----------------------*/
  init({ commit }, [AllData, historyMax]) {
    commit('setAllData', AllData);
    commit('setHistoryMax', historyMax);
  },
  createStart({ state, rootState }) {
    if (state.historyIds.length > 1) {
      state.historyIds = [];
    }
    // commit("addHistoryIds", state.startId);
    // const startSenceData = getters.getScenceDataById(state.startId);
    // commit("setCurrentData", startSenceData);
  },
  goToNext({ getters, commit, dispatch }, Id) {
    const SenceData = getters.getScenceDataById(Id);
    commit('setCurrentData', SenceData);

    // 轉場 自動跳轉
    // 轉場不紀錄歷史紀錄
    if (getters.getIsAnimationNow) {
      dispatch('goToNextByAnimation', Id);
    } else {
      commit('addHistoryIds', Id);
    }
  },
  /* ------------------History相關----------------------*/
  goBackToHistory({ state, dispatch }, step) {
    const newArray = [];
    step -= 1;
    const stepIds = state.historyIds[step];
    for (let i = 0; i < step; i++) {
      newArray.push(state.historyIds[i]);
    }
    state.historyIds = newArray;
    dispatch('goToNext', stepIds);
    // const SenceData = getters.getScenceDataById(state.historyIds[step]);
  },
  /* ---------------Animation相關----------------------*/
  // 轉場 (自動跳轉)
  goToNextByAnimation({
    state, getters, commit, dispatch,
  }, correctNowId) {
    const timmer = setTimeout(() => {
      if (correctNowId === state.currentData.scenes) {
        const nextId = getters.getNextId;
        dispatch('goToNext', nextId);
      }
      clearTimeout(timmer);
    }, state.currentData.animationTime);
  },
  AfterAnimate({ state, rootState }, fn) {
    const timer = state.currentData.animationTime;
    setTimeout(() => {
      fn();
    }, timer);
  },
};
