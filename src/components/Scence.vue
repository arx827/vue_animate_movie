<template>
  <div class="Scence">
    <p>{{ scenes }}</p>
    <p>{{ description }}</p>
    <div v-for="item in questionOpt" :key="item.optScenes">
      <button @click="$emit('next', item.optScenes)">
        {{ item.optQuestion }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Scence",
  props: {
    Scence: Array
  },
  data() {
    return {
      scenes: "",
      description: "",
      questionOpt: []
    };
  },
  watch: {
    // 深度監聽Scence
    Scence: {
      handler: "printValue",
      deep: true
    }
  },
  methods: {
    printValue() {
      const {
        scenes,
        description,
        // optScenes,
        questionOpt
      } = this.Scence[0].currentData;
      this.scenes = scenes;
      this.description = description;
      this.questionOpt = questionOpt;
    }
  },
  beforeCreate() {
    this.$store.dispatch("updateLoading", true);
  },
  mounted() {
    let vm = this;
    this.loadingTimer = setTimeout(function() {
      vm.$store.dispatch("updateLoading", false);
    }, vm.$store.state.loadingDelay);
  },
  beforeDestroy() {
    clearTimeout(this.loadingTimer);
  }
};
</script>

<style lang="scss" scoped>
.Scence {
  width: inherit;
  min-height: inherit;
  background: #fcffe0;
}
</style>
