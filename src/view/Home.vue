<template>
  <div class="Home">
    <transition name="theaterH" mode="out-in">
      <TheaterHeader
        :description="getCurrentData.description"
        v-if="$store.state.isShow == 'Scence'"
      />
    </transition>
    <div class="theater theater__pcCover">
      <div class="theater__mbCover">
          <!-- 圖片為定義寬高比例用 -->
          <img class="img-fluid theater__ratio" src="@/assets/images/demo/img_testbg.jpg" />
          <transition name="trans" mode="out-in">
              <Loading v-if="$store.state.isLoading" />
          </transition>
          <div class="theater__main">
              <transition name="fade" mode="out-in">
                  <Opening v-if="$store.state.isShow == 'Opening'" @emitOpeningBtn="openingBtn" />
              </transition>
              <transition name="fade" mode="out-in">
                  <Scence v-if="$store.state.isShow == 'Scence'" :currentData="getCurrentData" />
              </transition>
          </div>
      </div>
      <Procedure v-if="$store.state.isShow == 'Scence'" />
      <!-- 開始/再玩一次 - 按鈕 -->
      <!-- <transition name="fade" mode="out-in"> -->
          <button v-if="$store.state.isShow == 'Opening'" class="startBtn" @click="openingBtn"><span>GO</span></button>
      <!-- </transition> -->
      <!-- <transition name="fade" mode="out-in"> -->
          <button v-if="getIsFinally" class="scence__reStartBtn" @click="reStart">
            <span>再玩一次</span>
            <img class="scence__reStartBtn__icon" src="@/assets/images/Icon_material-refresh.svg" alt="">
          </button>
      <!-- </transition> -->
      <transition name="fade" mode="out-in">
          <TheaterOptions :questionOpt="getCurrentData.questionOpt" @next="goToNext" v-if="$store.state.isOptShow" />
      </transition>
    </div>
  </div>
</template>

<script>
import TheaterHeader from '@/components/Theater/TheaterHeader.vue';
import Loading from '@/components/Loading.vue';
import Opening from '@/components/Opening.vue';
import Scence from '@/components/Scence.vue';
import Procedure from '@/components/Theater/Procedure.vue';
import TheaterOptions from '@/components/Theater/TheaterOptions.vue';
import { scenesAll } from '@/static/json/scenes.js';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      ScenceManger: {},
    };
  },
  beforeCreate() {},
  components: {
    TheaterHeader,
    Loading,
    Opening,
    Scence,
    Procedure,
    TheaterOptions,
  },
  created() {
    // 實體化
    this.init([scenesAll, 8]);
  },
  mounted() {
    this.createStart();
  },
  computed: {
    ...mapGetters('ScenceManger', [
      'getStartId',
      'getCurrentData',
      'getScenceDataById',
      'getIsFinally',
    ]),
  },
  methods: {
    ...mapActions(['updateShow']),
    ...mapActions('ScenceManger', ['goToNext', 'init', 'createStart']),
    // 開始
    openingBtn() {
      this.updateShow('Scence');
      this.goToNext(this.getStartId);
      // 第一場景開始
    },
    // 再玩一次
    reStart() {
      this.createStart();
      this.$store.dispatch('updateFinally', false);
      this.updateShow('Opening');
    },
  },
  watch: {
    // 變換場景 立即 觸發Scence重載
    getCurrentData: {
      immediate: true,
      handler(newValue, oldValue) {
        if (oldValue) {
          this.updateShow('');
          this.$nextTick(() => {
            this.updateShow('Scence');
          });
        }
      },
    },
  },
};
</script>

<style lang="scss">
.Home {
  width: 100%;
  max-width: var(--scenes_w);
  margin: 0 auto;
  @include sm-media {
    box-shadow: 0 0 15px var(--box-shadow);
  }
}

.theater {
  position: relative;
  z-index: 10;
  &__pcCover {
    @include sm-media {
      overflow: hidden;
    }
  }
  &__mbCover {
    position: relative;
    overflow: hidden;
    @include sm-media {
      overflow: visible;
    }
  }
  &__ratio {
      opacity: 0;
      pointer-events: none;
  }
  &__main {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      background: var(--Home-bg);
      z-index: 10;
  }
}

.fitLayout {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

// 開始 按鈕
.startBtn {
  --btn-wh: 92px;
  background: var(--btn-bg-70);
  position: absolute;
  top: calc((100% - var(--btn-wh)) / 2);
  left: calc((100% - var(--btn-wh)) / 2);
  width: var(--btn-wh);
  height: var(--btn-wh);
  border: 0;
  border-radius: 100%;
  font-size: 35px;
  color: var(--color-white);
  z-index: 30;
  @include sm-media {
    --btn-wh: 112px;
  }
  &:hover {
      background: var(--btn-bg-70-hover);
  }
  &:focus {
      outline: 0;
  }
  &:active {
      opacity: 0.8;
  }
}

// 再玩一次 按鈕
.scence {
  &__reStartBtn {
    background: var(--btn-bg-70);
    position: absolute;
    bottom: 2rem;
    right: 6rem;
    border: 0;
    font-size: 20px;
    color: var(--color-white);
    z-index: 30;
    border-radius: 5px;
    padding: 5px 16px;
    &:hover {
        background: var(--btn-bg-70-hover);
    }
    &:focus {
        outline: 0;
    }
    &:active {
        opacity: 0.8;
    }

    &__icon {
      width: 20px;
      height: 20px;
      margin-left: .7rem;
    }
  }
}

// 旁白區塊 淡出淡入
.theaterH {
    &-enter,
    &-leave-to {
        opacity: 0;
    }
    &-enter-active {
        transition: opacity 3s;
    }
    &-leave-active {
        transition: opacity 10s;
    }
}

// 開場、場景淡出淡入
.fade {
    &-enter,
    &-leave-to {
        opacity: 0;
    }
    &-enter-active {
        transition: opacity 2s;
    }
    &-leave-active {
        transition: opacity 1s;
    }
}

// 轉場淡出淡入
.trans {
    &-enter,
    &-leave-to {
        opacity: 0;
    }
    &-enter-active {
        transition: opacity 0s;
    }
    &-leave-active {
        transition: opacity 1s;
    }
}
</style>
