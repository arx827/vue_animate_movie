<template>
  <div class="lottie">
    <lottie :options="defaultOptions"/>
  </div>
</template>

<script>
import Lottie from '@/components/Lottie.vue';
import * as animationData from '@/lotties/s16/data.json';

export default {
  name: 's16',
  data() {
    return {
      defaultOptions: {
        animationData: loadingData.default,
        pathId: 's16'                  // 圖檔位置
      },
    };
  },
  components: {
    lottie: Lottie,
  }
};
</script>
