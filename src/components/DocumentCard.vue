<template>
  <div class="document-card">
    <h3>{{ document.name }}</h3>
    <div>
      <label v-for="(field, index) in document.fields" :key="index">
        <input type="checkbox" v-model="field.selected" />
        {{ field.name }}
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  document: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.document-card {
  margin-bottom: 1rem;
  padding: 0.75rem;
  border: 1px solid var(--grey);
  border-radius: 4px;
  background: #f9f9fb;
}
</style>
