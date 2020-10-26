# lottie.vue
<template>
  <!-- Lottie -->
  <div :style="style" ref="lavContainer"></div>
</template>

<script>
import lottie from 'lottie-web';

export default {
  props: {
    options: {
      type: Object,
      required: true,
    },
    height: Number,
    width: Number,
  },
  data() {
    return {
      style: {
        width: this.width ? `${this.width}` : "100%",
        height: this.height ? `${this.height}` : "100%",
        overflow: "hidden",
        margin: "0 auto"
      }
    };
  },
  watch: {
    // 深度監聽Scence
    options: {
      handler: "propChange",
      deep: true
    }
  },
  created() {},
  mounted() {
    const { animationData } = this.options;
    const { pathId } = animationData;
    animationData.assets.forEach((item, index) => {
      item.u = "";
      item.p = require(`@/assets/icons/${pathId}/img_${index}.svg`);
    });
    this.anim = lottie.loadAnimation({
      container: this.$refs.lavContainer,
      renderer: 'svg',
      loop: this.options.loop !== false,
      autoplay: this.options.autoplay !== false,
      animationData,
      rendererSettings: this.options.rendererSettings,
    });
  },
  methods: {
    propChange() {
      this.anim.destroy();
      this.anim = lottie.loadAnimation({
        container: this.$refs.lavContainer,
        renderer: 'svg',
        loop: this.options.loop !== false,
        autoplay: this.options.autoplay !== false,
        animationData: this.options.animationData,
        rendererSettings: this.options.rendererSettings,
      });
    },
  },
  beforeDestroy() {}
};
</script>
