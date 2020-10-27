<template>
  <div class="lottie">
    <lottie :options="defaultOptions"/>
  </div>
</template>

<script>
import Lottie from '@/components/Lottie.vue';
import * as animationData from '@/lotties/s10/data.json';

export default {
  name: 's10',
  data() {
    return {
      defaultOptions: {
        animationData: loadingData.default,
        pathId: 's10'                  // 圖檔位置
      },
    };
  },
  components: {
    lottie: Lottie,
  }
};
</script>
