<template>
  <div class="fitLayout scence">
    <div class="scence__content">
      <div class="scence__animate">
        <img
          class="img-fluid scence__bg"
          src="@/assets/images/demo/img_testbg.jpg"
          alt=""
        />
        <div class="scence__main d-flex justify-content-center align-items-center">
          <component :is="scenesView"></component>
        </div>

      </div>

      <!-- 結尾 結語 -->
      <div class="scence__conclusion" v-if="currentData.conclusion">{{ currentData.conclusion }}</div>
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
      scenesView: '',
    };
  },
  beforeCreate() {
    this.$store.dispatch('updateLoading', true);
  },
  mounted() {
    const vm = this;
    this.loadingTimer = setTimeout(() => {
      vm.$store.dispatch('updateLoading', false);
      // 動態切換場景
      this.scenesView = () => import(`../components/Scences/${this.currentData.scenes}.vue`);
    }, vm.$store.state.loadingDelay);
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
    this.$store.dispatch('updateOpt', false);
  },
  computed: {
    ...mapGetters('ScenceManger', ['getIsFinally']),
    // scenesView() {
    //   return `${this.currentData.scenes}View`;
    // }
  },
  method: {
    ...mapActions('ScenceManger', ['AfterAnimate']),
  },
};
</script>

<style lang="scss">
.fitLayout {
  // width: inherit;
  // min-height: inherit;
  // background: #fcffe0;
  // position: absolute;
  // top: 0;
  // left: 0;
  // bottom: 0;
  // right: 0;
  z-index: 10;
  // overflow: hidden;
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
  // 結語
  &__conclusion {
    position: absolute;
    top: 1rem;
    left: 5%;
    width: 90%;
  }
}
</style>
