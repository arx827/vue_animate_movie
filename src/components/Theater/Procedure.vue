<template>
  <div class="theater__procedure d-flex justify-content-center align-items-sm-center">
    <div class=" d-flex flex-sm-column flex-wrap justify-content-start">
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
  },
};
</script>

<style lang="scss" scoped>
.theater {
  &__procedure {
    position: static;
    z-index: 40;
    padding-top: .5rem;
    padding-bottom: .5rem;
    background: $COLOR-WHITE;
    @include sm-media {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      padding: 1rem 1rem 10rem 0;
      background: transparent;
    }
  }
}

.procedure {
  &__stepItem {
    width: 1.1rem;
    height: 1.1rem;
    margin: .6rem;
    background-image: url("../../assets/images/img_icon_foot_off.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    cursor: pointer;
    @include sm-media {
      margin: .7rem;
      transform: rotate(-90deg);
    }
    @include md-media {
      margin: 15px;
    }
    &--active {
      background-image: url("../../assets/images/img_icon_foot_on.svg");
    }
  }
}
</style>
