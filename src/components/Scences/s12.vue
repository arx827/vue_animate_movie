<template>
  <div class="lottie">
    <lottie :options="defaultOptions"/>
  </div>
</template>

<script>
import Lottie from '@/components/Lottie.vue';
import * as animationData from '@/lotties/s12/data.json';

export default {
  name: 's12',
  data() {
    return {
      defaultOptions: {
        animationData: loadingData.default,
        pathId: 's12'                  // 圖檔位置
      },
    };
  },
  components: {
    lottie: Lottie,
  }
};
</script>
