import { mutations } from "./mutations";
import { getters } from "./getter";
import { actions } from "./actions";
export const ScenceManger = {
  namespaced: true,
  state: () => ({
    currentData: "",
    allData: "",
    startId: "s1",
    historyIds: [],
    historyMax: 0
  }),
  mutations,
  getters,
  actions
};
