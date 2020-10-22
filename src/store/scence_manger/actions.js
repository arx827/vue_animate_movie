import {initState} from "./index";

export const actions = {
  /* ---------------scence相關----------------------*/
  init({ state, commit }, [AllData, historyMax]) {
    commit("setAllData", AllData);
    commit("setHistoryMax", historyMax);
    commit("addHistoryIds", state.startId);
  },
  createStart({ state, getters, commit } ) {
    if(state.historyIds.length > 1){
      state.historyIds=[];
    }
    const startSenceData = getters.getScenceDataById(state.startId);
    console.log(startSenceData)
    commit("setCurrentData", startSenceData);
  },
  goToNext({ state,getters, commit, dispatch }, Id) {
    const SenceData = getters.getScenceDataById(Id);
    commit("setCurrentData", SenceData);
    commit("addHistoryIds", Id);
    if (getters.getIsAnimationNow) {
      dispatch("goToNextByAnimation", Id);
    }
  },
  /* ------------------History相關----------------------*/
  goBackToHistory({ state,commit ,getters,dispatch }, step){
    let newArray = [];
    const stepIds = state.historyIds[step];
    for(let i=0;i<step;i++){
      newArray.push(state.historyIds[i])
    }
    state.historyIds = newArray;
    dispatch("goToNext",stepIds)
    // const SenceData = getters.getScenceDataById(state.historyIds[step]);
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
    // console.log(fn);
    const timer = state.currentData.animationTime;
    setTimeout(() => {
      fn();
    }, timer);
  },
};
