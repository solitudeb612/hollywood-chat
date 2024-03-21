<!-- App.vue -->
<template>
    <div>
        <MdEditor v-model="text" />
        <button @click="handleSave">Save</button>
        <button @click="getSave">getText</button>
        <button @click="handleClear">Clear</button>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const text = ref(
    '# Hello VueChat\n\n'
    + '## This is a markdown editor'
);
const handleSave = () => {
    localStorage.setItem('text', text.value);
    console.log('Save')
};
const getSave = () => {
    let value = localStorage.getItem('text');
    console.log(value);
};
const handleClear = () => {
    localStorage.removeItem('text');
    console.log('Clear')
};
</script>
<style lang="scss" scoped></style>