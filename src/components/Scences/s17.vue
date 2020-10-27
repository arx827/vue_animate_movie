<template>
  <div class="lottie">
    <lottie :options="defaultOptions"/>
  </div>
</template>

<script>
import Lottie from '@/components/Lottie.vue';
import * as animationData from '@/lotties/s17/data.json';

export default {
  name: 's17',
  data() {
    return {
      defaultOptions: {
        animationData: loadingData.default,
        pathId: 's17'                  // 圖檔位置
      },
    };
  },
  components: {
    lottie: Lottie,
  }
};
</script>
