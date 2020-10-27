<template>
  <div class="lottie">
    <lottie :options="defaultOptions"/>
  </div>
</template>

<script>
import Lottie from '@/components/Lottie.vue';
import * as animationData from '@/lotties/s15/data.json';

export default {
  name: 's15',
  data() {
    return {
      defaultOptions: {
        animationData: loadingData.default,
        pathId: 's15'                  // 圖檔位置
      },
    };
  },
  components: {
    lottie: Lottie,
  }
};
</script>
