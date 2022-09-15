<template>
  <FormRenderer
    :schema="{
      name: 'yolo',
      type: 'Document',
      fields: [
        {
          name: 'orderId',
          title: 'Order Id',
          type: 'Text',
          props: {
            test: 1,
          },
        },
        {
          name: 'orderId',
          title: 'Order Id',
          type: 'Text',
        },
        {
          name: 'orderId',
          title: 'Order Id',
          type: 'Text',
        },
      ],
    }"
    >HI</FormRenderer
  >
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'App',
  })
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
