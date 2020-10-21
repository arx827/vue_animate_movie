# lottie.vue
<template>
  <!-- Lottie -->
  <div :style="style" ref="lavContainer"></div>
</template>

<script>
import lottie from "lottie-web";
export default {
  props: {
    options: {
      type: Object,
      required: true
    },
    height: Number,
    width: Number
  },
  data() {
    return {
      style: {
        width: this.width ? `${this.width}px` : "100px",
        height: this.height ? `${this.height}px` : "100px",
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
  mounted() {
    this.anim = lottie.loadAnimation({
      container: this.$refs.lavContainer,
      renderer: "svg",
      loop: this.options.loop !== false,
      autoplay: this.options.autoplay !== false,
      animationData: this.options.animationData,
      rendererSettings: this.options.rendererSettings
    });
  },
  methods: {
    propChange() {
      this.anim.destroy();
      this.anim = lottie.loadAnimation({
        container: this.$refs.lavContainer,
        renderer: "svg",
        loop: this.options.loop !== false,
        autoplay: this.options.autoplay !== false,
        animationData: this.options.animationData,
        rendererSettings: this.options.rendererSettings
      });
      console.log(1);
    }
  },
  beforeDestroy() {
    console.log(23);
  }
};
</script>
