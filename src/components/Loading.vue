<template>
  <transition name="trans" mode="out-in">
    <div class="fitLayout d-flex flex-column justify-content-center align-items-center" v-if="$store.state.isLoading">
      <div class="loading_animation">
        <div class="lottie">
          <lottie :options="defaultOptions" :style="{ maxWidth: '500px' }" />
        </div>
      </div>

      <!-- <p class="loading__txt">載入中...</p> -->
    </div>
  </transition>
</template>

<script>
import Lottie from '@/components/Lottie.vue';
import * as loadingData from '@/lotties/loading/loading.json';

export default {
  name: 'Loading',
  data() {
    return {
      defaultOptions: {
        animationData: loadingData.default,
        pathId: 'loading',
      },
    };
  },
  components: {
    lottie: Lottie,
  },
};
</script>

<style scoped lang="scss">
.fitLayout {
  @supports(not (--test: 0)){
    background: $COLOR-WHITE;
    color: $COLOR-GRAY3;
  }
  background: var(--COLOR-WHITE);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  color: var(--COLOR-GRAY3);
  
}
// .loading {
//   &__txt {
//    @supports(not (--test: 0)){
//      color: $COLOR-GRAY3;
//    }
//     margin: 0;
//     color: var(--COLOR-GRAY3);
//   }
// }

// loading淡出淡入
.trans {
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
</style>
