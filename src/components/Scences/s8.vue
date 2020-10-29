<template>
  <div class="lottie">
    <lottie :options="defaultOptions" ref="lottie"/>
  </div>
</template>

<script>
import Lottie from '@/components/Lottie.vue';
import * as animationData from '@/lotties/s8/data.json';

export default {
  name: 's8',
  data() {
    return {
      defaultOptions: {
        animationData: animationData.default,
        pathId: 's8', // 圖檔位置
      },
    };
  },
  components: {
    lottie: Lottie,
  },
};
</script>
