<script setup lang="ts">
</script>

<template>
  <div class="flex justify-wrap m-x-4">
    <n-tabs type="line" size="large" class="flex justify-center m-l-12">
      <n-tab name="Home">
        <router-link to="/">
          <n-icon class="i-carbon-home dark:bg-#63e2b7 bg-#18a058" size="36" />
        </router-link>
      </n-tab>
      <n-tab name="EditPets">
        <router-link to="/edit">
          <n-icon class="i-carbon-edit dark:bg-#63e2b7 bg-#18a058" size="36" />
        </router-link>
      </n-tab>
      <n-tab name="About">
        <router-link to="/about">
          <n-icon class="i-carbon-information dark:bg-#63e2b7 bg-#18a058" size="36" />
        </router-link>
      </n-tab>
    </n-tabs>
    <div class="m-y-3">
      <DarkSwitcher />
    </div>
  </div>
</template>
