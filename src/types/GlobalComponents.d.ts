import FormRenderer from '@/components/FormRenderer.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    FormRenderer: typeof FormRenderer
  }
}
