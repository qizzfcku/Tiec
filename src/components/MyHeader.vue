<template>

    <header class="bg-black/70 w-full  flex justify-between absolute top-0 ">
      <router-link to="/">
        <img class=" h-12 ml-8 mt-2.5 cursor-pointer z-10" src="/public/Group 130.svg" alt="Logo">
      </router-link>
      <div class="flex justify-end items-center gap-12 text-white text-lg pr-5">
          <router-link to="/catalog" class="hover:underline">Каталог</router-link>
          <button class="hover:underline">Новости</button>
          <button class="hover:underline">О компании</button>
      </div>
    </header>
</template>
<script setup>
</script>