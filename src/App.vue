<template>
  <div id="app">
    <div
      class="testwrap d-flex flex-column justify-content-center align-items-center"
    >
      <div id="theater">
        <fadeScenes v-if="isFade" />
        <tranfromAnimation v-if="isTranfrom" />
        <!-- <div>{{ ScenesIdArray }}</div> -->
        <component :is="scenesView | scenesName"></component>
      </div>
      <div class="d-flex">
        <button @click="controlFade">淡出淡入測試按鈕</button>
        <button @click="controlTranfrom">轉場測試按鈕</button>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import ScenesData from "@/static/json/scenes.json";
import "bootstrap/dist/css/bootstrap.css";

import fadeScenes from "@/views/fadeScenes.vue";
import tranfromAnimation from "@/views/tranfromAnimation.vue";
import View_s1 from "@/components/scenes/s1.vue";
import View_s2 from "@/components/scenes/s2.vue";

export default {
  name: "App",
  data() {
    return {
      ScenesData,
      SceneFactory: {
        setEndId: ["A3-1"],
        transScenes: ["transition"],
        fadeScenes: ".fadeScenes"
      },
      scenesView: "s1", //預設場景
      isFade: false,
      isTranfrom: false
    };
  },
  components: {
    fadeScenes,
    tranfromAnimation,
    View_s1,
    View_s2
  },
  computed: {
    // ScenesIdArray() {
    //   return scenes;
    // }
  },
  methods: {
    controlFade() {
      this.isFade = true;
    },
    controlTranfrom() {
      this.isTranfrom = true;
    }
  },
  mounted() {
    // console.log(this.ScenesIdArray);
  },
  filters: {
    scenesName(value) {
      return `view_${value}`;
    }
  }
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
  width: $scenes-w;
  height: $scenes-h;
  background: #aaa;
  .fitSize {
    width: inherit;
    height: inherit;
  }
  // .fadeScenes {

  // }
  .scenesBox {
    width: inherit;
    height: inherit;
  }
  // & > * > *{
  //     width: inherit;
  //     height: inherit;
  // }
}
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
</style>
