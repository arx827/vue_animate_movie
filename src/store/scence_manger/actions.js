export const actions = {
  /* ---------------scence相關----------------------*/
  init({ state, commit }, [AllData, historyMax]) {
    commit("setAllData", AllData);
    commit("setHistoryMax", historyMax);
    commit("addHistoryIds", state.startId);
  },
  createStart(context) {
    const { state, getters, commit } = context;
    const startSenceData = getters.getScenceDataById(state.startId);
    commit("setCurrentData", startSenceData);
  },
  goToNext({ getters, commit, dispatch }, Id) {
    const SenceData = getters.getScenceDataById(Id);
    commit("setCurrentData", SenceData);
    commit("addHistoryIds", Id);
    if (getters.getIsAnimationNow) {
      dispatch("goToNextByAnimation", Id);
    }
  },
  /* ---------------Animation相關----------------------*/
  goToNextByAnimation({ state, getters, commit }, correctNowId) {
    const timmer = setTimeout(() => {
      if (correctNowId === state.currentData.scenes) {
        const nextId = getters.getNextId;
        const SenceData = getters.getScenceDataById(nextId);
        commit("addHistoryIds", nextId);
        commit("setCurrentData", SenceData);
      }
      clearTimeout(timmer);
    }, state.currentData.animationTime);
  },
  AfterAnimate({ state }, fn) {
    console.log(fn);
    const timer = state.currentData.animationTime;
    setTimeout(() => {
      fn();
    }, timer);
  }
};
