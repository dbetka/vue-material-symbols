import { iconsMetadata } from '@/jscache/icons-metadata'

export declare interface SymbolMetadata {
  name: string
  version: number
  popularity: number
  codepoint: number
  categories: string[]
  tags: string[]
}

function useMetadata () {
  return iconsMetadata as SymbolMetadata[]
}

const metadata = iconsMetadata as SymbolMetadata[]

export {
  useMetadata,
  metadata,
}
