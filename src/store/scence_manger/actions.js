export const actions = {
    init({ commit }, [AllData, historyMax]) {
      commit("setAllData", AllData);
      commit("setHistoryMax", historyMax);
    },
    createStart(context) {
      let { state, getters, commit } = context;
      const startSenceData = getters.getScenceDataById(state.startId);
      commit("setCurrentData", startSenceData);
    },
    goToNext({ getters, commit ,dispatch}, Id) {
      const SenceData = getters.getScenceDataById(Id);
      commit("setCurrentData", SenceData);
      commit("addHistoryIds", Id);
      if(getters.getIsAnimationNow){
        dispatch('goToNextByAnimation',Id)
      }
    },
    goToNextByAnimation({ state,getters, commit },correctNowId){
      const timmer = setTimeout(()=>{
        console.log(state)
        if(correctNowId === state.currentData.scenes){
          const nextId = getters.getNextId;
          const SenceData = getters.getScenceDataById(nextId);
          commit("setCurrentData", SenceData);
        }
        clearTimeout(timmer);
      },state.currentData.animationTime)
    }
  }