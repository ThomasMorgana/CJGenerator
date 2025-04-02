<template>
  <div>
    <h2>Generated CJ</h2>
    <v-ace-editor v-model:value="generatedCJ" lang="yaml" theme="chrome" style="height: 90%" />
    <div class="cta">
      <button @click="copy">Copy</button>
      <button @click="save">Save</button>
      <button @click="clear">Clear</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { useFormStore } from '../store'
import { VAceEditor } from 'vue3-ace-editor'
import 'ace-builds/src-noconflict/mode-yaml'
import 'ace-builds/src-noconflict/theme-chrome'

import { copyToClipboard, downloadFile } from '../utils/helpers'

const formStore = useFormStore()
const { name, purpose, documents } = toRefs(formStore.state)
const selectedDocuments = computed(() => documents.value.filter((doc) => doc.selected))


const generatedCJ = computed(() => {
  if (!selectedDocuments.value.length) return ''

  return (
    `pipelines:` +
    selectedDocuments.value
      .map(
        (doc) => `
    - name: ${name.value} for ${doc.name.toLowerCase()}
      jobs:
        - name: ${purpose.value} for ${doc.name.toLowerCase()}
          steps:
            - !projection
              name: ${doc.name}
              version: 1
              from:
                alias: business/${doc.alias}
              mappings:
                assignations:
                  ${
                    doc.fields
                      .filter((f) => f.selected)
                      .map((field) => `- expression: ${field.key} = ${field.defaultValue}`)
                      .join('\n                  ') || '- expression: '
                  }
              into:
                alias: custom_output
      outputType: ${doc.pipeline}`,
      )
      .join('')
  )
})

const copy = () => copyToClipboard(generatedCJ.value)
const save = () => downloadFile(generatedCJ.value, name.value)
const clear = () => formStore.$reset()
</script>

<style scoped>
div {
  position: relative;
}

.cta {
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: row;
}

button {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.5rem;
  color: var(--dark-grey);
  font-size: 12px;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid var(--grey);
  width: 4rem;
  height: 2rem;
  background: white;
  transition: background-color 0.2s;
}

button:hover {
  background: var(--grey);
}
</style>
