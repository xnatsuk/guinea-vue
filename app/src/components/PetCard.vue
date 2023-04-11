<script setup lang="ts">
const prop = defineProps<{
  name: string
  birthday?: string
  gender?: string
  species?: string
  nickname?: string
  deathDate?: string
  favoriteFood?: string
  favoriteActivity?: string
  description?: string
  photo?: string
}>()
</script>

<template>
  <div class="flex justify-center">
    <n-card size="medium" embedded bordered hoverable>
      <template #cover>
        <img
          :src="prop.photo || 'https://via.placeholder.com/800x620'"
          :alt="prop.name"
        >
      </template>

      <template #header>
        <n-h1 prefix="bar">
          <n-text type="primary" strong>
            {{ prop.name }}
          </n-text>
          <span class="mx-2">
            <n-tag round :bordered="false" type="warning" class="mx-2">
              {{ prop.nickname }}
              <template #icon>
                <n-icon class="i-carbon-user-avatar-filled-alt" />
              </template>
            </n-tag>
          </span>
        </n-h1>
      </template>

      <template #header-extra>
        <n-h4>
          <n-text depth="3" class="text-zinc-600 dark:text-zinc-400">
            <n-p>{{ prop.birthday }}</n-p>
            <n-p>{{ prop.deathDate }}</n-p>
          </n-text>
        </n-h4>
      </template>

      <n-p>
        {{ prop.description }}
      </n-p>

      <div class="mx-4 my-4">
        <n-li>
          <n-text strong type="info" class="text-lg">
            Favorite food:
          </n-text>
          <span>{{ prop.favoriteFood }}</span>
        </n-li>
        <n-li>
          <n-text strong type="info" class="text-lg">
            Favorite activity:
          </n-text>
          <span>{{ prop.favoriteActivity }}</span>
        </n-li>
      </div>

      <span>
        <n-tag round :bordered="false" type="success" class="mx-2">
          {{ prop.gender }}
          <template #icon>
            <n-icon class="i-icons8-gender" />
          </template>
        </n-tag>
        <n-tag round :bordered="false" type="success" class="mx-2">
          {{ prop.species }}
          <template #icon>
            <n-icon class="i-cil-animal" />
          </template>
        </n-tag>
      </span>
    </n-card>
  </div>
</template>

<style scoped>
img {
  width:100%;
  height: 100%;
  object-fit: cover;
}
.n-card, .n-card--bordered {
  width: 100vw;
  height: 100vh;
  max-width: 50em;
  max-height: 55em;
}
</style>
