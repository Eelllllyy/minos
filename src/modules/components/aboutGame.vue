<template>
  <header>Об игре</header>
  <main>
    <article>
      <div class="about">Введение</div>
      <div class="description">Вы попадаете в лабиринт, полный опасностей и тайн. На пути к сокровищам вы столкнетесь с другими игроками - искателями приключений, котрые постараются найти клад быстрее вас, опасными ловушками и <b>артефактами</b>, которые помогут преодолеть препятствия.<br><br>Ориентация, передвижение и взаимодействие с лабиринтом происходят при помощи Telegram бота.</div>
    </article>
    <article>
      <div class="about">Как начать?</div>
      <div class="description">
        <p><span class="number-list">1</span>Используй <a href="#">бота ”Minos Master”</a> для регистрации и настройки.</p>
        <p><span class="number-list">2</span>Для начла игры запусти и следуй указаниям <a href="#">бота ”Minos Online”</a>.</p>
        <p><span class="number-list">3</span>Войди в лабиринт через команду /go. Остальные <b>команды</b>.</p>
        <p><span class="number-list">4</span>Игра началась. Удачи!</p>
      </div>
    </article>
    <article>
      <div class="about">Особенности</div>
      <div class="description">
        <p class="border">Каждый лабиринт генерируется уникальным. </p>
        <p class="border">Стартовая позиция игрока в лабиринте случайная.</p>
        <p class="border">В каждом лабиринте одновременно могут находиться до 10 игроков.</p>
        <p class="border">Победитель в игровой сессии один. Если им стали не вы - скорее заходите в новый.</p>
        <p>45 минут на прохождение с момента создания лабиринта.</p>
      </div>
    </article>
    <article>
      <div class="about">Приз</div>
      <div class="description">
        В режиме игры “Стычка” вы участвуете бесплатно, а лучшие и самые активные игроки ежедневно получают денежные призы.
      </div>
    </article>
  </main>
</template>
<script setup>
</script>
<style scoped>
header , .about {
  font:400 38px / 37px 'Noto Sans';
  vertical-align: top;
}
header{
  padding: 125px 0 42px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.about{
  text-align: left;
}
.description{
  font:100 18px / 33px 'Noto Sans';
  width: 66%;
}
article{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 35px 0;
}
.number-list{
  border: 1px solid white;
  border-radius: 20px;
  padding: 1px 6px;
  margin-right: 10px;
}
p{
  margin: 0 0 20px 0;
}
@media(max-width: 760px){
  article{
    flex-direction: column;
  }
  .description{
    width: 100%;
  }
  .about{
    font-size: 25px;
    font-weight: 700;
    padding-bottom: 10px;
  }
  .border{
    border-bottom: 1px solid grey;
  }
}
</style>