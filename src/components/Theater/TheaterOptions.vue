<template>
  <div
    class="theater__optBox d-flex flex-column align-items-center"
    :class="{ theater__optBox__open: getOptBoxOpen }"
    v-if="hasOpts"
  >
    <div class="theater__optBox__wrap d-flex flex-column flex-sm-row">
      <button
        class="theater__optBox__btn d-flex flex-md-column"
        v-for="item in questionOpt"
        :key="item.optScenes"
        @click="$emit('next', item.optScenes)"
      >
        <div>
          <p v-if="item.optHeader" class="theater__optBox__header">{{item.optHeader}}</p>
          <span>{{item.optQuestion}}</span>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'TheaterOptions',
  props: {
    questionOpt: Array,
  },
  // data() {
  //   return {
  //     isShowOptBox: false,
  //   };
  // },
  // mounted() {
  //   this.isShowOptBox = false;
  //   // this.isShowOptBox = true;
  //   // 動畫時間跑完 自動開啟選項
  //   // this.AfterAnimate(() => {
  //   //   this.isShowOptBox = true;
  //   // });
  // },
  computed: {
    ...mapGetters(['getOptBoxOpen']),
    hasOpts() {
      return !!this.questionOpt;
    },
  },
  methods: {
    ...mapActions('ScenceManger', ['AfterAnimate']),
    // controlBtn() {
    //   this.isShowOptBox = !this.isShowOptBox;
    // },
  },
};
</script>

<style lang="scss" scoped>
.theater {
  &__optBox {
    z-index: 0;
    position: absolute;
    bottom: 0;
    opacity: 0;
    right: 0;
    left: 0;
    &__open {
      opacity: 1;
      position: relative;
      z-index: 20;
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

    &__wrap {
      width: 100%;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    &__btn {
      flex: 1;
      text-align: left;
      background: $COLOR-BLACK-OP70;
      color: $COLOR-WHITE;
      border-radius: 20px;
      border: 0;
      padding: 20px 26px;
      font-size: 18px;
      line-height: 1.3;
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
    &__header {
      color: var(--COLOR-MAIN3);
    }
  }
}
</style>
