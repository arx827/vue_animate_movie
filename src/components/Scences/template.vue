<template>
  <div class="lottie">
    <Lottie :options="defaultOptions" ref="lottie"/>
    <div style="position: absolute; top: 0;">
      <button @click="play">play</button>
      <button @click="stop">stop</button>
      <button @click="pause">pause</button>
      <input type="text" v-model="speed" @keydown.enter="setSpeed()">
    </div>
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
        pathId: 's1', // 圖檔位置
      },
      speed: 1,
    };
  },
  components: {
    Lottie,
  },
  methods: {
    play() {
      this.anim.play();
    },
    stop() {
      this.anim.stop();
    },
    pause() {
      this.anim.pause();
    },
    setSpeed(speed = 1) {
      this.anim.setSpeed(speed);
    },
  },
  beforeDestroy() {
    this.anim.destroy();
  },
};
</script>
