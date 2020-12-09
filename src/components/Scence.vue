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
          <!-- <Se/> -->
          <component :is="scenesView"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
// import Se from './Scences/s0.vue';
import Lottie from '@/components/Lottie.vue';
import s1 from '@/components/Scences/s1.vue';
import s2 from '@/components/Scences/s2.vue';
import s3 from '@/components/Scences/s3.vue';
import s4 from '@/components/Scences/s4.vue';
import s5 from '@/components/Scences/s5.vue';
import s6 from '@/components/Scences/s6.vue';
import s7 from '@/components/Scences/s7.vue';
import s8 from '@/components/Scences/s8.vue';
import s9 from '@/components/Scences/s9.vue';
import s10 from '@/components/Scences/s10.vue';
import s11 from '@/components/Scences/s11.vue';
import s12 from '@/components/Scences/s12.vue';
import s13 from '@/components/Scences/s13.vue';
import s14 from '@/components/Scences/s14.vue';
import s15 from '@/components/Scences/s15.vue';
import s16 from '@/components/Scences/s16.vue';
import s17 from '@/components/Scences/s17.vue';

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
    }, vm.$store.state.loadingDelay);
    this.scenesTimer = setTimeout(() => {
      // 動態切換場景
      // this.scenesView = () => import(`../components/Scences/${this.currentData.scenes}.vue`);
      this.scenesView = this.currentData.scenes;
      this.$store.dispatch('updateOpt', true);
    });

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
    this.$store.dispatch('updateOptOpen', false);
  },
  components: {
    s1,
    s2,
    s3,
    s4,
    s5,
    s6,
    s7,
    s8,
    s9,
    s10,
    s11,
    s12,
    s13,
    s14,
    s15,
    s16,
    s17,
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
</style>
