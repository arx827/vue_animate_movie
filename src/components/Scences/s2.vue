<template>
  <div class="lottie">
    <lottie :options="defaultOptions" />
  </div>
</template>

<script>
import Lottie from '@/components/Lottie.vue';
import * as loadingData from '@/lotties/s2/data.json';

export default {
  name: 'Loading',
  data() {
    return {
      defaultOptions: {
        animationData: loadingData.default,
        pathId: 's2'
      },
    };
  },
  components: {
    lottie: Lottie,
  }
};
</script>
