import { IconsTypesProp } from './jscache/icons-types';
import { IconsProp } from './jscache/icons-names';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    name: IconsProp | '' | null | undefined;
    type?: IconsTypesProp | undefined;
    weight?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | undefined;
    grade?: "thin" | "medium" | "bold" | undefined;
    size?: string | number | undefined;
    filled?: boolean | undefined;
}>, {
    type: () => keyof import('./jscache/icons-types').IconsTypes;
    weight: () => "100" | "200" | "300" | "400" | "500" | "600" | "700";
    grade: () => "thin" | "medium" | "bold";
    size: () => string | number;
    filled: () => boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    name: IconsProp | '' | null | undefined;
    type?: IconsTypesProp | undefined;
    weight?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | undefined;
    grade?: "thin" | "medium" | "bold" | undefined;
    size?: string | number | undefined;
    filled?: boolean | undefined;
}>, {
    type: () => keyof import('./jscache/icons-types').IconsTypes;
    weight: () => "100" | "200" | "300" | "400" | "500" | "600" | "700";
    grade: () => "thin" | "medium" | "bold";
    size: () => string | number;
    filled: () => boolean;
}>>>, {
    grade: 'thin' | 'medium' | 'bold';
    weight: '100' | '200' | '300' | '400' | '500' | '600' | '700';
    type: IconsTypesProp;
    size: number | string;
    filled: boolean;
}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
