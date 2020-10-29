# lottie.vue
<template>
  <!-- Lottie -->
  <div :style="style" ref="lottieRef"></div>
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
        width: this.width ? `${this.width}` : '100%',
        height: this.height ? `${this.height}` : '100%',
        overflow: 'hidden',
        margin: '0 auto',
      }
    };
  },
  watch: {
    // 深度監聽Scence
    options: {
      handler: 'propChange',
      deep: true,
    },
  },
  created() {},
  mounted() {
    const { animationData, pathId } = this.options;
    animationData.assets.forEach((item, index) => {
      item.u = '';
      item.p = require(`@/assets/icons/${pathId}/images/img_${index}.svg`);
    });

    /*
      container: 當前需要渲染的DOM,
      renderer: 渲染方式，默認是Svg，還有Html和Canvas方案,
      loop: 是否循環播放,
      autoplay: 是否自動播放,
      animationData: AE導出的Json,
      assetsPath: Json文件裡資源的絕對路徑，webpack項目需要配合這個參數,
    * */
   
    this.anim = lottie.loadAnimation({
      container: this.$refs.lottieRef,
      renderer: 'svg',
      loop: this.options.loop !== false,
      autoplay: this.options.autoplay !== false,
      animationData,
      rendererSettings: this.options.rendererSettings,
    });
    // this.anim.addEventListener("config_ready", this.$emit('emitConfig_ready', this.anim));    //初始配置完成
    // this.anim.addEventListener("data_ready", this.$emit('emitDataReady', this.anim));     //所有動畫數據加載完成
  },
  methods: {
    propChange() {
      this.anim.destroy();
      this.anim = lottie.loadAnimation({
        container: this.$refs.lottieRef,
        renderer: 'svg',
        loop: this.options.loop !== false,
        autoplay: this.options.autoplay !== false,
        animationData: this.options.animationData,
        rendererSettings: this.options.rendererSettings,
      });
    },
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
    }
  },
  beforeDestroy() {
    this.anim.destroy();
  },
};
</script>
