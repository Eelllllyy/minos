<template>
  <div class="animate-navbar">
    <div class="logo"></div>
    <div class="icon-container">
      <div class="icon-facebook"></div>
      <div class="icon-instagram"></div>
      <div class="icon-twitter"></div>
      <div class="icon-vk"></div>
      <div class="icon-youtube"></div>
    </div>
    <ul class="nav">
      <li @click.prevent="scrollTo('aboutGame')">Об игре</li>
      <li @click.prevent="scrollTo('theWords')">Миры</li>
      <li @click.prevent="scrollTo('soonInGame')">Скоро</li>
    </ul>
    <div class="exit" @click="openNavbarMobile"></div>
  </div>
</template>
<script setup>
import { openNavbarMobile, scrollTo } from "@/modules/service";
</script>
<style scoped>
.logo{
  background: url('../assets/images/logo.svg') no-repeat center center / cover;
  width: 245px;
  height: 63px;
  margin: 0 auto;
  margin-top: 70px;
  position: relative;
}
.icon-container{
  display: flex;
  justify-content: center;
}
.icon-container{
  margin: 25px 0;
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
.nav{
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 40px;
  font-weight: 100;
}
li:not(:last-child){
  border-bottom: 1px solid gray;
  padding: 55px;
  cursor: pointer;
}
li:last-child{
  padding-top: 55px;
  cursor: pointer;
}
.exit{
  background: url('../assets/images/Exit.svg') no-repeat center center / cover;
  width: 36px;
  height: 36px;
  cursor: pointer;
  margin: 50px 0 20px 10px;
}
.animate-navbar{
  animation: ani 2.5s forwards;
  overflow-y: scroll;
}
@keyframes ani {
  0% {opacity: 0;}
  100% {opacity: 1;}
}
</style>