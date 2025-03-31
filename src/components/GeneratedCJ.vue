  <template>
    <div>
      <h2>Generated CJ</h2>
      <v-ace-editor v-model:value="generatedCJ" lang="yaml" theme="chrome" style="height: 90%" />
      <div class="cta">
        <button @click="copyToClipboard(generatedCJ)">
          Copy
        </button>
        <button @click="downloadFile(generatedCJ, formStore.state.name)">
          Save
        </button>
        <button @click="formStore.$reset()">
          Clear
        </button>
      </div>
    </div>
  </template>

<script setup>
import { computed } from 'vue';
import { useFormStore } from '../store';
import { VAceEditor } from 'vue3-ace-editor';
import 'ace-builds/src-noconflict/mode-yaml';
import 'ace-builds/src-noconflict/theme-chrome';

import { copyToClipboard, downloadFile } from '../utils/helpers';

const formStore = useFormStore();
const selectedDocuments = computed(() => formStore.state.documents.filter(doc => doc.selected));

const generatedCJ = computed(() => {
  if (!selectedDocuments.value.length) return '';

  return `pipelines:` + selectedDocuments.value.map(doc => `
    - name: ${formStore.state.name} for ${doc.name.toLowerCase()}
      jobs:
        - name: ${formStore.state.purpose} for ${doc.name.toLowerCase()}
          steps:
            - !projection
              name: ${doc.name}
              version: 1
              from:
                alias: business/${doc.alias}
              mappings:
                assignations:
                  ${doc.fields.filter(f => f.selected).map(field => `- expression: ${field.key} = ${field.defaultValue}`).join('\n                  ') || '- expression: '}
              into:
                alias: custom_output
      outputType: ${doc.pipeline}`
  ).join('');
});
</script>

<style scoped>
div {
  position: relative
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
  color: #39434C;
  font-size: 12px;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid #C7CCD1;
  width: 4rem;
  height: 2rem;
  background: #FFFFFF;
}

button:hover {
  background: var(--grey-90012, #2343611F);
}
</style>
