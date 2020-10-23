<template>
  <div class="fitLayout scence">
    <div class="scence__content">
      <div class="scence__animate">
        <img class="img-fluid" src="@/assets/images/demo/img_testbg.jpg" alt="" />
      </div>

      <div class="scence__conclusion">{{ currentData.conclusion }}</div>
      <!-- <button
          v-if="isShow"
          class="scence__reStartBtn"
        >
          重新
        </button> -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Scence',
  props: ['currentData'],
  data() {
    return {
      scenes: '',
    };
  },
  beforeCreate() {
    console.log('beforecreate');
    this.$store.dispatch('updateLoading', true);
  },
  mounted() {
    const vm = this;
    this.loadingTimer = setTimeout(() => {
      vm.$store.dispatch('updateLoading', false);
    }, vm.$store.state.loadingDelay);
    this.$store.dispatch('updateOpt', true);
    // 判斷最後一幕
    if (this.getIsFinally) {
      vm.$store.dispatch('ScenceManger/AfterAnimate', () => {
        this.$store.dispatch('updateFinally', true);
      });
    }
  },
  beforeDestroy() {
    clearTimeout(this.loadingTimer);
    this.$store.dispatch('updateOpt', false);
  },
  computed: {
    ...mapGetters('ScenceManger', ['getIsFinally']),
  },
  method: {
    ...mapActions('ScenceManger', ['AfterAnimate']),
  },
};
</script>

<style lang="scss">
.fitLayout {
  // width: inherit;
  // min-height: inherit;
  // background: #fcffe0;
  // position: absolute;
  // top: 0;
  // left: 0;
  // bottom: 0;
  // right: 0;
  z-index: 10;
  // overflow: hidden;
}

.scence {
  // &__header {
  //   background: var(--color-white);
  //   padding: 16px;
  //   // position: absolute;
  //   width: 100%;
  //   // top: 0;
  //   // left: 0;
  //   &__container {
  //     width: 100%;
  //     margin-right: auto;
  //     margin-left: auto;
  //     @include md-media {
  //       width: 80%;
  //     }
  //   }
  //   &__icon {
  //     width: 80px;
  //     height: 80px;
  //     border-radius: 50%;
  //     margin-right: 12px;
  //   }
  //   &__voice {
  //     color: var(--color-gray2);
  //     line-height: 1.5;
  //     margin-bottom: 0;
  //   }
  // }
  &__content {
    // min-height: var(--scenes_h);
    // overflow: hidden;
  }

  &__animate {
  }

  // &__optBox {
  //   transform: translateY(calc(100% - (50px + 1rem)));
  //   transition: 0.4s;
  //   position: absolute;
  //   bottom: 0;
  //   right: 0;
  //   left: 0;
  //   &__open {
  //     transform: translateY(0);
  //   }
  //   &__control {
  //   }
  //   &__controlBtn {
  //     border: 0;
  //     background: #ffc107;
  //     width: 50px;
  //     height: 50px;
  //     &:focus {
  //       outline: 0;
  //     }
  //   }
  //   &__line {
  //     width: 0;
  //     height: 1rem;
  //     border-left: 1px solid #000;
  //     margin-left: auto;
  //     margin-right: auto;
  //   }
  // }
  &__conclusion {
    position: absolute;
    top: 1rem;
    left: 5%;
    width: 90%;
  }

  &__reStartBtn {
    background: var(--color-main);
    position: static;
    width: 100%;
    margin-top: 1rem;
    border: 0;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    z-index: 30;

    @include md-media {
      position: absolute;
      width: 200px;
      bottom: 20px;
      left: calc((100% - 200px) / 2);
    }

    &:focus {
      outline: 0;
    }

    &:active {
      opacity: 0.8;
    }
  }
}
</style>
