<script setup lang="ts">
import type { MenuOption } from 'naive-ui'
import { NIcon } from 'naive-ui'
import { RouterLink } from 'vue-router'

const route = useRoute()
const activeKey = computed(() => route.name)

const menuOptions: MenuOption[] = [
  {
    label: () => h(RouterLink, { to: '/' }, { default: () => 'Home' }),
    key: 'home',
    icon: () => h(NIcon,
      {
        'class': 'i-carbon-home',
        'size': 36,
        'aria-hidden': true,
      }),
  },
  {
    label: () => h(RouterLink, { to: '/edit' }, { default: () => 'Edit' }),
    key: 'edit',
    icon: () => h(NIcon,
      {
        'class': 'i-carbon-edit',
        'size': 36,
        'aria-hidden': true,
      }),
  },
  {
    label: () => h(RouterLink, { to: '/about' }, { default: () => 'About' }),
    key: 'about',
    icon: () => h(NIcon,
      {
        'class': 'i-carbon-information',
        'size': 36,
        'aria-hidden': true,
      }),
  },
]
</script>

<template>
  <n-space
    horizontal
    justify="space-between"
    :wrap="false"
  >
    <div class="w-56px" />
    <n-menu
      v-model:value="activeKey"
      :options="menuOptions"
      mode="horizontal"
    />
    <dark-switcher />
  </n-space>
</template>
