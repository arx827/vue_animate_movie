<template>
  <div class="Home">
    <transition name="trans" mode="out-in">
      <TranformAn v-if="$store.state.isLoading" />
    </transition>
    <transition name="fade" mode="out-in">
      <Opening v-if="isShow == 'Opening'" @emitOpeningBtn="openingBtn" />
    </transition>
    <transition name="fade" mode="out-in">
      <Scence
        v-if="isShow == 'Scence'"
        @next="nextScence"
        :Scence="[...ScenceManger]"
      />
    </transition>

    <!-- <button @click="ani">12</button> -->
  </div>
</template>

<script>
import TranformAn from "@/components/TranformAn.vue";
import Opening from "@/components/Opening.vue";
import Scence from "@/components/Scence.vue";
import { SceneManager } from "@/plugins/scenceFactory.js";
import { scenesAll } from "@/static/json/scenes.js";
// import Lottie from "@/components/Lottie.vue";
// import * as animationData from "../static/home/home.json";
// import * as animation2 from "../static/foreword/rocket.json";
export default {
  name: "Home",
  data() {
    return {
      ScenceManger: {},
      isShow: "Opening",
      // 測試
      // isShow: "Scence",
      isTranform: false
      //   defaultOptions: {
      //     animationData: animationData.default
      //   }
    };
  },
  components: {
    TranformAn,
    Opening,
    Scence
    // Lottie
  },
  created() {
    // 初始化
    this.ScenceManger = SceneManager(scenesAll);
  },
  mounted() {
    // 第一場景開始
    this.ScenceManger.createStart();
  },

  methods: {
    openingBtn() {
      this.isShow = "Scence";
    },
    // 下一頁
    nextScence(sIds) {
      this.isShow = "";
      this.ScenceManger.next(sIds, scenesAll);
      this.$nextTick(() => {
        this.isShow = "Scence";
      });
    }
    // ani() {
    //   this.defaultOptions.animationData = animation2.default;
    // }
  }
};
</script>

<style lang="scss">
.Home {
  width: 100%;
  max-width: var(--scenes_w);
  min-height: var(--scenes_h);
  margin: 0 auto;
  position: relative;
  background: var(--Home-bg);
  box-shadow: 0 0 15px var(--box-shadow);
}

// 開場、場景淡出淡入
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

// 轉場淡出淡入
.trans-enter-active {
  transition: opacity 0.2s;
}
.trans-leave-active {
  transition: opacity 1s;
}
.trans-enter,
.trans-leave-to {
  opacity: 0;
}
</style>
