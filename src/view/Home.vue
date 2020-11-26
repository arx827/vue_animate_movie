<template>
  <div class="Home">
    <div class="theater theater__pcCover">
      <div class="theater__mbCover">
          <!-- 圖片為定義寬高比例用 -->
          <img
            class="img-fluid theater__ratio js-theater__ratio"
            src="@/assets/images/demo/img_testbg.jpg"
          />
          <Loading />
          <div class="theater__main">
              <Opening />
              <!-- 開始 - 按鈕 -->
              <button
                v-if="$store.state.isShow == 'Opening'"
                class="startBtn"
                @click="openingBtn"
              >
                <span>GO</span>
              </button>
              <transition name="fade" mode="out-in">
                <Scence :currentData="getCurrentData" v-if="$store.state.isShow == 'Scence'"/>
              </transition>
          </div>
          <transition name="btn" mode="out-in">
            <!-- 再玩一次 - 按鈕 -->
            <button v-if="getIsFinally" class="scence__reStartBtn" @click="reStart">
              <span>再玩一次</span>
              <img
                class="scence__reStartBtn__icon"
                src="@/assets/images/Icon_material-refresh.svg"
                alt=""
              >
            </button>
        </transition>
      </div>
      <!-- pc版 結尾 結語 -->
      <div class="pcShow">
        <transition name="conclusion" mode="out-in">
          <div class="scence__conclusionPos" v-if="getCurrentData.conclusion && showConclusion">
            <div class="scence__conclusionInfo d-flex flex-column">
              <p class="scence__conclusionInfo__txt">{{ getCurrentData.conclusion }}</p>

              <div class="scence__conclusionInfo__Tags">
                <a class="scence__conclusionInfo__Tag d-inline-block"
                  v-for="(item, index) in getCurrentData.tags"
                  :key="index"
                  @click.prevent
                >
                  <span class="scence__conclusionInfo__Tag__item">{{ item | tags }}</span>
                </a>
              </div>

            </div>
            <div class="scence__conclusionTips"><span>{{ getCurrentData.tips }}</span></div>
          </div>
        </transition>
      </div>
      <Procedure v-if="$store.state.isShow == 'Scence'" />
      <!-- pc版 旁白&選項 -->
      <div class="theater__Header pcShow">
        <TheaterHeader :description="getCurrentData.description"/>
        <transition name="theaterOpt" mode="out-in">
          <TheaterOptions
            :questionOpt="getCurrentData.questionOpt"
            @next="goToNext"
            v-if="$store.state.isOptShow"
          />
        </transition>
      </div>
    </div>
    <!-- mb版 旁白&選項 -->
    <div class="theater__Header mbShow">
      <TheaterHeader :description="getCurrentData.description"/>
      <TheaterOptions
        :questionOpt="getCurrentData.questionOpt"
        @next="goToNext"
        v-if="$store.state.isOptShow"
      />
    </div>
    <!-- pc版 結尾 結語 -->
    <div class="mbShow">
      <transition name="conclusion" mode="out-in">
        <div class="scence__conclusionPos" v-if="getCurrentData.conclusion && showConclusion">
          <div class="scence__conclusionInfo d-flex flex-column">
            <p class="scence__conclusionInfo__txt">{{ getCurrentData.conclusion }}</p>

            <div class="scence__conclusionInfo__Tags">
              <a class="scence__conclusionInfo__Tag d-inline-block"
                v-for="(item, index) in getCurrentData.tags"
                :key="index"
                @click.prevent
              >
                <span class="scence__conclusionInfo__Tag__item">{{ item | tags }}</span>
              </a>
            </div>

          </div>
          <div class="scence__conclusionTips"><span>{{ getCurrentData.tips }}</span></div>
        </div>
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
import { scenesAll } from '@/static/json/scenes';
import { mapGetters, mapActions } from 'vuex';
import _ from 'lodash';

export default {
  name: 'Home',
  data() {
    return {
      ScenceManger: {},
      showConclusion: false,
    };
  },
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
    this.resize = _.debounce(this.getTheater, 1000);
  },
  mounted() {
    const vm = this;
    this.createStart();
    setTimeout(() => {
      vm.getTheater();
    });
    window.addEventListener('resize', this.resize);
  },
  updated() {
    const vm = this;
    setTimeout(() => {
      vm.getTheater();
    });
    // 判斷最後一幕
    if (this.getIsFinally) {
      vm.AfterAnimate(() => {
        this.showConclusion = true;
      });
    } else {
      this.showConclusion = false;
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resize);
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
    ...mapActions(['updateShow', 'updateOpt', 'updateTheaterSize']),
    ...mapActions('ScenceManger', ['goToNext', 'init', 'createStart', 'AfterAnimate']),
    // 開始 (按鈕)
    openingBtn() {
      this.updateShow('Scence');
      this.goToNext(this.getStartId);
      // 第一場景開始
    },
    // 再玩一次 (按鈕)
    reStart() {
      this.createStart();
      this.$store.dispatch('updateFinally', false);
      this.updateShow('Opening');
    },
    // 取得場景尺寸
    getTheater() {
      const item = document.querySelector('.js-theater__ratio');
      const theaterW = item.clientWidth;
      const theaterH = item.clientHeight;
      this.updateTheaterSize({ theaterW, theaterH });
    },
  },
  watch: {
    // 變換場景 立即 觸發Scence重載
    getCurrentData: {
      immediate: true,
      handler(newValue, oldValue) {
        if (oldValue) {
          this.updateShow('');
          this.updateOpt(false);
          this.$nextTick(() => {
            this.updateShow('Scence');
          });
        }
      },
    },
  },
  filters: {
    tags(str) {
      return `#${str}`;
    },
  },
};
</script>

<style lang="scss">
.Home {
  width: 100%;
  max-width: $SCENES_W;
  margin: 0 auto;
  position: relative;
  @include sm-media {
    max-width: 100vmin;
  }
}
.pcShow {
  display: none;
  @include sm-media {
    display: block;
  }
}
.mbShow {
  display: block;
  @include sm-media {
    display: none;
  }
}
.theater {
  position: relative;
  z-index: 10;
  @include sm-media {
    box-shadow: 0 0 15px $BOX-SHADOW;
  }
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
      // background: $COLOR-GRAY5;
      z-index: 10;
  }
  &__Header {
    &.pcShow {
      @include sm-media {
        position: absolute;
        bottom: 0;
        width: 100%
      }
    }
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
  background: $COLOR-BLACK-OP70;
  position: absolute;
  top: calc((100% - 92px) / 2);
  left: calc((100% - 92px) / 2);
  width: 92px;
  height: 92px;
  border: 0;
  border-radius: 100%;
  font-size: 35px;
  color: $COLOR-WHITE;
  z-index: 30;
  padding: 0;
  @include sm-media {
    top: calc((100% - 112px) / 2);
    left: calc((100% - 112px) / 2);
    width: 112px;
    height: 112px;
  }
  &:hover {
    background: $COLOR-GREEN-OP70;
  }
  &:focus {
      outline: 0;
  }
  &:active {
      opacity: 0.8;
  }
}

.scence {
  // 再玩一次 按鈕
  &__reStartBtn {
    background: $COLOR-BLACK-OP70;
    position: absolute;
    bottom: 1rem;
    right: .5rem;
    border: 0;
    font-size: 20px;
    color: $COLOR-WHITE;
    z-index: 30;
    border-radius: 5px;
    padding: 5px 16px;
    @include sm-media {
      bottom: 2rem;
      right: 6rem;
    }
    &:hover {
      background: $COLOR-GREEN-OP70;
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

  // 結語
  &__conclusion {
    &Pos {
      z-index: 20;
      @include sm-media {
        position: absolute;
        width: 80%;
        top: 1rem;
        left: 10%;
        margin-top: 0;
      }
    }
    &Info {
      background: $COLOR-BLACK-OP70;
      box-shadow: 1px 1px 10px 1px #0000004d;
      color: $COLOR-WHITE;
      padding: 1rem;
      border-radius: 20px;
      margin-top: 10px;
      &::before {
        content: '結語:';
        font-size: 25px;
        margin-right: 8px;
        margin-bottom: 8px;
      }
      &__txt {
        margin-left: 20px;
        font-size: 20px;
        color: $COLOR-WHITE;
        margin-bottom: 0;
      }
      &__Tags {
        font-size: 18px;
        text-align: right;
        margin-bottom: 0;
        color: $COLOR-GRAY5;
        margin-top: 1rem;
      }
      &__Tag {
        color: $COLOR-GRAY5;
        cursor: pointer;
        &:hover {
          text-decoration: none;
          color: $COLOR-GRAY5;
        }
        // &:active {
        //   color: $COLOR-MAIN;
        // }
        // @include sm-media {
        //   &:hover {
        //     color: $COLOR-MAIN;
        //   }
        // }
        & + & {
          margin-left: 5px;
        }
      }
    }
    &Tips {
      margin-top: 1rem;
      margin-bottom: 1rem;
      background: #ffc107BF;
      box-shadow: 1px 1px 10px 1px #0000004d;
      padding: 10px 20px;
      color: #ff2b07;
      border-radius: 20px;
      font-size: 20px;
      &::before {
        content: 'Tips:';
        margin-right: 8px;
      }
    }
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
        transition: opacity 0s;
    }
}

// 再玩一次 淡出淡入
.btn {
    &-enter,
    &-leave-to {
        opacity: 0;
    }
    &-enter-active {
        transition: opacity 1s;
    }
    &-leave-active {
        transition: opacity 0s;
    }
}

// 選項
.theaterOpt {
    &-enter,
    &-leave-to {
        opacity: 0;
    }
    &-enter-active {
        transition: opacity 5s;
    }
    &-leave-active {
        transition: opacity 0s;
    }
}

// 結語
.conclusion {
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
</style>
