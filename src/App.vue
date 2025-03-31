<template>
  <h1>CJ Template Generator</h1>
  <main>
    <GlobalSettings />
    <FieldsSelection />
    <GeneratedCJ />
  </main>
</template>

<script setup lang="ts">
import GlobalSettings from './components/GlobalSettings.vue'
import FieldsSelection from './components/FieldSelection.vue'
import GeneratedCJ from './components/GeneratedCJ.vue'
</script>

<style scoped>
main {
  display: grid;
  grid-template-columns: 20% 30% 50%;
  width: 100%;
  height: 100vh;
  justify-content: center;
  background-color: white;
}

main > * {
  padding: 0.5rem;
}
</style>
