<template>
  <div class="lottie">
    <lottie :options="defaultOptions" />
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
    lottie: Lottie,
  },
};
</script>
