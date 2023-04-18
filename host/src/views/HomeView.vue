<template>
    <label>Show UIA <input type="checkbox" v-model="showUI" /></label>
    <div v-if="showUI">
      <HelloWorld/>
    </div>
</template>


<script setup>
import { ref } from 'vue'
import HelloWorld from './HelloWorld.vue'
const showUI = ref(true)
</script>
