<template>
  <div class="lottie">
    <lottie :options="defaultOptions"/>
  </div>
</template>

<script>
import Lottie from '@/components/Lottie.vue';
import * as animationData from '@/lotties/s11/data.json';

export default {
  name: 's11',
  data() {
    return {
      defaultOptions: {
        animationData: loadingData.default,
        pathId: 's11'                  // 圖檔位置
      },
    };
  },
  components: {
    lottie: Lottie,
  }
};
</script>
