<template>
  
    <div
      class="theater__optBox d-flex flex-column align-items-center"
      :class="{ theater__optBox__open: isShowOptBox }"
      v-if="hasOpts"
    >
      <div class="theater__optBox__control d-none d-sm-block">
        <button class="theater__optBox__controlBtn" @click="controlBtn">
          <img
            class="img-fluid theater__optBox__controlBtn__img"
            src="@/assets/images/demo/Icon_arrow_down.svg"
            alt=""
          />
          <p class="theater__optBox__controlBtn__txt">看選項</p>
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
    this.isShowOptBox = false;
    // this.isShowOptBox = true;
    // 動畫時間跑完 自動開啟選項
    // this.AfterAnimate(() => {
    //   this.isShowOptBox = true;
    // });
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
      -ms-transform: translateY(100%) translateY(-55px) translateY(-1rem) translateY(-4px); /* IE 11 */
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
      border: 0;
      width: 55px;
      height: 55px;
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
        transform: rotate(180deg);
      }
      &__txt {
        position: absolute;
        margin: 0;
        top: calc((100% - (14px * 1.5)) / 2);
        left: calc(55px + 5px);
        word-break: keep-all;
        font-size: 14px;
        color: $COLOR-WHITE;
        // text-shadow: 0px 0px 3px var(--color-black), 0px 0px 5px var(--color-black);
      }
      &:active {
        background: $COLOR-GREEN-OP70;
      }
      @include md-media {
        &:active {
          background: $COLOR-BLACK-OP70;
        }
        &:hover {
          background: $COLOR-GREEN-OP70;
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
      width: 0;
      height: 1rem;
      border-left: 2px solid $COLOR-GRAY3;
      margin: 2px auto;
    }

    &__wrap {
      width: 100%;
      margin-top: 10px;
      margin-bottom: 10px;
      @include sm-media {
        margin-top: 0;
        margin-bottom: 20px;
      }
    }

    &__btn {
      flex: 1;
      text-align: left;
      background: $COLOR-BLACK-OP70;
      color: $COLOR-WHITE;
      border-radius: 20px;
      border: 0;
      padding: 20px 26px;
      font-size: 16px;
      &:focus {
        outline: none;
      }
      &:hover {
        background: $COLOR-BLACK-OP70;
      }
      &:active {
        background: $COLOR-GREEN-OP70;
      }
      @include sm-media {
        margin-left: 10px;
        margin-right: 10px;
        padding: 15px 25px 25px;
        border-radius: 30px;
        background: $COLOR-BLACK-OP99;
        font-size: 18px;
      }
      @include md-media {
        &:hover {
          background: $COLOR-GREEN-OP70;
        }
        &:active {
          background: $COLOR-BLACK-OP70;
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
</style>
