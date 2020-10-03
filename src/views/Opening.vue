<template>
  <div class="fitLayout">
    <button class="startBtn">開場</button>
  </div>
</template>

<script>
export default {
  name: "Scenes",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.startBtn {
  background: var(--color-main);
  position: absolute;
  width: 200px;
  bottom: 20px;
  left: calc((100% - 200px) / 2);
  border: 0;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  &:focus {
    outline: 0;
  }
  &:active {
    opacity: 0.8;
  }
}
</style>
