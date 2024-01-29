<template>
  <div  id="main" class="h-screen bg-black/20">
    <MyHeader/>
    <Main/>
  </div>

  <div class="p-10">
    <div class="flex justify-between">
      <h1 class="text-3xl font-bold mb-8">Каталог техники</h1>
        <img class="pl-1 mb-8 h-12 cursor-pointer opacity-60 hover:opacity-100" src="/public/basket.png" alt="truck">
    </div>
    <CardList/>
    <Drawer/>
  </div>

</template>

<script setup>
import MyHeader from '@/components/MyHeader.vue'
import Main from '@/components/Main.vue'
import CardList from '@/components/CardList.vue'
import Drawer from '@/components/Drawer.vue'
</script>
