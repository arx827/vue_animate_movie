<template>
  <div id="app">
    <Home />
    <p class="file__source font-999999 text-center">
      圖片來源：富邦人壽 行銷系統部 / 數位行銷運營部
    </p>
    <p class="d-none">version: <span>v3.6</span></p>
  </div>
</template>

<script>
import Home from '@/view/Home.vue';

export default {
  name: 'App',
  components: {
    Home,
  },
};
</script>

<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "@/assets/all.scss";
</style>
<style lang="scss">
#app {
  width: 100%;
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
}

p {
  color: $COLOR-GRAY1;
  &.font-999999 {
    color: $COLOR-GRAY2;
  }
}

.file__source {
  margin-top: 0.5rem;
}

.lottie {
  width: 100%;
  height: 100%;
}
</style>
