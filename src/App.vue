<template>
  <BaseLayout>

    <template #header>
      <h1>page title</h1>
    </template>
    <template #main>
      <p>paragraph of main content</p>
      <p>another one</p>
    </template>
    <template #footer>
      <p>contact info</p>
    </template>
    
  </BaseLayout>
</template>

<script setup>
import BaseLayout from './BaseLayout.vue'
</script>

<style lang="scss" scoped></style>