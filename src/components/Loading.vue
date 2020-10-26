<template>
  <div class="fitLayout d-flex flex-column justify-content-center align-items-center">
    <!-- <div class="text-center"> -->
    <div class="loading_animation">
      <div class="lottie">
        <lottie :options="defaultOptions" :style="{ maxWidth: '500px' }" />
      </div>
    </div>

    <!-- <p class="loading__txt">載入中...</p> -->
    <!-- </div> -->
  </div>
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
  background: var(--color-white);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  color: var(--color-gray3);
}
.loading {
  &__txt {
    margin: 0;
    color: var(--color-gray3);
  }
}
</style>
