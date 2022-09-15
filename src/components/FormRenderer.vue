<script lang="ts">
  import DefaultSerializer from '@/helpers/Serializer'
  import { FormRendererSchema } from '@/types/FormRendererSchema'
  import { defineComponent } from 'vue'

  export default defineComponent({
    props: {
      schema: {
        type: Object as () => FormRendererSchema,
        required: true,
      },
    },
    setup(props) {
      props.schema
    },
    methods: {
      getComponent(type: string) {
        const matchingElement = DefaultSerializer.filter((element) => element.type === type)

        if (matchingElement.length === 1) return matchingElement[0]['component']

        return null
      },
    },
  })
</script>

<template>
  <div v-for="field in schema.fields" :key="field.name">
    <component :is="getComponent(field.type)" v-bind="field.props"></component>
  </div>
</template>
