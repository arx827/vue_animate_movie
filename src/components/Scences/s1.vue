<template>
  <div class="lottie">
    <Lottie :options="defaultOptions" ref="lottie"/>
  </div>
</template>

<script>
import Lottie from '@/components/Lottie.vue';
import * as animationData from '@/lotties/s1/data.json';

export default {
  name: 's1',
  data() {
    return {
      defaultOptions: {
        animationData: animationData.default,
        pathId: 's1',
      },
    };
  },
  components: {
    Lottie,
  },
};
</script>
