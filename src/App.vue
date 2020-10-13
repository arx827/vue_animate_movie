<template>
  <div id="app">
    <p>
      內容區塊文案內容區塊文案內容區塊文案內容區塊文案內容區塊文案內容區塊文案內容區塊文案內容區塊文案內容區塊文案內容區塊文案內容區塊文案內容區塊文案
    </p>
    <Home />
    <p class="file__source font-999999 text-center">
      圖片來源：行銷系統部 / 數位行銷運營部
    </p>
    <p>
      內容區塊文案內容區塊文案內容區塊文案內容區塊文案內容區塊文案內容區塊文案內容區塊文案內容區塊文案內容區塊文案內容區塊文案內容區塊文案內容區塊文案
    </p>
  </div>
</template>

<script>
import Home from "@/view/Home.vue";
export default {
  name: "App",
  components: {
    Home
  }
};
</script>

<style lang="scss">
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
  color: var(--color-gray1);
  &.font-999999 {
    color: var(--color-gray2);
  }
}
.file__source {
  margin-top: 0.5rem;
}
</style>
