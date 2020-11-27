<template>
  <transition name="theaterH" mode="out-in">
    <div class="theater__header" v-if="$store.state.isShow == 'Scence'">
      <div class="theater__header__container d-flex align-items-center">
        <div class="theater__header__icon">
          <img class="img-fluid" src="@/assets/images/img_god.svg" alt="神仙來的"/>
        </div>
        <p class="theater__header__voice" v-html="description"></p>

        <div class="theater__optBox__keepW">
          <transition name="theaterOptControl" mode="out-in">
            <div
              class="theater__optBox__control"
              :class="changeOptBoxClass"
              v-if="isShowOptControl"
            >
              <button class="theater__optBox__controlBtn" @click="changeOptBoxControlEvent">
                <p class="theater__optBox__controlBtn__txt">{{ getIsAnimationNow ? '繼續':'看選項' }}</p>
                <img
                  class="img-fluid theater__optBox__controlBtn__img"
                  src="@/assets/images/demo/Icon_arrow_down.svg"
                  alt=""
                />
              </button>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'TheaterHeader',
  props: { description: String },
  data() {
    return {
      isShowOptControl: true,
    };
  },
  computed: {
    ...mapGetters(['getOptBoxOpen']),
    ...mapGetters('ScenceManger', ['getIsAnimationNow', 'getNextId', 'getCurrentData', 'getIsFinally']),
    changeOptBoxClass() {
      if (this.getIsAnimationNow) { // 判斷是否為轉場
        return 'theater__optBox__control__next';
      }
      if (this.getOptBoxOpen) { // 是否開啟選項盒子
        return 'theater__optBox__control__open';
      }
    },
  },
  methods: {
    ...mapActions(['updateOptOpen']),
    ...mapActions('ScenceManger', ['goToNext', 'AfterAnimate']),
    changeOptBoxControlEvent() {
      if (this.getIsAnimationNow) { // 判斷是否為轉場
        this.goToNext(this.getNextId); // 轉場的按鈕為 "跳至下一場"
      } else {
        this.updateOptOpen(!this.getOptBoxOpen); // 展開/收合選項按鈕
      }
    },
  },
  watch: {
    // 變換場景 立即 觸發Scence重載
    getCurrentData: {
      immediate: true,
      handler(newValue, oldValue) {
        this.isShowOptControl = false;
        if (newValue) {
          // this.AfterAnimate(() => {
            if (!this.getIsFinally) {
              this.isShowOptControl = true;
            }
          // });
        }
      },
    },
  },
};
</script>

<style scoped lang="scss">
.theater {
  &__header {
    background: $COLOR-MAIN;
    padding: 10px;
    width: 100%;
    position: relative;
    z-index: 20;
    &__container {
      width: 100%;
      margin-right: auto;
      margin-left: auto;
      @include sm-media {
        width: 90%;
      }
    }
    &__icon {
      width: 75px;
      height: 75px;
      border-radius: 50%;
      box-shadow: 1px 1px 1px $COLOR-GRAY5;
    }
    &__voice {
      color: $COLOR-WHITE;
      font-size: 18px;
      margin-left: 7px;
      margin-right: 7px;
      line-height: 1.3;
      margin-bottom: 0;
      flex: 1;
      @include sm-media {
        font-size: 20px;
        margin-left: 20px;
        margin-right: 20px;
      }
      @include md-media {
        font-size: 22px;
        margin-left: 36px;
        margin-right: 36px;
      }
    }
  }
  &__optBox {
    &__control {
      &Btn {
        border: 0;
        width: 75px;
        height: 75px;
        border-radius: 100%;
        padding: 0;
        position: relative;
        background: $COLOR-BLACK-OP70;
        &:focus {
          outline: 0;
        }
        &__img {
          width: 23px;
          transition: 0.5s;
          transform: rotate(0deg);
          @include sm-media {
            transform: rotate(180deg);
          }
        }
        &__txt {
          margin: 0;
          word-break: keep-all;
          font-size: 15px;
          padding-top: 9px;
          line-height: 1.5;
          color: $COLOR-WHITE;
        }
        &:active {
          background: $COLOR-BLACK-OP50;
        }
        @include md-media {
          &:active {
            background: $COLOR-BLACK-OP70;
          }
          &:hover {
            background: $COLOR-BLACK-OP50;
          }
        }
      }
      &__open {
        .theater__optBox__controlBtn__img {
          transform: rotate(180deg);
          @include sm-media {
            transform: rotate(0deg);
          }
        }
        .theater__optBox__controlBtn__txt {
          display: none;
        }
      }
      &__next {
        .theater__optBox__controlBtn__img {
          transform: rotate(-90deg);
        }
        .theater__optBox__controlBtn__txt {
          padding-top: 0;
          padding-bottom: 5px;
        }
      }
    }
    &__keepW {
      width: 75px;
      height: 75px;
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
      transition: opacity 2s;
  }
}

.theaterOptControl {
  &-enter,
  &-leave-to {
      opacity: 0;
  }
  &-enter-active {
      transition: opacity 3s;
  }
  &-leave-active {
      transition: opacity 1s;
  }
}
</style>
