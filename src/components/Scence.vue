<template>
  <div class="fitLayout scence">
    <div class="scence__content">
      <div class="scence__animate">
        <img class="img-fluid" src="@/assets/images/demo/img_testbg.jpg" alt="" />
      </div>
      <!-- <div
        class="scence__optBox d-flex flex-column align-items-center"
        :class="{ scence__optBox__open: isShowOptBox }"
      >
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Scence",
  props: ["currentData"],
  data() {
    return {
      scenes: ""
    };
  },
  beforeCreate() {
    this.$store.dispatch("updateLoading", true);
  },
  mounted() {
    const vm = this;
    this.loadingTimer = setTimeout(() => {
      vm.$store.dispatch('updateLoading', false);
    }, vm.$store.state.loadingDelay);
    this.$store.dispatch("updateOpt", true);
  },
  beforeDestroy() {
    clearTimeout(this.loadingTimer);
    this.$store.dispatch("updateOpt", false);
  }
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
}
</style>
