<template>
  <div class="lottie">
    <Lottie :options="defaultOptions" ref="lottie"/>
  </div>
</template>

<script>
import Lottie from '@/components/Lottie.vue';
import * as animationData from '@/lotties/s16/data.json';

export default {
  name: 's16',
  data() {
    return {
      defaultOptions: {
        animationData: animationData.default,
        pathId: 's16', // 圖檔位置
      },
    };
  },
  components: {
    Lottie,
  },
};
</script>
