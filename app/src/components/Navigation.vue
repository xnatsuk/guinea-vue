<script setup lang="ts">
</script>

<template>
  <div class="flex justify-wrap m-x-4">
    <n-tabs type="line" size="large" class="flex justify-center m-l-12">
      <n-tab name="Home">
        <router-link to="/" class="i-carbon-home w-8 h-8" />
      </n-tab>
      <n-tab name="EditPets">
        <router-link to="/edit" class="i-carbon-edit w-8 h-8" />
      </n-tab>
      <n-tab name="About">
        <router-link to="/about" class="i-carbon-information w-8 h-8" />
      </n-tab>
    </n-tabs>
    <div class="m-y-3">
      <DarkSwitcher />
    </div>
  </div>
</template>

<style scoped>
 .i-carbon-edit {
    @apply dark:bg-#63e2b7 bg-#18a058;
  }

  .i-carbon-home {
    @apply dark:bg-#63e2b7 bg-#18a058;
  }

  .i-carbon-information {
    @apply dark:bg-#63e2b7 bg-#18a058;
  }
</style>
