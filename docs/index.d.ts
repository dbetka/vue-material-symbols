import MaterialSymbol from './MaterialSymbol.vue';
import type { App } from 'vue';
import { icons } from './jscache/icons-names';
import { iconsTypes } from './jscache/icons-types';
export declare type Symbols = typeof icons;
export declare type SymbolsProp = keyof typeof icons;
export declare type SymbolsTypes = typeof iconsTypes;
export declare type SymbolsTypesProp = keyof typeof iconsTypes;
export declare interface SymbolMetadata {
    name: string;
    version: number;
    popularity: number;
    codepoint: number;
    categories: string[];
    tags: string[];
}
export declare interface MaterialSymbolsLists {
    readonly names: Symbols;
    readonly types: SymbolsTypes;
    readonly metadata: SymbolMetadata[];
}
export declare interface ConstructorOptions {
    defaultFilled?: boolean;
    defaultWeight?: '100' | '200' | '300' | '400' | '500' | '600' | '700';
    defaultGrade?: 'thin' | 'medium' | 'bold';
    defaultSize?: number | string;
    defaultType?: SymbolsTypesProp;
}
declare global {
    interface Window {
        $materialSymbolsDefaults: ConstructorOptions;
    }
}
declare function useSymbols(): MaterialSymbolsLists;
declare const materialSymbolsPlugin: {
    install: (_app: App, options?: ConstructorOptions) => void;
};
export { materialSymbolsPlugin as default, useSymbols, MaterialSymbol, };
