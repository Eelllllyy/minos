<template>
  <header>
    <h1>Миры</h1>
    <article>
      <div class="about">О системе</div>
      <div class="description">Вы можете выбрать один из трех миров (в боте для настройки игры), в которых сейчас существует лабиринт. Но лабиринт непостижим, и может появиться в любом из миров, так что не забывайте проверять список актуальных.</div>
    </article>
  </header>
  <main>
    <article>
      <div class="about">Тайник потерянного <br> подземелья Букдэйла </div>
      <div class="card-block">
        <img src="../assets/images/buckdale.png">
        <div class="description">Старик рассказал о Букдэйле не все. Например, он забыл упомянуть проклятья, поджидающие тут и там, или эльфов, охраняющих подступы к городу. Ну и, конечно, было бы хорошо знать ответы на загадки того странного крылатого существа. <br> <br> Ничего, богатства из тайника стоят всех усилий. Надеюсь, старик рассказал о них только мне.</div>
      </div>
    </article>
    <article>
      <div class="about">Сокровищница <br> замка Дракулы </div>
      <div class="card-block">
        <img src="../assets/images/dracula.png">
        <div class="description">Британская империя громит Египет, на Манхэттене начинает работу первая электроподстанция, Эйфель строит свою башню, а группа учеников всемирно известного расхитителя гробниц полковника Джонатана Майерса получила координаты подвески “Тысяча рубиновых слез”. Первый, кто ее найдет, станет самым богатым европейцем XX века.</div>
      </div>
    </article>
    <article>
      <div class="about">Космический торговый  <br> корабль “Victoria 23B” </div>
      <div class="card-block">
        <img src="../assets/images/victoria.png">
        <div class="description">“Если есть набитые драгоценностями корабли, то найдутся и проворные пираты”. Актуально хоть для финникийского Бейрута тысячного года до нашей эры, хоть для тракта созвездия Лебедя 3018 года.<br> <br>Вы в составе пиратской шайки незаметно пробрались в космический торговый корабль, но теперь каждый сам за себя. </div>
      </div>
    </article>
  </main>
</template>
<script setup>
</script>
<style scoped>
header{
  margin: 100px 0;
}
h1, .about{
  font:400 38px / 37px 'Noto Sans';
}
h1{
  margin: 0 auto;
  padding-bottom: 46px;
  display: flex;
  justify-content: center;
}
article{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 20px 0;
}
.card-block{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 42px 0;
}
.description{
  width: 66%;
  color: #ffffff91;
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
}
</style>