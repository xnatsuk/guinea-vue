<script setup>
import { configProvider } from '@/composables/configProvider'
</script>

<template>
  <n-config-provider v-bind="configProvider">
    <n-message-provider placement="bottom-left">
      <n-dialog-provider>
        <Navigation />
        <RouterView />
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>
