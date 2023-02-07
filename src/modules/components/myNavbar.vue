<template>
  <header>
    <nav class="navbar">
      <ul>
        <li @click.prevent="scrollTo('aboutGame')">Об игре</li>
        <li @click.prevent="scrollTo('theWords')">Миры</li>
        <li @click.prevent="scrollTo('soonInGame')">Скоро</li>
      </ul>
    </nav>
  </header>
</template>
<script setup>
import { scrollTo } from "@/modules/service";
</script>
<style scoped>
.navbar{
  padding-top: 15px;
  font-size: 24px;
}
ul{
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #FFFFFF;
  list-style: none;
}
li:not(:last-child){
  padding-right: 20px;
}
li{
  cursor: pointer;
}
</style>