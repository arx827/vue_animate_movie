<template>
  <div class="lottie">
    <lottie :options="defaultOptions"/>
  </div>
</template>

<script>
import Lottie from '@/components/Lottie.vue';
import * as animationData from '@/lotties/s4/data.json';

export default {
  name: 's4',
  data() {
    return {
      defaultOptions: {
        animationData: loadingData.default,
        pathId: 's4'                  // 圖檔位置
      },
    };
  },
  components: {
    lottie: Lottie,
  }
};
</script>
