<template>
  <div class="lottie">
    <Lottie :options="defaultOptions" ref="lottie"/>
  </div>
</template>

<script>
import Lottie from '@/components/Lottie.vue';
import * as animationData from '@/lotties/s14/data.json';

export default {
  name: 's14',
  data() {
    return {
      defaultOptions: {
        animationData: animationData.default,
        pathId: 's14', // 圖檔位置
      },
    };
  },
  components: {
    Lottie,
  },
};
</script>
