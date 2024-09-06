export declare interface SymbolMetadata {
    name: string;
    version: number;
    popularity: number;
    codepoint: number;
    categories: string[];
    tags: string[];
}
declare function useMetadata(): SymbolMetadata[];
declare const metadata: SymbolMetadata[];
export { useMetadata, metadata, };
