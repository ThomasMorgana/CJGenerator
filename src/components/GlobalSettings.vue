<template>
  <div>
    <h2>Global Settings</h2>
    <input v-model="state.name" type="text" placeholder="* Title of the CJ" />
    <input v-model="state.purpose" type="text" placeholder="Purpose of the CJ" />

    <h3>Documents</h3>
    <div>
      <label v-for="(doc, index) in state.documents" :key="index">
        <input type="checkbox" v-model="doc.selected" />
        {{ doc.name }}
      </label>
    </div>
  </div>
</template>

<script setup>
import { useFormStore } from '../store'

const { state } = useFormStore()
</script>

<style scoped>
input[type='text'] {
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 0.375rem;
  margin-bottom: 0.5rem;
  width: 50%;
}

input[type='text']:focus {
  padding: 4px 8px;
  border: 1px solid #0A44A0;
  border-radius: 0.375rem;
  margin-bottom: 0.5rem;
  width: 50%;
}
</style>
