export const getters = {
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
    },
    getIsFinally(state){
      console.log(Boolean(state.currentData.conclusion))
      return (state.historyIds.length===state.historyMax) && Boolean(state.currentData.conclusion);
    }
  }