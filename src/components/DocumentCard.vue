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

<script setup>
defineProps({
  document: Object,
})
</script>

<style scoped>
.document-card {
  margin-bottom: 1rem;
}
</style>
