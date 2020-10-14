<template>
  <div class="theater__procedure">步驟</div>
</template>

<script>
export default {
  name: "TheaterProcedure"
};
</script>

<style scoped lang="scss">
.theater {
  &__procedure {
    position: static;
    background: #ffc107;
    z-index: 20;
    @include md-media {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
    }
  }
}
</style>
