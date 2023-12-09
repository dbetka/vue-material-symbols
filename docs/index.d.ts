import MaterialSymbol from './MaterialSymbol.vue';
import type { App } from 'vue';
import { icons } from './jscache/icons-names';
import { iconsTypes } from './jscache/icons-types';
export declare type Symbols = typeof icons;
export declare type SymbolsProp = keyof typeof icons;
export declare type SymbolsTypes = typeof iconsTypes;
export declare type SymbolsTypesProp = keyof typeof iconsTypes;
export declare interface MaterialSymbols {
    readonly names: Symbols;
    readonly types: SymbolsTypes;
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
declare const materialSymbols: MaterialSymbols;
declare function useSymbols(): MaterialSymbols;
declare const _default: {
    MaterialSymbol: import("vue").DefineComponent<{
        grade: {
            type: import("vue").PropType<"thin" | "medium" | "bold">;
            default: () => "thin" | "medium" | "bold";
        };
        weight: {
            type: import("vue").PropType<"100" | "200" | "300" | "400" | "500" | "600" | "700">;
            default: () => "100" | "200" | "300" | "400" | "500" | "600" | "700";
        };
        name: {
            type: import("vue").PropType<"" | import("./jscache/icons-names").IconsProp | null | undefined>;
            required: true;
        };
        type: {
            type: import("vue").PropType<import("./jscache/icons-types").IconsTypesProp>;
            default: () => keyof import("./jscache/icons-types").IconsTypes;
        };
        size: {
            type: import("vue").PropType<string | number>;
            default: () => string | number;
        };
        filled: {
            type: import("vue").PropType<boolean>;
            default: () => boolean;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        grade: {
            type: import("vue").PropType<"thin" | "medium" | "bold">;
            default: () => "thin" | "medium" | "bold";
        };
        weight: {
            type: import("vue").PropType<"100" | "200" | "300" | "400" | "500" | "600" | "700">;
            default: () => "100" | "200" | "300" | "400" | "500" | "600" | "700";
        };
        name: {
            type: import("vue").PropType<"" | import("./jscache/icons-names").IconsProp | null | undefined>;
            required: true;
        };
        type: {
            type: import("vue").PropType<import("./jscache/icons-types").IconsTypesProp>;
            default: () => keyof import("./jscache/icons-types").IconsTypes;
        };
        size: {
            type: import("vue").PropType<string | number>;
            default: () => string | number;
        };
        filled: {
            type: import("vue").PropType<boolean>;
            default: () => boolean;
        };
    }>>, {
        grade: "thin" | "medium" | "bold";
        weight: "100" | "200" | "300" | "400" | "500" | "600" | "700";
        type: import("./jscache/icons-types").IconsTypesProp;
        size: string | number;
        filled: boolean;
    }, {}>;
    useSymbols: typeof useSymbols;
    materialSymbols: MaterialSymbols;
    install: (_app: App, options?: ConstructorOptions) => void;
};
export default _default;
export { MaterialSymbol, useSymbols, materialSymbols, };
