<template>
    <div>
        <HelloWorld name="Jane Smith" />
    </div>
</template>


<script setup lang="ts">
    import { defineFederatedReactComponent } from '../utils/moduleFederation'
const HelloWorld = defineFederatedReactComponent({
    loader: () => import('library1/HelloWorld'),
    props: {
      name: { type: String, default: 'unknown' },
    },
    mounted() {
    }
})
  
</script>