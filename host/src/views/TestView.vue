<template>
    <div>
        <Test />
    </div>
</template>


<script setup lang="ts">
    import { defineFederatedReactComponent } from '../utils/moduleFederation'
const Test = defineFederatedReactComponent({
    loader: () => import('library1/Test'),
    props: {
      name: { type: String, default: 'unknown' },
    },
    mounted() {
    }
})
  
</script>