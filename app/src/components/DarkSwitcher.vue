<script setup lang="ts">
</script>

<template>
  <n-button quaternary type="primary" size="large" @click="toggleDark()">
    <template #icon>
      <n-icon v-if="!isDark" class="i-fluent-weather-moon-20-filled w-5 h-5" />
      <n-icon v-else class="i-fluent-weather-sunny-20-filled w-5 h-5" />
    </template>
  </n-button>
</template>

