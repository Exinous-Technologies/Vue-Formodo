export type FormRendererSchema = {
  name: string
  type: 'Document'
  fields: {
    name: string
    title: string
    type: 'Text'
    props?: unknown
  }[]
}
