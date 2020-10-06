<template>
  <div class="fitLayout d-flex justify-content-center align-items-center">
    <div class="tranfrom_animation">載入中...</div>
  </div>
</template>

<script>
export default {
  name: "Tranfrom",
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
  z-index: 99;
}
</style>
