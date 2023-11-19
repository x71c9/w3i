/**
 *
 * Spinner module
 *
 * @packageDocumentation
 *
 */

// import ora from 'ora';
// import {config} from '../config/config.js';
// import * as log_utils from '../log/utils.js';

// const ora_spinner = ora({
//   color: 'white',
//   interval: 48,
// });

// export const spinner = {
//   text: _set_text,
//   start: _start,
//   stop: _stop,
//   is_spinning: _is_spinning,
// };

// function _is_spinning() {
//   return ora_spinner.isSpinning;
// }

// function _set_text(text: string) {
//   let processed_text = text;
//   const regex_new_line = new RegExp(
//     `\n|\r\n|0x0D0A|0x0A|0x0D|0x0d0a|0x0a|0x0d|¶`,
//     'g'
//   );
//   processed_text = processed_text.replace(regex_new_line, ' ');
//   processed_text =
//     processed_text.length > process.stdout.columns - 8
//       ? processed_text.substring(0, Math.floor(process.stdout.columns - 8)) +
//         '...'
//       : processed_text;
//   ora_spinner.text = processed_text;
// }

// function _start() {
//   if (log_utils._is_infoble() || config.force_spin === true) {
//     ora_spinner.start();
//   }
// }

// function _stop() {
//   ora_spinner.stop();
// }
