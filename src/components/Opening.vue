<template>
  <div class="fitLayout">
    <div class="scence__animate">
      <img class="img-fluid" src="@/assets/images/demo/img_testbg.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Opening',
  data() {
    return {
      loadingTimer: '',
    };
  },
  beforeCreate() {
    this.$store.dispatch('updateLoading', true);
  },
  mounted() {
    const vm = this;
    this.loadingTimer = setTimeout(() => {
      vm.$store.dispatch('updateLoading', false);
    }, vm.$store.state.loadingDelay);
  },
  beforeDestroy() {
    clearTimeout(this.loadingTimer);
  },
};
</script>
