<template>
  <div class="fitLayout d-flex justify-content-center align-items-center">
    <div class="text-center">
      <div class="loading_animation">( loading )</div>
      <p>載入中...</p>
    </div>
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
  z-index: 20;
}
</style>
