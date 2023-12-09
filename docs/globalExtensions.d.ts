import { ConstructorOptions } from './index';
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        materialSymbolsDefaults: ConstructorOptions;
    }
}
