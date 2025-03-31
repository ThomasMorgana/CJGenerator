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

<script setup lang="ts">
import { useFormStore } from '../store'

const { state } = useFormStore()
</script>

<style scoped>
input[type='text'] {
  padding: 4px 8px;
  border: 1px solid #e8ebf3;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  width: 80%;
  transition: border-color 0.2s;
}

input[type='text']:focus {
  border-color: #0a44a0;
  box-shadow: 0 0 5px #7eceff;
}
</style>
