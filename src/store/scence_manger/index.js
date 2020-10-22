import { mutations } from "./mutations";
import { getters } from "./getter";
import { actions } from "./actions";

// 初始值
export const initState = ()=>{
  return {
    currentData: "",
    allData: "",
    startId: "s1",
    historyIds: [],
    historyMax: 0
  }
}
export const ScenceManger = {
  namespaced: true,
  state: initState,
  mutations,
  getters,
  actions
};
