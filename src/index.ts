import MaterialSymbol from './MaterialSymbol.vue'
import type { App } from 'vue'
import { icons } from './jscache/icons-names'
import { iconsTypes } from './jscache/icons-types'
import { iconsMetadata } from '@/jscache/icons-metadata'
import FontFaceObserver from 'fontfaceobserver'

export declare type Symbols = typeof icons
export declare type SymbolsProp = keyof typeof icons
export declare type SymbolsTypes = typeof iconsTypes
export declare type SymbolsTypesProp = keyof typeof iconsTypes
export declare interface SymbolMetadata {
  name: string
  version: number
  popularity: number
  codepoint: number
  categories: string[]
  tags: string[]
}
export declare interface MaterialSymbolsLists {
  readonly names: Symbols
  readonly types: SymbolsTypes
  readonly metadata: SymbolMetadata[]
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

const materialSymbolsLists: MaterialSymbolsLists = {
  names: icons as Symbols,
  types: iconsTypes as SymbolsTypes,
  metadata: iconsMetadata as SymbolMetadata[]
}

function useSymbols (): MaterialSymbolsLists {
  return materialSymbolsLists as MaterialSymbolsLists
}

const materialSymbolsPlugin = {
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
  materialSymbolsPlugin as default,
  useSymbols,
  MaterialSymbol,
}
