<script setup lang="ts">
interface props {
  name?: string
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
  <div class="flex justify-center">
    <n-card size="medium" bordered>
      <template #cover>
        <n-image
          :src="prop.photo"
          :alt="prop.name"
          fallback-src="https://via.placeholder.com/800x620"
        />
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
          <n-text depth="3" class="text-zinc-400">
            {{ prop.birthday }} - {{ prop.deathDate }}
          </n-text>
        </n-h4>
      </template>

      <n-p>
        {{ prop.description }}
      </n-p>

      <div class="mx-4 my-4">
        <n-li>
          <n-text strong class="text-lg text-purple-700 dark:text-purple">
            Favorite food:
          </n-text>
          <span>{{ prop.favoriteFood }}</span>
        </n-li>
        <n-li>
          <n-text strong class="text-lg text-purple-700 dark:text-purple">
            Favorite activity:
          </n-text>
          <span>{{ prop.favoriteActivity }}</span>
        </n-li>
      </div>

      <span>
        <n-tag round :bordered="false" type="error" class="mx-2">
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
.n-card, .n-card--bordered {
  max-width: 800px;
  max-height: 870px;
}
</style>
