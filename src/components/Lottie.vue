# lottie.vue
<template>
  <!-- Lottie -->
  <div v-if="style" :style="style" ref="lottieRef"></div>
</template>

<script>
import lottie from 'lottie-web';
import { mapState } from 'vuex';

export default {
  props: {
    options: {
      type: Object,
      required: true,
    },
    speed: {
      type: Number,
      required: false,
      default: 1
    },
    width: {
      type: Number,
      required: false,
      default: -1
    },
    height: {
      type: Number,
      required: false,
      default: -1
    },
    loop: {
      type:Boolean,
      required: false,
      default: true
    },
    autoPlay: {
      type:Boolean,
      required: false,
      default: true
    },
    loopDelayMin: {
      type: Number,
      required: false,
      default: 0
    },
    loopDelayMax: {
      type: Number,
      required: false,
      default: 0
    },
  },
  data() {
    return {
      name: 'lottie-animation',
      rendererSettings: {
        scaleMode: "centerCrop",
        clearCanvas: true,
        progressiveLoad: false,
        hideOnTransparent: true
      },
      anim: null,
      style: {
        width: (this.width != -1 )? `${this.width}px` : '100%',
        height: (this.height != -1 )? `${this.height}px` : '100%',
        overflow: "hidden",
        margin: "0 auto"
      },
      animationData: this.options.animationData,
      pathId: this.options.pathId
    };
  },
  mounted() {
    this.animationData.assets.forEach((item, index) => {
      if(!item.layers){
        item.u = '';
        item.p = require(`@/assets/icons/${this.pathId}/images/img_${index}.svg`);
      }
    });
    this.init();
  },
  computed: {
    ...mapState(['theaterSize'])
  },
  methods: {
    init(){
      if(this.anim) {
        this.anim.destroy();
        this.anim = null;
      }
      this.anim = lottie.loadAnimation({
        container: this.$refs.lottieRef,
        renderer: 'svg',
        loop: this.loop,
        autoplay: this.autoPlay,
        animationData: this.animationData,
        name: this.pathId,
        rendererSettings: this.rendererSettings
      });
      this.$emit("AnimControl", this.anim);
      this.anim.setSpeed(this.speed);
      if (this.loopDelayMin > 0) {
        this.anim.loop = false;
        this.anim.autoplay = false;
        this.executeLoop();
      }
    },
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    },
    executeLoop() {
      this.anim.play();
      setTimeout(() => {
        this.anim.stop();
        this.executeLoop();
      }, this.getRandomInt(this.loopDelayMin, this.loopDelayMax == 0? this.loopDelayMin : this.loopDelayMax));
    },
  },
  watch: {
    "theaterSize": {
      handler: function(newVal, oldVal){
        this.init();
      },
      deep: true
    }
  }
};
</script>

<style lang="scss">
.lottie {
  width: 100%;
}
</style>
