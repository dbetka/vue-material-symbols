import { ConstructorOptions } from '@/index'
import { getCurrentInstance } from 'vue'

const app = getCurrentInstance()
export const materialSymbolsDefaults = (app
  ? app.appContext.config.globalProperties.materialSymbolsDefaults
  : {}) as Partial<ConstructorOptions>
