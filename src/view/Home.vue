<template>
  <div class="Home">
    <TheaterHeader
      :description="currentData.description"
      v-if="isShow == 'Scence'"
    />
    <div class="theater theater__pcCover">
      <div class="theater__main">
        <transition name="trans" mode="out-in">
          <Loading v-if="$store.state.isLoading" />
        </transition>
        <transition name="fade" mode="out-in">
          <Opening v-if="isShow == 'Opening'" @emitOpeningBtn="openingBtn" />
        </transition>
        <transition name="fade" mode="out-in">
          <Scence v-if="isShow == 'Scence'" :currentData="currentData" />
        </transition>
      </div>
      <Procedure />
      <TheaterOptions
        :questionOpt="currentData.questionOpt"
        @next="nextScence"
        v-if="isShow == 'Scence'"
      />
    </div>
    <!-- <div class="" :Scence="[...ScenceManger]"></div> -->
    <!-- <button @click="ani">12</button> -->
  </div>
</template>

<script>
import TheaterHeader from "@/components/Theater/TheaterHeader.vue";
import Loading from "@/components/Loading.vue";
import Opening from "@/components/Opening.vue";
import Scence from "@/components/Scence.vue";
import Procedure from "@/components/Theater/Procedure.vue";
import TheaterOptions from "@/components/Theater/TheaterOptions.vue";
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
      // isShow: "Opening",
      // 測試
      isShow: "Scence",
      isTranform: false
      //   defaultOptions: {
      //     animationData: animationData.default
      //   }
    };
  },
  components: {
    TheaterHeader,
    Loading,
    Opening,
    Scence,
    Procedure,
    TheaterOptions
    // Lottie
  },
  created() {
    // 實體化
    this.ScenceManger = SceneManager(scenesAll);
  },
  mounted() {
    // 第一場景開始
    this.ScenceManger.createStart();
  },
  computed: {
    currentData() {
      return this.ScenceManger.currentData;
    }
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
  margin: 0 auto;
}
.theater {
  position: relative;
  z-index: 10;
  &__pcCover {
    @include md-media {
      height: var(--scenes_h);
      overflow: hidden;
      box-shadow: 0 0 15px var(--box-shadow);
    }
  }
  &__main {
    position: relative;
    width: 100%;
    // height: calc(1000 / 100 * 670);
    min-height: var(--scenes_h);
    background: var(--Home-bg);
    overflow: hidden;
  }
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
