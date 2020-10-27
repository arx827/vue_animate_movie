<template>
  <div class="lottie">
    <lottie :options="defaultOptions"/>
  </div>
</template>

<script>
import Lottie from '@/components/Lottie.vue';
import * as animationData from '@/lotties/s3/data.json';

export default {
  name: 's3',
  data() {
    return {
      defaultOptions: {
        animationData: loadingData.default,
        pathId: 's3'                  // 圖檔位置
      },
    };
  },
  components: {
    lottie: Lottie,
  }
};
</script>
