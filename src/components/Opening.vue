<template>
  <transition name="opening" mode="out-in">
    <div class="fitLayout" v-if="$store.state.isShow == 'Opening'">
      <div class="scence__animate">
        <img class="img-fluid" src="@/assets/images/star_p1.svg" alt="" />
      </div>
    </div>
  </transition>
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

<style lang="scss">
.opening {
    &-enter,
    &-leave-to {
        opacity: 0;
    }
    &-enter-active {
        transition: opacity 2s;
    }
    &-leave-active {
        transition: opacity 0s;
    }
}
</style>
