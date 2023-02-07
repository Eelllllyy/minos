<template>
  <section class="section" >
    <div class="content">
      <myNavbar class="navbar" id="navbar"/>
      <navbarMobile v-if="navbarVisible" class="navbar-mobile" />
      <main :class="{'hidden-main': navbarVisible}">
      <div class="logo">
        <div class="text-description">
          <p>Играй в Telegram</p>
          <p>Получай денежные призы</p>          
        </div>
      </div>
      <div class="description-for-mobile">
        <p>Играй в Telegram</p>
        <p>Получай денежные призы</p>
        <button class="btn">В лабиринт</button>         
      </div>
      <div class="atributs">
         <div class="open-menu-burger" @click="openNavbarMobile"></div>
         <div class="down" @click.prevent="scrollTo('aboutGame')"></div>
      </div>
     
      <article id="aboutGame"> 
        <aboutGame/>
      </article>
      <article id="theWords"> 
        <theWordsMobile v-if="mobileVersion"/>
        <theWords v-else/>
      </article>
      <article id="soonInGame">
        <soonInGame/>
      </article>
      <article id="myFooter">
        <myFooter/>
      </article>
    </main>
    </div>
  </section>
</template>
<script setup>
import myNavbar from '@/modules/components/myNavbar.vue'
import navbarMobile from '@/modules/components/navbarMobile.vue'
import myFooter from '@/modules/components/myFooter.vue'
import aboutGame from '@/modules/components/aboutGame.vue'
import theWordsMobile from '@/modules/components/theWordsMobile.vue'
import theWords from '@/modules/components/theWords.vue'
import soonInGame from '@/modules/components/soonInGame.vue'
import { ref, onMounted } from 'vue'
import { openNavbarMobile, navbarVisible, scrollTo } from "@/modules/service";

const mobileVersion = ref(false)
onMounted(() => {
  if (/Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    mobileVersion.value = true
  }
  else{
    mobileVersion.value = false ;
  }
})
</script>
<style scoped>
.section{
  background: #070707;
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  animation: ani 2s forwards;
}
@keyframes ani {
  0% {opacity: 0;}
  100% {opacity: 1;}
}
.content{
  width: 85%;
  margin: 0 auto;
}
.logo{
  background: url('../assets/images/logo.svg') no-repeat center center / cover;
  width: 1133px;
  height: 293px;
  margin: 0 auto;
  margin-top: 230px;
  position: relative;
}
.atributs{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin:73px 0 200px 0;
}
.down{
  background: url('../assets/images/Down.svg') no-repeat center center / cover;
  width: 53px;
  height: 101px;
  cursor: pointer;
}
.text-description{
  position: absolute;
  bottom: -50px;
  right: 0;
}
.description-for-mobile{
  visibility: hidden;
}
p{
  color: #ffffff91;
}
.navbar-mobile{
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  z-index: 10;
  overflow-y: none;
  background: #070707;
}

.hidden-main{
  display: none;
}
.btn{
  width: 186px;
  height: 51px;
  left: 114px;
  top: 494px;
  background-color: #070707;
  border: 1px solid #ffffff91;
  border-radius: 45px;
  margin: 0 auto;
  margin-top: 20px;
  color: #ffffff91;
  font-size: 18px;
}
@media(max-width: 1280px){
  .logo{
    width: 990px;
    height: 245px;
    margin-top: 260px;
  }
}
@media(max-width: 1100px){
  .logo{
    width: 891px;
    height: 222px;
    margin-top: 260px;
  }
}
@media(max-width: 1000px){
  .logo{
    width: 726px;
    height: 189px;
  }
}
@media(max-width: 850px){
  .logo{
    width: 679px;
    height: 173px;
  }
}
@media(max-width: 760px){
  .logo{
    width: 245px;
    height: 63px;
    margin-top: 150px;
  }
  .text-description{
    visibility: hidden;
  }
  .description-for-mobile{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    visibility:visible;
    margin-top: 20px;
  }
  .open-menu-burger{
    background: url('../assets/images/menuBurger.svg') no-repeat center center / cover;
    width: 36px;
    height: 36px;
    margin-top: 71px;
    cursor: pointer;
  }
  .navbar{
    opacity: 0;
  }
  .atributs{
    margin:130px 0 85px 0;
}
}
</style>
