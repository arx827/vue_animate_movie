<template>
  <div class="theater__procedure d-flex justify-content-center align-items-md-center">
    <div class=" d-flex flex-md-column flex-wrap justify-content-start">
      <template v-for="item in getHistroyMax">
        <div
          class="procedure__stepItem"
          :class="{ 'procedure__stepItem--active': item <= getHistroyNums }"
          @click="stepClick(item)"
          :key="item"
        ></div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'TheaterProcedure',
  computed: {
    ...mapGetters('ScenceManger', ['getHistroyNums', 'getHistroyMax']),
  },
  methods: {
    ...mapActions('ScenceManger', ['goBackToHistory']),
    stepClick(item) {
      if (this.getHistroyNums > item) {
        this.goBackToHistory(item);
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.theater {
  &__procedure {
    position: static;
    z-index: 40;
    @include md-media {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      margin-right: 38px;
      margin-top: 0;
      margin-bottom: 0;
    }
  }
}

.procedure {
  &__stepItem {
    width: 16px;
    height: 16px;
    margin: 0.5rem;
    border-radius: 50%;
    background: var(--btn-step);
    cursor: pointer;
    &--active {
      background: var(--btn-step-active);
    }
  }
}
</style>
