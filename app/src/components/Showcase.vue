<script setup lang="ts">
import type { IPet } from '@/types'

const { result, loading, error } = query.get()

const pets = computed(() => result.value?.getPets as IPet[] ?? [])
</script>

<template>
  <n-carousel
    autoplay
    draggable
    dot-placement="bottom"
  >
    <n-carousel-item v-for="(pet, i) in pets" :key="i" class="flex justify-center">
      <n-spin v-if="loading" size="large" />
      <n-empty v-if="error" description="{{ error.message }}" />
      <PetCard
        v-bind="pet"
      />
    </n-carousel-item>
  </n-carousel>
</template>

<style>
.n-carousel__dots {
  --n-dot-color: #449479;
  --n-dot-color-active: #94fad8;
}
</style>
