<script setup>

</script>

<template>
    <div class="p-10 h-full">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold mb-4">Каталог техники</h1>
        <img class="transition pl-1 mb-4 mt-3 h-8 cursor-pointer opacity-60 hover:opacity-100 hover:scale-125" src="/public/basket.png" alt="basket">
      </div>
      <div class="flex justify-end mb-4">
        <select class="border-2 py-2 px-2 outline-none">
          <option>Все</option>
          <option>Для уборки дорог</option>
          <option>Для уборки снега и льда </option>
          <option>Содержание у уборка аэродрома</option>
          <option>Обсуживание воздушных судов</option>
          <option>Оборудование</option>
        </select>
      </div>
      <CardList/>
  <!--    <Drawer/>-->
    </div>
</template>

<style scoped>

</style>