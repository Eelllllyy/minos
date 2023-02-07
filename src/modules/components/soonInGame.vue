<template>
    <header>Скоро в игре</header>
  <main>
    <article>
      <div class="about">Режимы</div>
      <div class="description border">“Большие призы”, “Сюжетный режим”, “Арена”.</div>
    </article>
    <article>
      <div class="about">Лидеры</div>
      <div class="description border">Соревнования игроков по различным сферам игры.</div>
    </article>
    <article>
      <div class="about">Ивенты</div>
      <div class="description border">Периодические события по измененным правилам игры.</div>
    </article>
    <article>
      <div class="about">Достижения</div>
      <div class="description">Отображение прогресса игрока. </div>
    </article>
  </main>
</template>
<script setup>
</script>
<style scoped>
header, .about{
  font:400 38px / 27px 'Noto Sans';
}
header{
  margin: 0 auto;
  padding: 42px 0;
  display: flex;
  justify-content: center;
}
main{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 20px 0;
}
.description{
  width: 66%;
  color: #ffffff91;
}
article{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 35px 0;
}
@media(max-width: 760px){
  article{
    flex-direction: column;
    margin: 15px 0;
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
    padding-bottom: 15px;
  }
}
</style>