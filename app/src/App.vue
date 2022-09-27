<script setup>
import { configProvider } from '@/composables/configProvider'
</script>

<template>
  <n-config-provider v-bind="configProvider">
    <Navigation />
    <RouterView />
  </n-config-provider>
</template>
