export const mutations = {
    setAllData(state, allData) {
      state.allData = allData;
    },
    setHistoryMax(state, historyMax) {
      state.historyMax = historyMax;
    },
    addHistoryIds(state, currentId) {
      if (state.historyIds.length > state.historyMax) {
        throw Error("您的歷史紀錄出錯了 historyMax error");
      }
      console.log(state.historyIds)
      state.historyIds.push(currentId);
    },
    setCurrentData(state, currentData) {
      state.currentData = currentData;
    }
  }