<script setup>
defineProps({
  title: String,
  imageUrl: String,
  isAdded: Boolean,
  onClickAdd: Function,
})
</script>

<template>
  <div class="bg-white border-2 border-gray-200 rounded-3xl cursor-pointer transition hover:-translate-y-2 hover:shadow-xl grid grid-rows-[auto,1fr] overflow-hidden">
    <img :src="imageUrl" alt="car" class="object-contain w-full h-48 p-3">
    <div class="grid grid-rows-2 bg-neutral-700 rounded-b-3xl p-5 text-white">
      <p class="text-xl font-semibold leading-tight">{{ title }}</p>
      <div class="flex justify-between items-center mt-4">
        <img class="h-6 opacity-60 hover:opacity-100 transition-opacity duration-300" src="/public/image 7.svg" alt="info">
        <div v-if="isAdded">
          <img src="/public/Group 95.svg" alt="Added">
        </div>
        <div v-else>
          <button @click="onClickAdd" class="bg-green-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl transition-colors duration-300">Оставить Заявку</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>