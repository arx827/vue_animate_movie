export const mutations = {
  /* ---------------scence相關----------------------*/
  setAllData(state, allData) {
    state.allData = allData;
  },
  setCurrentData(state, currentData) {
    state.currentData = currentData;
  },
  /* ----------------history相關--------------------------*/
  setHistoryMax(state, historyMax) {
    state.historyMax = historyMax;
  },
  addHistoryIds(state, currentId) {
    if (state.historyIds.length > state.historyMax) {
      throw Error("您的歷史紀錄出錯了 historyMax error");
    }
    console.log(state.historyIds);
    state.historyIds.push(currentId);
  }
};
