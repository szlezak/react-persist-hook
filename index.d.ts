declare const usePersist: (key: string, storageType?: "localStorage" | "sessionStorage" | undefined, debounceLimit?: number | undefined) => [any, Function];
export default usePersist;
