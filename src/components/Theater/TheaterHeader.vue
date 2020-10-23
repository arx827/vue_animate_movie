<template>
  <div class="theater__header">
    <div class="theater__header__container d-flex align-items-center">
      <img src="@/assets/images/demo/img_icon.png" alt="" class="theater__header__icon" />
      <p class="theater__header__voice" v-show="!$store.state.isLoading" v-html="description"></p>
    </div>
  </div>
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
    background: var(--color-white);
    padding: 16px;
    // position: absolute;
    width: 100%;
    // top: 0;
    // left: 0;
    box-shadow: 0 0 15px var(--box-shadow);
    position: relative;
    z-index: 20;
    &__container {
      width: 100%;
      margin-right: auto;
      margin-left: auto;
      @include md-media {
        width: 80%;
      }
    }
    &__icon {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin-right: 12px;
    }
    &__voice {
      color: var(--color-gray2);
      line-height: 1.5;
      margin-bottom: 0;
      flex: 1;
    }
  }
}
</style>
