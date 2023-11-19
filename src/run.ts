/**
 *
 * Run module
 *
 */

import i0n from './index.js';
export const ion = i0n.create({});

ion.trace(`trace`);
ion.debug(`debug`);
ion.info(`info`);
ion.warn(`warn`);
ion.error(`error`);
ion.success(`success`);
ion.fail(`fail`);

let text = `Loading`;
for (let i = 0; i < 20; i++) {
  text += ` ` + text;
}
ion.spinner.text(text);
ion.spinner.start();

setTimeout(function () {
  ion.warn('watch out');
}, 2000);

setTimeout(function () {
  ion.spinner.stop();
  ion.success('it is a success');
}, 6000);
