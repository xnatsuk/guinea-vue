<script setup lang="ts">
</script>

<template>
  <n-button quaternary type="primary" size="large" aria-label="theme toggle" @click="toggleDark()">
    <template #icon>
      <n-icon v-if="!isDark" class="i-fluent-weather-moon-20-filled " size="36" aria-hidden="true" />
      <n-icon v-else class="i-fluent-weather-sunny-20-filled" size="36" aria-hidden="true" />
    </template>
  </n-button>
</template>
