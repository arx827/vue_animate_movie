<template>
  <transition name="theaterH" mode="out-in">
    <div class="theater__header" v-if="$store.state.isShow == 'Scence'">
      <div class="theater__header__container d-flex align-items-center">
        <div class="theater__header__icon">
          <img class="img-fluid" src="@/assets/images/img_god.svg" alt="神仙來的"/>
        </div>
        <p class="theater__header__voice" v-html="description"></p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'TheaterHeader',
  props: { description: String },
};
</script>

<style scoped lang="scss">
.theater {
  &__header {
    background: $COLOR-MAIN;
    padding: 16px;
    width: 100%;
    position: relative;
    z-index: 20;
    &__container {
      width: 100%;
      margin-right: auto;
      margin-left: auto;
      @include sm-media {
        width: 80%;
      }
    }
    &__icon {
      width: 75px;
      height: 75px;
      border-radius: 50%;
      box-shadow: 1px 1px 1px $COLOR-GRAY5;
    }
    &__voice {
      color: $COLOR-WHITE;
      font-size: 20px;
      margin-left: 7px;
      line-height: 1.5;
      margin-bottom: 0;
      flex: 1;
      @include sm-media {
        font-size: 22px;
        margin-left: 36px;
      }
    }
  }
}

// 旁白區塊 淡出淡入
.theaterH {
    &-enter,
    &-leave-to {
        opacity: 0;
    }
    &-enter-active {
        transition: opacity 3s;
    }
    &-leave-active {
        transition: opacity 1s;
    }
}
</style>
