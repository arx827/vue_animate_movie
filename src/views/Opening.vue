<template>
  <div class="fitLayout">
    <!-- <button class="startBtn" @click="playStartEvent">開場</button> -->
    <button class="startBtn" @click="playStartEvent">開場</button>
  </div>
</template>

<script>
// import { loadingMixin } from "@/mixins/mixins.js";
export default {
  name: "Opening",
  data() {
    return {
      loadingTimer: ""
    };
  },
  methods: {
    playStartEvent() {
      this.$emit("emitPlayStartEvent");
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
    // this.$store.dispatch("updateLoading", true);
  }
};
</script>

<style scoped lang="scss">
.fitLayout {
  background: #aaa;
}
.startBtn {
  background: var(--color-main);
  position: absolute;
  width: 200px;
  bottom: 20px;
  left: calc((100% - 200px) / 2);
  border: 0;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  &:focus {
    outline: 0;
  }
  &:active {
    opacity: 0.8;
  }
}
</style>
