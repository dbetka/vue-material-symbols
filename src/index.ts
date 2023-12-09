import MaterialSymbol from './MaterialSymbol.vue'
import type { App } from 'vue'
import { icons } from './jscache/icons-names'
import { iconsTypes } from './jscache/icons-types'
import FontFaceObserver from 'fontfaceobserver'

export declare type Symbols = typeof icons
export declare type SymbolsProp = keyof typeof icons
export declare type SymbolsTypes = typeof iconsTypes
export declare type SymbolsTypesProp = keyof typeof iconsTypes
export declare interface MaterialSymbols {
  readonly names: Symbols;
  readonly types: SymbolsTypes;
}

export declare interface ConstructorOptions {
  defaultFilled?: boolean
  defaultWeight?: '100' | '200' | '300' | '400' | '500' | '600' | '700'
  defaultGrade?: 'thin' | 'medium' | 'bold'
  defaultSize?: number | string
  defaultType?: SymbolsTypesProp
}

declare global {
  interface Window { $materialSymbolsDefaults: ConstructorOptions; }
}

const materialSymbols: MaterialSymbols = {
  names: icons as Symbols,
  types: iconsTypes as SymbolsTypes,
}

function useSymbols (): MaterialSymbols {
  return materialSymbols as MaterialSymbols
}
export default {
  MaterialSymbol,
  useSymbols,
  materialSymbols,
  install: (_app: App, options?: ConstructorOptions) => {
    const fontOutlined = new FontFaceObserver('Material Symbols Outlined')
    const fontRounded = new FontFaceObserver('Material Symbols Rounded')
    const fontSharp = new FontFaceObserver('Material Symbols Sharp')
    fontOutlined.load()
    fontRounded.load()
    fontSharp.load()

    window.$materialSymbolsDefaults = options || {}
  }
}

export {
  MaterialSymbol,
  useSymbols,
  materialSymbols,
}
