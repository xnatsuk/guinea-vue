<script setup lang="ts">
import { VueperSlide, VueperSlides } from 'vueperslides'
import type { IPet } from '@/services/types'
import 'vueperslides/dist/vueperslides.css'

const breakpoints = {
  1024: {
    slideRatio: 1.3,
  },
  880: {
    slideRatio: 1.5,
  },
  740: {
    slideRatio: 1.8,
  },
  620: {
    slideRatio: 2,
  },
  560: {
    slideRatio: 2.4,
  },
  460: {
    slideRatio: 3,
  },
  380: {
    slideRatio: 3.5,
  },

}

const { result, loading, error } = query.get()

const pets = computed(() => result.value?.getPets as IPet[] ?? [])
</script>

<template>
  <div v-if="loading" class="flex justify-center">
    Loading...
  </div>

  <div v-else-if="error" class="flex justify-center text-error">
    {{ error.message }}
  </div>

  <div v-else-if="pets" class="flex justify-center">
    <VueperSlides
      :dragging-distance="100"
      :slide-ratio="0.6"
      :breakpoints="breakpoints"
      class="no-shadow"
    >
      <VueperSlide
        v-for="(pet, i) in pets"
        :key="i"
        :slides="pet"
      >
        <template #content>
          <PetCard
            :name="pet.name"
            :birthday="pet.birthday"
            :gender="pet.gender"
            :species="pet.species"
            :nickname="pet.nickname"
            :death-date="pet.deathDate"
            :favorite-food="pet.favoriteFood"
            :favorite-activity="pet.favoriteActivity"
            :description="pet.description"
            :photo="pet.photo"
          />
        </template>
      </VueperSlide>
    </VueperSlides>
  </div>
</template>

<style scoped>
  .vueperslides {
  width: 100%;
  max-width: 1024px;
  margin: auto;
  }

  .vueperslide {
    margin-top: 10%;
    max-height: 640px;
  }
</style>
