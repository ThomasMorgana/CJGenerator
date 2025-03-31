<template>
  <div>
    <div class="container">
      <h2>Fields</h2>
      <select id="preset" v-model="preset" @change="formStore.applyPreset">
        <option v-for="(preset, index) in presets" :key="index" :value="preset">
          {{ preset }}
        </option>
      </select>
    </div>

    <DocumentCard v-for="doc in selectedDocuments" :key="doc.name" :document="doc" />
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { useFormStore } from '../store'
import DocumentCard from './DocumentCard.vue'

const formStore = useFormStore()
const { preset, documents } = toRefs(formStore.state)

const presets = ['No Preset', 'Available', 'Date Sync Rule']

const selectedDocuments = computed(() => documents.value.filter((doc) => doc.selected))
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

select {
  padding: 4px 8px;
  font-size: 12px;
  border: 1px solid #e8ebf3;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  outline: none;
}

select:hover {
  border-color: #39434c;
}

select:focus {
  border-color: #2563eb;
  box-shadow: 0 0 5px #7eceff;
}
</style>
