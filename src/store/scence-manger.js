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
    }
  },
  actions: {
    init({ commit }, AllData, historyMax) {
      commit("setAllData", AllData);
      commit("setHistoryMax", historyMax);
    },
    createStart(context) {
      let { state, getters, commit } = context;
      const startSenceData = getters.getScenceDataById(state.startId);
      commit("setCurrentData", startSenceData);
    },
    goToNext({ getters, commit, dispatch, rootGetters }, Id) {
      const SenceData = getters.getScenceDataById(Id);
      console.log([rootGetters, dispatch]);
      commit("setCurrentData", SenceData);
    }
  }
};
