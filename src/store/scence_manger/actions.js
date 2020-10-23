import {initState} from "./index";

export const actions = {
  /* ---------------scence相關----------------------*/
  init({ commit }, [AllData, historyMax]) {
    commit("setAllData", AllData);
    commit("setHistoryMax", historyMax);
  },
  createStart({ state, rootState } ) {
    
    if(state.historyIds.length > 1){
      state.historyIds=[];
    }
    // commit("addHistoryIds", state.startId);
    // const startSenceData = getters.getScenceDataById(state.startId);
    // commit("setCurrentData", startSenceData);
  },
  goToNext({ getters, commit, dispatch }, Id) {
    const SenceData = getters.getScenceDataById(Id);
    commit("setCurrentData", SenceData);
    commit("addHistoryIds", Id);
    if (getters.getIsAnimationNow) {
      dispatch("goToNextByAnimation", Id);
    }
  },
  /* ------------------History相關----------------------*/
  goBackToHistory({ state,dispatch }, step){
    let newArray = [];
    step-=1;
    const stepIds = state.historyIds[step];
    for(let i=0;i<step;i++){
      newArray.push(state.historyIds[i])
    }
    state.historyIds = newArray;
    dispatch("goToNext",stepIds)
    // const SenceData = getters.getScenceDataById(state.historyIds[step]);
  },
  /* ---------------Animation相關----------------------*/
  goToNextByAnimation({ state, getters, commit,dispatch}, correctNowId) {
    const timmer = setTimeout(() => {
      if (correctNowId === state.currentData.scenes) {
        const nextId = getters.getNextId;
        // const SenceData = getters.getScenceDataById(nextId);
        // commit("addHistoryIds", nextId);
        // commit("setCurrentData", SenceData);
        dispatch("goToNext",nextId)
      }
      clearTimeout(timmer);
    }, state.currentData.animationTime);
  },
  AfterAnimate({ state,rootState }, fn) {
    // console.log(fn);
    const timer = state.currentData.animationTime;
    setTimeout(() => {
      console.log(rootState)
      fn();
    }, timer);
  },
};
