<template>
  <div class="lottie">
    <lottie :options="defaultOptions"/>
  </div>
</template>

<script>
import Lottie from '@/components/Lottie.vue';
import * as animationData from '@/lotties/s5/data.json';

export default {
  name: 's5',
  data() {
    return {
      defaultOptions: {
        animationData: loadingData.default,
        pathId: 's5'                  // 圖檔位置
      },
    };
  },
  components: {
    lottie: Lottie,
  }
};
</script>
