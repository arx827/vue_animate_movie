export const getters = {
  /*---------------scence相關----------------------*/
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
  getNextId(state) {
    const currentDate = state.currentData;
    if (currentDate.animationTime) {
      return state.currentData.redirectTo || state.startId;
    }
    throw TypeError("這不適動畫不可以自動跳轉悠");
  },
  /*----------------history相關--------------------------*/
  getHistroyNums(state) {
    return state.historyIds.length;
  },
  getHistroyMax(state) {
    return state.historyMax;
  },
  /*------------------Animation相關-------------------*/
  getIsAnimationNow(state) {
    const currentDate = state.currentData;
    return Boolean(currentDate.redirectTo);
  },
  /*---------------Finally相關--------------------------*/
  getIsFinally(state) {
    console.log(Boolean(state.currentData.conclusion));
    return (
      state.historyIds.length === state.historyMax &&
      Boolean(state.currentData.conclusion)
    );
  }
};
