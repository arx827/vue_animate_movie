<template>
  <div class="fitLayout scence">
    <div class="scence__content">
      <div class="scence__animate">
        <!-- <img
          class="img-fluid scence__bg"
          src="@/assets/images/demo/img_testbg.jpg"
          alt=""
        /> -->
        <div class="scence__main d-flex justify-content-center align-items-center">
          <component :is="scenesView"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Scence',
  props: ['currentData'],
  data() {
    return {
      scenesView: ''
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
    this.scenesTimer = setTimeout(() => {
      // 動態切換場景
      this.scenesView = () => import(`../components/Scences/${this.currentData.scenes}.vue`);
    });
    this.$store.dispatch('updateOpt', true);

    // 判斷最後一幕
    if (this.getIsFinally) {
      vm.$store.dispatch('ScenceManger/AfterAnimate', () => {
        this.$store.dispatch('updateFinally', true);
      });
    }
  },
  beforeDestroy() {
    clearTimeout(this.loadingTimer);
    clearTimeout(this.scenesTimer);
    this.$store.dispatch('updateOpt', false);
  },
  computed: {
    ...mapGetters('ScenceManger', ['getIsFinally']),
  },
  method: {
    ...mapActions('ScenceManger', ['AfterAnimate']),
  },
};
</script>

<style lang="scss">
.fitLayout {
  z-index: 10;
}

.scence {
  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }
  &__main {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 20;
  }
}

// 選項
.conclusion {
    &-enter,
    &-leave-to {
        opacity: 0;
    }
    &-enter-active {
        transition: opacity 2s;
    }
    &-leave-active {
        transition: opacity 1s;
    }
}
</style>
