/**
 *
 * Class module
 *
 * @packageDocumentation
 *
 */
export type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};
export declare class Weights<T extends Record<string, any>> {
    private defaults;
    params: T;
    constructor(defaults: T);
    set(params: DeepPartial<T>): void;
    private merge_defaults;
}
