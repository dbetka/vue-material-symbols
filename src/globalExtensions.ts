import { ConstructorOptions } from '@/index'

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    materialSymbolsDefaults: ConstructorOptions
  }
}
