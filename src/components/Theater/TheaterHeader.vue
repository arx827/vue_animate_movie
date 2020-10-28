<template>
  <div class="theater__header">
    <div class="theater__header__container d-flex align-items-center">
      <div class="theater__header__icon">
        <img class="img-fluid" src="@/assets/images/img_god.svg" alt="神仙來的"/>
      </div>
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
      box-shadow: 1px 1px 1px var(--color-gray5);
    }
    &__voice {
      color: var(--color-gray2);
      font-size: 16px;
      margin-left: 7px;
      line-height: 1.5;
      margin-bottom: 0;
      flex: 1;
      @include sm-media {
        font-size: 18px;
        margin-left: 36px;
      }
    }
  }
}
</style>
