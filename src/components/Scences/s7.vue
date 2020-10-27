<template>
  <div class="lottie">
    <lottie :options="defaultOptions"/>
  </div>
</template>

<script>
import Lottie from '@/components/Lottie.vue';
import * as animationData from '@/lotties/s7/data.json';

export default {
  name: 's7',
  data() {
    return {
      defaultOptions: {
        animationData: loadingData.default,
        pathId: 's7'                  // 圖檔位置
      },
    };
  },
  components: {
    lottie: Lottie,
  }
};
</script>
