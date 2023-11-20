# w3i

A typescript library for handling configuration for modules imported by other
modules.

This package offers opinionated methods implemented in packages that have
configurations.

With this module other packages can easily expose a `.set` method for setting
their parameters.

## Implementation

A common implementation is the following:

- Import and instanciate the `Weights` class:
```typescript
// src/config/index.ts
import {Weights, DeepPartial} from 'w3i';

type Config = {
  debug: boolean
}

export const weights = new Weights<Config>({
  debug: false,
});

export const set = (params: DeepPartial<Config>) => {
  weights.set(params);
};
```

- Export a `set` method in order to set the configuration:
```typescript
// src/main.ts
import {set} from './config/index.js';
export const config = {set};
```

- Use the configuration inside the package:
```typescript
// src/business.ts
import {weights} from './config/index.js';

function main(){
  if(weights.params.debug === true){
    console.log('Debugging...');
  }
}
```

## Unix philosophy

This repo try to follow the
[Unix philosophy](https://en.wikipedia.org/wiki/Unix_philosophy).

## Name

`w3i` stands for weight, like in
[Atomic Weight](https://en.wikipedia.org/wiki/Standard_atomic_weight).

## Other related repositories

[`3xp`](https://www.npmjs.com/package/3xp) A typescript library for validating objects.

[`i0n`](https://www.npmjs.com/package/i0n) A typescript library for console logging.

[`r4y`](https://www.npmjs.com/package/r4y) A typescript library for managing child processes.
