<script setup lang="ts">
import type { FormInst, FormItemRule, FormRules } from 'naive-ui'
import { useMessage } from 'naive-ui'
import { setMessage } from '@/composables/message'

const prop = defineProps<{
  name: string
  gender?: string
  species?: string
  nickname?: string
  birthday?: string | Date
  deathDate?: string | Date
  favoriteFood?: string
  favoriteActivity?: string
  description?: string
  photo?: string
  type: 'create' | 'update'
}>()

const emit = defineEmits<{
  (e: 'formSubmit'): void
}>()

setMessage(useMessage())

const pet = ref({
  name: prop.name,
  gender: prop.gender,
  species: prop.species,
  nickname: prop.nickname,
  birthday: prop.birthday,
  deathDate: prop.deathDate,
  favoriteFood: prop.favoriteFood,
  favoriteActivity: prop.favoriteActivity,
  description: prop.description,
  photo: prop.photo,
})

const { editPet } = mutation.update(prop.name, pet.value)
const { createPet } = mutation.create(pet.value)

const formRef = ref<FormInst | null>(null)

const rules: FormRules = {
  name: [
    {
      required: true,
      trigger: ['input', 'blur'],
      validator(rule: FormItemRule, value: string) {
        if (!value)
          return new Error('Name is required')

        if (value.length < 2)
          return new Error('Name must be at least 2 characters')

        if (value.length > 20)
          return new Error('Name must be less than 20 characters')

        return true
      },
    },
  ],
}

const onSubmit = async () => {
  if (prop.type === 'update') {
    try {
      await editPet()
      emit('formSubmit')
      notify.success(`${pet.value.name}'s information was updated successfully`)
    }
    catch (error) {
      notify.error(`Failed to update ${pet.value.name}'s information`)
    }
  }

  if (prop.type === 'create') {
    try {
      await createPet()
      emit('formSubmit')
      notify.success(`${pet.value.name} was added successfully`)

      setTimeout(() => {
        router.go(0)
      }, 2000)
    }
    catch (error) {
      notify.error(`Failed to add ${pet.value.name}`)
    }
  }
}
</script>

<template>
  <n-form
    ref="formRef"
    label-placement="top"
    :rules="rules"
    :model="pet"
  >
    <n-image
      :src="pet.photo"
      :height="300"
      :width="500"
    />

    <n-form-item label="Photo">
      <n-input
        v-model:value="pet.photo"
        placeholder="Image URL"
        :input-props="{ type: 'url' }"
        clearable
      >
        <template #prefix>
          <n-icon class="i-carbon-image" />
        </template>
      </n-input>
    </n-form-item>

    <n-space>
      <n-form-item label="Name" path="name">
        <n-input
          v-model:value="pet.name"
          type="text"
          placeholder="Your pet's name"
          clearable
        >
          <template #prefix>
            <n-icon class="i-carbon-user-avatar-filled-alt" />
          </template>
        </n-input>
      </n-form-item>

      <n-form-item label="Nickname">
        <n-input
          v-model:value="pet.nickname"
          type="text"
          placeholder="Your pet's nickname"
          clearable
        >
          <template #prefix>
            <n-icon class="i-carbon-user-avatar-filled-alt" />
          </template>
        </n-input>
      </n-form-item>
    </n-space>

    <n-form-item label="Description">
      <n-input
        v-model:value="pet.description"
        type="textarea"
        placeholder="Enter a description"
        :autosize="{ minRows: 1, maxRows: 5 }"
        clearable
      >
        <template #prefix>
          <n-icon class="i-carbon-information" />
        </template>
      </n-input>
    </n-form-item>

    <n-form-item label="Species">
      <n-input
        v-model:value="pet.species"
        type="text"
        placeholder="Your pet's species"
        clearable
      >
        <template #prefix>
          <n-icon class="i-cil-animal" />
        </template>
      </n-input>
    </n-form-item>

    <n-form-item label="Favorite Food">
      <n-input
        v-model:value="pet.favoriteFood"
        type="text"
        placeholder="Your pet's favorite food"
        clearable
      >
        <template #prefix>
          <n-icon class="i-fluent-food-carrot-24-regular" />
        </template>
      </n-input>
    </n-form-item>

    <n-form-item label="Favorite Activity">
      <n-input
        v-model:value="pet.favoriteActivity"
        type="text"
        placeholder="Your pet's favorite activity"
        clearable
      >
        <template #prefix>
          <n-icon class="i-ic-baseline-sports" />
        </template>
      </n-input>
    </n-form-item>

    <n-space>
      <n-form-item label="Birthday">
        <n-date-picker
          v-model:formatted-value="pet.birthday"
          value-format="yyyy-MM-dd"
          type="date"
          clearable
        />
      </n-form-item>

      <n-form-item label="Death Date">
        <n-date-picker
          v-model:formatted-value="pet.deathDate"
          value-format="yyyy-MM-dd"
          type="date"
          clearable
        />
      </n-form-item>
    </n-space>

    <n-form-item label="Gender">
      <n-radio-group v-model:value="pet.gender">
        <n-space>
          <n-radio value="Male">
            Male
          </n-radio>
          <n-radio value="Female">
            Female
          </n-radio>
        </n-space>
      </n-radio-group>
    </n-form-item>

    <n-button
      :disabled="pet.name.length < 2 || pet.name.length > 20"
      size="large"
      type="primary"
      block
      @click="onSubmit()"
    >
      Submit
    </n-button>
  </n-form>
</template>
