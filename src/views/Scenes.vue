<template>
  <div class="fitLayout">
    <transition name="fade" mode="out-in">
      <!-- <TranfromAnimation v-if="!isLoading"></TranfromAnimation> -->
      <!-- <fadeScenes v-if="isFade" />-->
      <!-- <div>{{ ScenesIdArray }}</div> -->
      <component v-if="show" :is="nowScene | scenesName"></component>
    </transition>
    <button @click="changeScenes('s2')">切換2</button>
  </div>
</template>

<script>
// import TranfromAnimation from "@/views/TranfromAnimation.vue";
import View_s1 from "@/components/scenes/s1.vue";
import View_s2 from "@/components/scenes/s2.vue";
export default {
  name: "Scenes",
  props: ["scenesView"],
  data() {
    return {
      loadingTimer: "",
      nowScene: this.scenesView,
      show: false
    };
  },
  methods: {
    changeScenes(scenes) {
      this.$emit("emitChangeScenes", scenes);
    }
  },
  filters: {
    scenesName(value) {
      return `view_${value}`;
    }
  },
  components: {
    // TranfromAnimation,
    View_s1,
    View_s2
  },
  beforeCreate() {
    this.$store.dispatch("updateLoading", true);
  },
  mounted() {
    // this.nowScene = "s2"; //測試
    let vm = this;
    this.loadingTimer = setTimeout(function() {
      vm.show = true;
      vm.$store.dispatch("updateLoading", false);
      // this.$emit('emitChangeScenes',)
    }, vm.$store.state.loadingDelay);
  },
  beforeDestroy() {
    clearTimeout(this.loadingTimer);
  }
};
</script>
<style scoped lang="scss">
.fitLayout {
  background: #aaa;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
