<template>
  <div>
    <label>Show UI <input type="checkbox" v-model="showUI" /></label>
    <div v-if="showUI">
      <HelloWorld name="Jane Smith" />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import Loading from './components/Loading.vue'
import Error from './components/Error.vue'
import { defineReactComponent } from './react'

function defineFederatedReactComponent({
  loader = async () => ({ default: null }),
  component = 'default',
  ...options
} = {}) {
  return defineAsyncComponent({
    loader: async () => defineReactComponent({
      component: (await loader())[component],
      ...options
    }),
    loadingComponent: Loading,
    errorComponent: Error,
    timeout: 1000,
  })
}
const HelloWorld = defineFederatedReactComponent({
  loader: () => import('library1/HelloWorld'),
  props: {
    name: { type: String, default: 'unknown' },
  },
  mounted() {
  }
})
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      showUI: false,
    }
  },
}
</script>

<style>
.h1 {
  color: red;
}
</style>