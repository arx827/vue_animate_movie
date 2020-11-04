<template>
  <transition name="theaterOpt" mode="out-in">
    <div
      class="theater__optBox d-flex flex-column align-items-center"
      :class="{ theater__optBox__open: isShowOptBox }"
      v-if="hasOpts && $store.state.isOptShow"
    >
      <div class="theater__optBox__control d-none d-sm-block">
        <button class="theater__optBox__controlBtn" @click="controlBtn">
          <img
            class="img-fluid theater__optBox__controlBtn__img"
            src="@/assets/images/demo/Icon_arrow_down.svg"
            alt=""
          />
          <!-- <p class="theater__optBox__controlBtn__txt">看選項</p> -->
        </button>
        <div class="theater__optBox__line"></div>
      </div>

      <div class="theater__optBox__wrap d-flex flex-column flex-sm-row">
        <button
          class=" theater__optBox__btn d-flex flex-md-column"
          v-for="item in questionOpt"
          :key="item.optScenes"
          @click="$emit('next', item.optScenes)"
        >
          {{ item.optQuestion }}
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'TheaterOptions',
  props: {
    questionOpt: Array,
  },
  data() {
    return {
      isShowOptBox: false,
    };
  },
  mounted() {
    this.AfterAnimate(() => {
      this.isShowOptBox = true;
    });
  },
  computed: {
    hasOpts() {
      return !!this.questionOpt;
    },
  },
  methods: {
    ...mapActions('ScenceManger', ['AfterAnimate']),
    controlBtn() {
      this.isShowOptBox = !this.isShowOptBox;
    },
  },
};
</script>

<style lang="scss" scoped>
.theater {
  &__optBox {
    z-index: 30;
    @include sm-media {
      transform: translateY(calc(100% - (55px + 1rem + 4px)));
      transition: 0.4s;
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      box-shadow: none;
    }

    &__open {
      @include sm-media {
        transform: translateY(0);
      }
    }

    &__controlBtn {
      @supports(not (--test: 0)){
        background: $COLOR-BLACK-OP70;
      }
      border: 0;
      width: 55px;
      height: 55px;
      border-radius: 100%;
      padding: 0;
      position: relative;
      background: var(--BTN-BG-70);
      &:focus {
        outline: 0;
      }
      &__img {
        width: 23px;
        transition: 0.5s;
        transform: rotate(180deg);
      }
      &__txt {
        @supports(not (--test: 0)){
          color: $COLOR-WHITE;
        }
        position: absolute;
        margin: 0;
        top: calc((100% - (14px * 1.5)) / 2);
        left: calc(55px + 5px);
        word-break: keep-all;
        font-size: 14px;
        color: var(--COLOR-WHITE);
        // text-shadow: 0px 0px 3px var(--color-black), 0px 0px 5px var(--color-black);
      }
      &:active {
        @supports(not (--test: 0)){
          color: $COLOR-GREEN-OP70;
        }
        background: var(--BTN-BG-70-HOVER);
      }
      @include md-media {
        &:active {
          @supports(not (--test: 0)){
            color: $COLOR-BLACK-OP70;
          }
          background: var(--BTN-BG-70);
        }
        &:hover {
          @supports(not (--test: 0)){
            color: $COLOR-GREEN-OP70;
          }
          background: var(--BTN-BG-70-HOVER);
        }
      }
      
    }
    &__open {
      .theater__optBox__controlBtn__img {
        transform: rotate(0deg);
      }
      .theater__optBox__controlBtn__txt {
        display: none;
      }
    }

    &__line {
      @supports(not (--test: 0)){
        border-left: 2px solid $COLOR-GRAY3;
      }
      width: 0;
      height: 1rem;
      border-left: 2px solid var(--COLOR-GRAY3);
      margin: 2px auto;
    }

    &__wrap {
      width: 100%;
      // margin-top: 10px;
      margin-bottom: 10px;

      @include sm-media {
        // margin-top: 0;
        margin-bottom: 20px;
      }
    }

    &__btn {
      @supports(not (--test: 0)){
        background: $COLOR-BLACK-OP70;
        color: $COLOR-WHITE;
      }
      flex: 1;
      text-align: left;
      background: var(--BTN-BG-70);
      color: var(--COLOR-WHITE);
      border-radius: 20px;
      border: 0;
      padding: 20px 26px;
      font-size: 16px;
      &:focus {
        outline: none;
      }
      &:hover {
        @supports(not (--test: 0)){
          background: $COLOR-BLACK-OP70;
        }
        background: var(--BTN-BG-70);
      }
      &:active {
        @supports(not (--test: 0)){
          background: $COLOR-GREEN-OP70;
        }
        background: var(--BTN-BG-70-HOVER);
      }
      @include sm-media {
        @supports(not (--test: 0)){
          background: $COLOR-BLACK-OP99;
        }
        margin-left: 10px;
        margin-right: 10px;
        padding: 15px 25px 25px;
        border-radius: 30px;
        background: var(--BTN-PC-BG);
        font-size: 18px;
      }
      @include md-media {
        &:hover {
          @supports(not (--test: 0)){
            background: $COLOR-GREEN-OP70;
          }
          background: var(--BTN-BG-70-HOVER);
        }
        &:active {
          @supports(not (--test: 0)){
            background: $COLOR-BLACK-OP70;
          }
          background: var(--BTN-BG-70);
        }
      }

      + .theater__optBox__btn {
        margin-top: 10px;
        @include sm-media {
          margin-top: 0;
        }
      }

      &:nth-of-type(1) {
        &::before {
          content: "A.";
        }
      }

      &:nth-of-type(2) {
        &::before {
          content: "B.";
        }
      }

      &:nth-of-type(3) {
        &::before {
          content: "C.";
        }
      }

      &::before {
        display: block;
        font-size: 25px;
        line-height: 1.2;
        margin-right: 8px;
        @include sm-media {
          font-size: 30px;
          margin-right: 0;
        }
      }
    }
  }
}
.theaterOpt {
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
</style>
