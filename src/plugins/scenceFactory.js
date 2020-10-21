// 設置腳本
class SceneStage {
  constructor(AllData) {
    this.AllData = AllData;
    this.currentData = "";
    this.setStartId = "s1";
  }

  // -------- Func庫 ---------//
  // Func 創建第一幕
  createStart() {
    const startData = this.findId(this.setStartId);
    // 初始化場景
    this.init(startData);
  }

  // 用ID找到當頁資料
  findId(sId) {
    let returnScene = "";
    this.AllData.forEach(item => {
      const oSceneData = item;
      if (oSceneData.scenes === sId) {
        returnScene = oSceneData;
      }
    });
    return returnScene;
  }

  // 下面一位
  next(sIds, AllData) {
    const oScenceData = this.findId(sIds, AllData);
    this.init(oScenceData);
  }

  // 初始化
  init(oScenceData) {
    // TODO:把oScenceData轉成HTML
    this.currentData = oScenceData;
  }
}

// -------- 實體化 ---------//
export const SceneManager = AllData => new SceneStage(AllData);
