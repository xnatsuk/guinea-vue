<script setup lang="ts">

interface props {
  name: string
  birthday?: string | Date
  gender?: string
  species?: string
  nickname?: string
  deathDate?: string | Date
  favoriteFood?: string
  favoriteActivity?: string
  description?: string
  photo?: string

}
const prop = defineProps<props>()
</script>

<template>
  <div>
    <div class="card lg:card-side bg-base-300 shadow-lg ">
      <figure>
        <div v-if="prop.photo">
          <img :src="prop.photo" class="max-w-4xl lg:max-w-lg">
        </div>
        <div v-else class="artboard artboard-horizontal phone-1" />
      </figure>
      <div class="card-body ">
        <h2 class="card-title">
          {{ prop.name }}
          <div class="badge badge-secondary">
            {{ prop.nickname }}
          </div>
        </h2>

        <p class="text-accent">
          {{ prop.birthday }} - {{ prop.deathDate }}
        </p>
        <p class="max-w-xs">
          {{ prop.description }}
        </p>

        <div class="mx-4">
          <li class="text-lg">
            Favorite food:
            <span class="text-base">{{ prop.favoriteFood }}</span>
          </li>
          <li class="text-lg">
            Favorite activity:
            <span class="text-base">{{ prop.favoriteActivity }}</span>
          </li>
        </div>

        <span class="justify-end">
          <div class="badge badge-info mx-2">
            {{ prop.species }}
          </div>
          <div class="badge badge-accent mx-2">
            {{ prop.gender }}
          </div>
        </span>
      </div>
    </div>
  </div>
</template>
