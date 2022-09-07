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
const emit = defineEmits(['submit'])
</script>

<template>
  <FormKit
    type="form"
    name="pet"
    :value="{
      name: prop.name,
      birthday: prop.birthday,
      gender: prop.gender,
      species: prop.species,
      nickname: prop.nickname,
      deathDate: prop.deathDate,
      favoriteFood: prop.favoriteFood,
      favoriteActivity: prop.favoriteActivity,
      description: prop.description,
      photo: prop.photo,
    }"
    @click="emit('submit')"
  >
    <FormKit
      type="text"
      label="*Name"
      name="name"
      validation="required|matches:/^@[a-zA-Z]+$/"
    />

    <FormKit
      type="text"
      label="Nickname"
      name="nickname"
      validation="required|matches:/^@[a-zA-Z]+$/"
    />

    <FormKit
      type="textarea"
      label="Description"
      name="description"
      validation="matches:/^@[a-zA-Z]+$/"
    />

    <FormKit
      type="text"
      label="Species"
      name="species"
    />

    <FormKit
      type="date"
      label="Birthday"
      name="birthday"
    />

    <FormKit
      type="date"
      label="Death Date"
      name="deathDate"
    />

    <FormKit
      type="radio"
      label="Gender"
      :options="{
        male: 'Male',
        female: 'Female',
      }"
    />

    <FormKit
      type="text"
      label="Favorite Food"
      name="favoriteFood"
    />

    <FormKit
      type="text"
      label="Favorite Activity"
      name="favoriteActivity"
    />

    <FormKit
      type="text"
      label="Photo"
      name="photo"
      validation="url"
      help="Enter a URL to an image"
    />
  </FormKit>
</template>
