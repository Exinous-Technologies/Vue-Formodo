import TextComponent from '@/components/FormComponents/TextComponent.vue'

export interface SerializerObject {
  type: string
  component: typeof TextComponent
}

export type Serializer = SerializerObject[]

const DefaultSerializer: Serializer = [
  {
    type: 'Text',
    component: TextComponent,
  },
]

export default DefaultSerializer
