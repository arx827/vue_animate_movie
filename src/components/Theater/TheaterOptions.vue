<template>
  <!-- <div class="theater__options"> -->
  <div
    class="theater__optBox d-flex flex-column align-items-center"
    :class="{ theater__optBox__open: isShowOptBox }"
    v-if="questionOpt.length"
  >
    <div class="theater__optBox__control d-none d-md-block">
      <button class="theater__optBox__controlBtn" @click="controlBtn">
        click
      </button>
      <div class="theater__optBox__line"></div>
    </div>

    <div class="theater__optBox__wrap d-flex flex-column flex-md-row">
      <button
        class="theater__optBox__btn d-flex flex-md-column"
        v-for="item in questionOpt"
        :key="item.optScenes"
        @click="$emit('next', item.optScenes)"
      >
        {{ item.optQuestion }}
      </button>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: "TheaterOptions",
  props: {
    Scence: Array
  },
  watch: {
    // 深度監聽theater
    Scence: {
      handler: "printValue",
      deep: true
    }
  },
  data() {
    return {
      scenes: "",
      questionOpt: [],
      isShowOptBox: true
    };
  },
  methods: {
    printValue() {
      const { scenes, questionOpt } = this.Scence[0].currentData;
      this.scenes = scenes;
      this.questionOpt = questionOpt;
    },
    controlBtn() {
      this.isShowOptBox = !this.isShowOptBox;
    }
  }
};
</script>

<style scoped lang="scss">
.theater {
  &__optBox {
    box-shadow: 0 0 15px var(--box-shadow);
    @include md-media {
      transform: translateY(calc(100% - (50px + 1rem)));
      transition: 0.4s;
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      box-shadow: none;
    }
    &__open {
      @include md-media {
        transform: translateY(0);
      }
    }
    &__controlBtn {
      border: 0;
      background: #ffc107;
      width: 50px;
      height: 50px;
      &:focus {
        outline: 0;
      }
    }
    &__line {
      width: 0;
      height: 1rem;
      border-left: 1px solid #000;
      margin: 2px auto;
    }
    &__wrap {
      width: 100%;
      margin-top: 10px;
      margin-bottom: 10px;
      @include md-media {
        margin-top: 0;
        margin-bottom: 20px;
      }
    }
    &__btn {
      flex: 1;
      text-align: left;
      background: var(--btn-mb-bg);
      margin-left: 10px;
      margin-right: 10px;
      border-radius: 30px;
      border: 0;
      padding: 30px 28px 30px;
      &:focus {
        outline: none;
      }
      @include md-media {
        padding-bottom: 40px;
        background: var(--btn-pc-bg);
      }
      + .theater__optBox__btn {
        margin-top: 10px;
        @include md-media {
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
        font-size: 30px;
        line-height: 1.2;
        margin-right: 8px;
        @include md-media {
          margin-right: 0;
          line-height: 1.3;
          margin-bottom: 8px;
        }
      }
    }
  }
}
</style>
