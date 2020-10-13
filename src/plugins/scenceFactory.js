// 設置腳本
function SceneStage(AllData) {
  (this.AllData = AllData), (this.currentData = ""), (this.setStartId = "s1");
}

//-------- Func庫 ---------//
// Func 創建第一幕
SceneStage.prototype.createStart = function() {
  const startData = this.findId(this.setStartId);
  // 初始化場景
  this.init(startData);
};
// 用ID找到當頁資料
SceneStage.prototype.findId = function(sId) {
  let returnScene = "";
  this.AllData.forEach(item => {
    const oSceneData = item;
    if (oSceneData.scenes === sId) {
      returnScene = oSceneData;
    }
  });
  return returnScene;
};
// 下面一位
SceneStage.prototype.next = function(sIds, AllData) {
  const oScenceData = this.findId(sIds, AllData);
  this.init(oScenceData);
};
// 初始化
SceneStage.prototype.init = function(oScenceData) {
  // TODO:把oScenceData轉成HTML
  this.currentData = oScenceData;
};

//-------- 實體化 ---------//
export const SceneManager = AllData => {
  return new SceneStage(AllData);
};
