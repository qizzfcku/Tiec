<script setup>
defineProps({
  title: String,
  imageUrl: String,
  isAdded: Boolean,
  onClickAdd: Function,
})
</script>

<template>
  <div class="bg-white relative border-2 border-black-100 rounded-3xl p-6 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl">
    <img :src="imageUrl" alt="car">
    <p class="mt-5">{{ title }}</p>

    <div class="flex justify-between">
      <img class="left-6 bottom-10 mt-2 opacity-60 hover:opacity-100 scale-75 hover:scale-100" src="/public/image 7.svg" alt="info">
      <div v-if="isAdded">
        <img class="left-6 bottom-10" src="/public/Group 95.svg" alt="plus">
      </div>
      <div v-else>
        <button @click="onClickAdd" class=" mt-2 p-3 border-2 rounded-xl">Оставить Заявку</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>