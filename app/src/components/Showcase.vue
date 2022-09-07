<script setup lang="ts">
import { VueperSlide, VueperSlides } from 'vueperslides'
import type { IPet } from '@/services/types'
import 'vueperslides/dist/vueperslides.css'

const breakpoints = {
  1024: {
    slideRatio: 1,
  },

  740: {
    slideRatio: 1.3,
  },

  580: {
    slideRatio: 2,
  },
}

const pets = ref <Array<IPet>>([])

watch(query.get(), result =>
  pets.value = result?.getPets,
)
</script>

<template>
  <div class="flex justify-center">
    <VueperSlides
      :dragging-distance="10"
      :infinite="true"
      :slide-ratio="1 / 2"
      :breakpoints="breakpoints"
      bullets-outside
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
    width: 90%;
  }

  .vueperslide {
    margin-top: 10%;
  }
</style>
