<script setup>
import Card from '@/components/Card.vue'

let change = false;

function changeAdd(){
  alert('sdas');
}
</script>

<template>
  <div class="grid grid-cols-4 gap-5 mb-20">
    <Card :onClickAdd="changeAdd" :is-added="true" title="Интеллектуальная снегоуборочная машина 365B-Z" image-url="/image 6.png"/>
    <Card :is-added="false" title="Машина для разбрасывания противогололедной жидкости T400" image-url="/image 8.png"/>
    <Card :is-added="false" title="Автомобиль для сбора противогололедной жидкости T500" image-url="/image 9.png"/>
    <Card :is-added="false" title="Снегоуборочная машина TG25" image-url="/image 10.png"/>
    <Card :is-added="false" title="Противообледенительная машина для самолетов TJCB80E" image-url="/image 11.png"/>
    <Card :is-added="false" title="Автомобиль для чистки стен TQ18" image-url="/image 12.png"/>
    <Card :is-added="false" title="Уборщик взлетно-посадочной полосы TS18-ZJ" image-url="/image 13.png"/>
    <Card :is-added="false" title="Многофункциональные автомобили Т90" image-url="/image 14.png"/>
  </div>
</template>

<style scoped>

</style>