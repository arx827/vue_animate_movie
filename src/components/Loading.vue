<template>
  <div class="fitLayout d-flex flex-column justify-content-center align-items-center">
    <!-- <div class="text-center"> -->
    <div class="loading_animation">( loading )</div>
    <p class="loading__txt">載入中...</p>
    <!-- </div> -->
  </div>
</template>
<script>
export default {
  name: "Loading",
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.fitLayout {
  background: #b6fff4;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  color: var(--color-gray3);
}
.loading {
  &__txt {
    margin: 0;
    color: var(--color-gray3);
  }
}
</style>
