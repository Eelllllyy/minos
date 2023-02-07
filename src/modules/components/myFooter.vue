<template>
  <main>
    <p>Minos Master 2021</p>
    <div class="icon-container">
      <div class="icon-facebook"></div>
      <div class="icon-instagram"></div>
      <div class="icon-twitter"></div>
      <div class="icon-vk"></div>
      <div class="icon-youtube"></div>
    </div>
    <div class="up" @click.prevent="scrollTo('navbar')"></div>
  </main>
</template>
<script setup>
import { scrollTo } from "@/modules/service";
</script>
<style scoped>
main{
  margin:100px 0 70px 0;
  position: relative;
}
.icon-container , p{
  display: flex;
  justify-content: center;
}
.icon-container{
  margin-top: 15px;
}
.icon-facebook{
  background: url('../assets/images/facebook.svg') no-repeat center center / cover;
  width: 24px;
  height: 24px;
  margin-right: 17px;
  cursor: pointer;
}
.icon-instagram{
  background: url('../assets/images/instagram.svg') no-repeat center center / cover;
  width: 24px;
  height: 24px;
  margin-right: 17px;
  cursor: pointer;
}
.icon-twitter{
  background: url('../assets/images/twitter.svg') no-repeat center center / cover;
  width: 24px;
  height: 24px;
  margin-right: 17px;
  cursor: pointer;
}
.icon-vk{
  background: url('../assets/images/vk.svg') no-repeat center center / cover;
  width: 24px;
  height: 24px;
  margin-right: 17px;
  cursor: pointer;
}
.icon-youtube{
  background: url('../assets/images/youtube.svg') no-repeat center center / cover;
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.up{
  background: url('../assets/images/Up.svg') no-repeat center center / cover;
  width: 53px;
  height: 53px;
  cursor: pointer;
  position: absolute;
  bottom: -8px;
  right: 0;
}
</style>