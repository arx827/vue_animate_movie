<template>
  <div class="lottie">
    <lottie :options="defaultOptions" ref="lottie"/>
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
        animationData: animationData.default,
        pathId: 's12', // 圖檔位置
      },
    };
  },
  components: {
    lottie: Lottie,
  },
};
</script>
