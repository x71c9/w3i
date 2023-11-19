/**
 *
 * Create module
 *
 * @packageDocumentation
 *
 */

import * as types from '../types/index.js';
import {Ion} from '../class/index.js';

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

type CreateParams = DeepPartial<types.IonParams>;

export function create(params?: CreateParams) {
  return new Ion(params);
}
