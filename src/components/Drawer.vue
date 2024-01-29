<script setup>

import CartItemList from '@/components/CartItemList.vue'
import MyPhoneMask from '@/components/MyPhoneMask.vue'
</script>

<template>
<div class="fixed top-0 left-0 h-full w-full bg-black/70 z-10"></div>
  <div class="fixed right-0 top-0 bg-white w-96 h-full z-20 p-8">
    <div class="flex justify-between  mb-10">
      <h2 class="font-bold text-2xl">Корзина</h2>
      <img class="h-5 mt-2 opacity-30 hover:opacity-100 cursor-pointer transition hover:scale-125" src="/public/exit.png" alt="exit"/>
    </div>
    <CartItemList/>

    <div class="mt-8">
      <input class="border border-slate-200 rounded-xl w-full p-3 mb-2" placeholder="Ваше имя:"/>

      <MyPhoneMask class="mb-2"/>


      <button
        class="mt-4 transition disabled:bg-slate-300 border border-slate-200 p-3 rounded-xl w-full bg-amber-500 hover:bg-amber-400 active:bg-amber-500">Оставить заявку</button>
    </div>

  </div>
</template>

<style scoped>

</style>