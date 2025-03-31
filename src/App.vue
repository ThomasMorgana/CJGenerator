<template>
  <h1>CJ Template Generator</h1>
  <main class="wrapper">
    <GlobalSettings class="card" />
    <FieldsSelection class="card" />
    <GeneratedCJ class="card" />
  </main>
</template>

<script setup>
import GlobalSettings from './components/GlobalSettings.vue';
import FieldsSelection from './components/FieldSelection.vue';
import GeneratedCJ from './components/GeneratedCJ.vue';
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 25% 25% 50%;
  width: 100%;
  height: 100vh;
  justify-content: center;
}

.card {
  padding: 0.5rem;
  background-color: white;
  min-width: 300px;
}
</style>
