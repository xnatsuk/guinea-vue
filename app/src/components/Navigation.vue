<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { themeChange } from 'theme-change'

onMounted(() => {
  themeChange(true)
})
</script>

<template>
  <div class="navbar bg-base-300 shadow-md">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow-md bg-base-300 rounded-box w-52">
          <li><a>Edit Pets</a></li>
          <li><a>Settings</a></li>
          <li><a>About</a></li>
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <a class="btn btn-ghost normal-case text-xl">Guinea Vue</a>
    </div>
    <div class="navbar-end">
      <label class="swap pl-5">
        <input type="checkbox">
        <span class="swap-on">
          <Icon icon="carbon:sun" class="h-7 w-7" data-set-theme="dark" data-act-class="ACTIVECLASS" />
        </span>
        <span class="swap-off">
          <Icon icon="carbon:moon" class="h-7 w-7" data-set-theme="light" data-act-class="ACTIVECLASS" />
        </span>
      </label>
    </div>
  </div>
</template>
