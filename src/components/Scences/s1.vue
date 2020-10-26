<template>
  <div class="lottie">
    <lottie :options="defaultOptions" />
  </div>
</template>

<script>
import Lottie from '@/components/Lottie.vue';
import * as loadingData from '@/lotties/s1/data.json';

export default {
  name: 'Loading',
  data() {
    return {
      defaultOptions: {
        animationData: loadingData.default,
        pathId: 's1'
      },
    };
  },
  components: {
    lottie: Lottie,
  }
};
</script>