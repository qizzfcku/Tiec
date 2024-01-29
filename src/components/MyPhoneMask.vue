<template>
  <MazPhoneNumberInput
    v-model="phoneNumber"
    v-model:country-code="countryCode"
    show-code-on-list
    :only-countries="['RU', 'KZ', 'BY', 'US','UA']"
    @update="results = $event"
    fetch-country
    placeholder="(000) 000-00-00"
    no-search
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const phoneNumber = ref()
const countryCode = ref('RU')
const results = ref()
</script>