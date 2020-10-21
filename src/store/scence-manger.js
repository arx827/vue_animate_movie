export const ScenceManger = {
  namespaced: true,
  state: () => ({
    currentData: "",
    allData: "",
    startId: "s1",
    historyIds: [],
    historyMax: 0
  }),
  mutations: {
    setAllData(state, allData) {
      state.allData = allData;
    },
    setHistoryMax(state, historyMax) {
      state.historyMax = historyMax;
    },
    addHistoryIds(state, currentId) {
      if (state.historyIds.length >= state.historyMax) {
        throw Error("您的歷史紀錄出錯了 historyMax error");
      }
      state.historyIds.push(currentId);
    },
    setCurrentData(state, currentData) {
      state.currentData = currentData;
    }
  },
  getters: {
    getCurrentData(state) {
      return state.currentData;
    },
    getScenceDataById(state) {
      return id => {
        if (state.allData === "") {
          return;
        }
        const resultData = state.allData.find(sceneData => {
          return sceneData.scenes === id;
        });
        return resultData;
      };
    },
    getHistroyNums(state){
      return state.historyIds.length;
    },
    getHistroyMax(state){
      return state.historyMax;
    },
    getNextId(state){
      const currentDate = state.currentData;
      if(currentDate.animationTime){
        return state.currentData.redirectTo || state.startId;
      }
      throw TypeError("這不適動畫不可以自動跳轉悠")
    },
    getIsAnimationNow(state){
      const currentDate = state.currentData;
      return Boolean(currentDate.redirectTo)
    }
  },
  actions: {
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
};
