<template>
  <header>
    <h1>Миры</h1>
    <article>
      <div class="about-word">О системе</div>
      <div class="description-word">Вы можете выбрать один из трех миров (в боте для настройки игры), в которых сейчас существует лабиринт. Но лабиринт непостижим, и может появиться в любом из миров, так что не забывайте проверять список актуальных.</div>
    </article>
  </header>
  <main>
  <swiper class="swiper"
    :slides-per-view="1"
    :modules="[Pagination]"
    :pagination="{clickable:true, dynamicBullets: true}"
    grab-cursor>
    <SwiperSlide>
      <img src="../assets/images/buckdale.png">
      <div class="about"> Тайник потерянного подземелья Букдэйла</div>
      <div class="description">Старик рассказал о Букдэйле не все. Например, он забыл упомянуть проклятья, поджидающие тут и там, или эльфов, охраняющих подступы к городу. Ну и, конечно, было бы хорошо знать ответы на загадки того странного крылатого существа. <br> <br> Ничего, богатства из тайника стоят всех усилий. Надеюсь, старик рассказал о них только мне.</div>
    </SwiperSlide>
    <SwiperSlide>
      <img src="../assets/images/dracula.png">
      <div class="about">Сокровищница замка Дракулы </div>
      <div class="description">Британская империя громит Египет, на Манхэттене начинает работу первая электроподстанция, Эйфель строит свою башню, а группа учеников всемирно известного расхитителя гробниц полковника Джонатана Майерса получила координаты подвески “Тысяча рубиновых слез”. Первый, кто ее найдет, станет самым богатым европейцем XX века.</div>
    </SwiperSlide>
    <SwiperSlide>
      <img src="../assets/images/victoria.png">
      <div class="about">Космический торговый корабль “Victoria 23B” </div>
      <div class="description">“Если есть набитые драгоценностями корабли, то найдутся и проворные пираты”. Актуально хоть для финникийского Бейрута тысячного года до нашей эры, хоть для тракта созвездия Лебедя 3018 года.<br> <br>Вы в составе пиратской шайки незаметно пробрались в космический торговый корабль, но теперь каждый сам за себя. </div>
    </SwiperSlide>
  </Swiper>
  </main>

</template>
<script setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import { Pagination } from "swiper";
import "swiper/css/bundle";
import "swiper/css";
</script>
<style scoped>
header{
  margin: 100px 0 30px;
}
h1, .about , .about-word{
  font-size: 25px;
  font-weight: 700;
  padding-bottom: 10px;
}
.about{
  color: black;
  padding-top: 18px;
  font-size: 25px;
  font-weight: 700;
  padding-bottom: 10px;
}
h1{
  margin: 0 auto;
  padding-bottom: 31px;
  display: flex;
  justify-content: center;
  font: 400 38px / 37px 'Noto Sans';
}
article{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 20px 0;
  flex-direction: column;
}
.description-word{
  color: #ffffff91;
  font: 100 18px / 33px 'Noto Sans';
}
.description{
  width: 100%;
  color: black;
  margin-bottom: 20px;
}
main{
  background-color: #ffffff;
  padding: 20px;
  border-radius: 38px;
}
img{
  border-top-left-radius:38px;
  border-top-right-radius:38px;
}
.swiper-slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.swiper-slide-next {
  overflow: hidden;
}
.swiper{
  --swiper-theme-color:#0f0e0e;
  --swiper-navigation-size:20px;
}
</style>