import { ColoredText } from './ColoredText'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $coloredText: ColoredText
  }
}

export {} //Important! Note: TS module augmentation works correctly only when it is placed in the module
