/**
 *
 * Class module
 *
 * @packageDocumentation
 *
 */

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

export class Weights<T extends Record<string, any>> {
  private config: T;
  constructor(private defaults: T) {
    this.config = _deep_clone(this.defaults);
  }
  public set(params: DeepPartial<T>): void {
    if (
      !params ||
      typeof params !== 'object' ||
      Object.entries(params).length === 0
    ) {
      return;
    }
    this.merge_defaults(this.config, params);
  }
  private merge_defaults(defaults: T, partial: DeepPartial<T>) {
    for (const key in partial) {
      if (!partial.hasOwnProperty(key)) {
        delete partial[key];
      }
      if (typeof defaults[key] !== typeof partial[key]) {
        delete partial[key];
      }
      const pk = partial[key];
      if (pk && typeof pk === 'object' && pk !== null) {
        this.merge_defaults(defaults[key], pk);
      } else {
        defaults[key] = partial[key] as T[typeof key];
      }
    }
  }
}

function _deep_clone<T>(obj: T): T {
  if (!obj || typeof obj !== 'object') {
    return obj;
  }
  return JSON.parse(JSON.stringify(obj));
}
