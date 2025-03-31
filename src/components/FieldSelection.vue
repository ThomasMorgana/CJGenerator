<template>
  <div>
    <h2>Fields</h2>
    <DocumentCard v-for="doc in selectedDocuments" :key="doc.name" :document="doc" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useFormStore } from '../store'
import DocumentCard from './DocumentCard.vue'

const formStore = useFormStore()
const selectedDocuments = computed(() => formStore.state.documents.filter((doc) => doc.selected))
</script>
