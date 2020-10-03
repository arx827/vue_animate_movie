<template>
  <div id="app">
    <div
      class="testwrap d-flex flex-column justify-content-center align-items-center"
    >
      <div id="theater">
        <Opening v-if="isOpening" />
        <Scenes />
      </div>
      <div class="d-flex">
        <!-- <button @click="controlFade">淡出淡入測試按鈕</button>
        <button @click="controlTranfrom">轉場測試按鈕</button> -->
      </div>
    </div>
  </div>
</template>

<script>
import ScenesData from "@/static/json/scenes.json";
import "bootstrap/dist/css/bootstrap.css";

import Opening from "@/views/Opening.vue";
import Scenes from "@/views/Scenes.vue";

export default {
  name: "App",
  data() {
    return {
      ScenesData,
      // SceneFactory: {
      //   setEndId: ["A3-1"],
      //   transScenes: ["transition"],
      //   fadeScenes: ".fadeScenes"
      // },
      // scenesView: "s1", //預設場景
      // isFade: false,
      // isTranfrom: false
      isOpening: true
    };
  },
  components: {
    Opening,
    Scenes
    // fadeScenes,
    // tranfromAnimation,
    // View_s1,
    // View_s2
  },
  // computed: {
  //   // ScenesIdArray() {
  //   //   return scenes;
  //   // }
  // },
  methods: {
    playStart() {
      this.isOpening = true;
    }
    // controlFade() {
    //   this.isFade = true;
    // },
    // controlTranfrom() {
    //   this.isTranfrom = true;
    // }
  }
  // mounted() {
  //   // console.log(this.ScenesIdArray);
  // },
  // filters: {
  //   scenesName(value) {
  //     return `view_${value}`;
  //   }
  // }
};
</script>

<style lang="scss">
@import "assets/scss/_var.scss";
@import "assets/scss/_reset.scss";

.testwrap {
  // 測試用展示框
  min-height: 100vh;
}
#theater {
  width: var(--scenes_w);
  height: var(--scenes_h);
  background: #aaa;
}
.fitLayout {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
