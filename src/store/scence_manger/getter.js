export const getters = {
  /* ---------------scence相關----------------------*/
  getStartId(state) {
    return state.startId;
  },
  getCurrentData(state) {
    return state.currentData;
  },
  getScenceDataById(state) {
    return (id) => {
      if (state.allData === '') {
        return false;
      }
      const resultData = state.allData.find((sceneData) => sceneData.scenes === id);
      return resultData;
    };
  },
  getNextId(state) {
    const currentDate = state.currentData;
    if (currentDate.animationTime) {
      return state.currentData.redirectTo || state.startId;
    }
    throw TypeError('這不是動畫不可以自動跳轉悠');
  },
  /* ----------------history相關--------------------------*/
  getHistroyNums(state) {
    return state.historyIds.length;
  },
  getHistroyMax(state) {
    return state.historyMax;
  },
  /* ------------------Animation相關-------------------*/
  // 判斷是否為 跳轉場景
  getIsAnimationNow(state) {
    const currentDate = state.currentData;
    return Boolean(currentDate.redirectTo);
  },
  /* ---------------Finally相關--------------------------*/
  getIsFinally(state) {
    return state.historyIds.length === state.historyMax && Boolean(state.currentData.conclusion);
  },
};
