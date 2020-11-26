<template>
  <div class="lottie">
    <Lottie :options="defaultOptions" ref="lottie"/>
  </div>
</template>

<script>
import Lottie from '@/components/Lottie.vue';
import * as animationData from '@/lotties/s2/data.json';

export default {
  name: 's2',
  data() {
    return {
      defaultOptions: {
        animationData: animationData.default,
        pathId: 's2',
      },
    };
  },
  components: {
    Lottie,
  },
};
</script>
