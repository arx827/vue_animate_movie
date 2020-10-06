<template>
  <div id="app">
    <div
      class="testwrap d-flex flex-column justify-content-center align-items-center"
    >
      <div id="theater">
        <transition name="fade" mode="out-in" :key="'TranfromAnimation'">
          <TranfromAnimation v-if="isLoading"></TranfromAnimation>
        </transition>
        <transition name="fade" mode="out-in">
          <Opening
            v-if="isShow == 'Opening'"
            @emitPlayStartEvent="playStart"
          ></Opening>

          <Scenes
            :scenesView="scenesView"
            @emitChangeScenes="changeScenes(scenes)"
            v-else-if="isShow == 'Scenes'"
          ></Scenes>
        </transition>
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
import TranfromAnimation from "@/views/TranfromAnimation.vue";
import Scenes from "@/views/Scenes.vue";

export default {
  name: "App",
  data() {
    return {
      ScenesData,
      scenesView: "s1",
      isShow: "Opening"
    };
  },
  components: {
    Opening,
    TranfromAnimation,
    Scenes
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    }
  },
  methods: {
    playStart() {
      this.isShow = "Scenes";
    },
    changeScenes(scenes) {
      let vm = this;
      vm.$store.dispatch("updateLoading", false);
      vm.isShow = "";
      vm.scenesView = scenes;
      vm.isShow = "Scenes";
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
  width: var(--scenes_w);
  height: var(--scenes_h);
  background: #fff;
  position: relative;
}
.fitLayout {
  position: relative;
  width: 100%;
  height: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
