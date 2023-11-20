/**
 *
 * Run module
 *
 */

import {Weights} from './index.js';

type Nested3 = {
  foo: any;
};

type Param3 = {
  nested1: boolean;
  nested2: number[];
  nested3: Nested3;
};

type Config = {
  param1: string;
  param2: number;
  param3: Param3;
};

const default_config: Config = {
  param1: 'a',
  param2: 1,
  param3: {
    nested1: true,
    nested2: [1, 2, 3],
    nested3: {
      foo: new Date(),
    },
  },
};

const config = new Weights<Config>(default_config);
config.set({
  param1: '',
});
