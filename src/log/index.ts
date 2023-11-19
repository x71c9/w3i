/**
 *
 * Main module
 *
 * @packageDocumentation
 *
 */

// import * as types from '../types/index.js';
// import * as log_utils from './utils.js';
// import {spinner} from '../spinner/index.js';
// import {config} from '../config/config.js';

// export async function trace(...data: any): Promise<void> {
//   _print_full_objects(types.METHOD.trace, data);
//   await _run_inject(types.METHOD.trace, data);
// }
// export async function debug(...data: any): Promise<void> {
//   _print_full_objects(types.METHOD.debug, data);
//   await _run_inject(types.METHOD.debug, data);
// }
// export async function info(...data: any): Promise<void> {
//   _print_full_objects(types.METHOD.info, data);
//   await _run_inject(types.METHOD.info, data);
// }
// export async function warn(...data: any): Promise<void> {
//   _print_full_objects(types.METHOD.warn, data);
//   await _run_inject(types.METHOD.warn, data);
// }
// export async function error(...data: any): Promise<void> {
//   _print_full_objects(types.METHOD.error, data);
//   await _run_inject(types.METHOD.error, data);
// }
// export async function success(...data: any): Promise<void> {
//   _print_full_objects(types.METHOD.success, data);
//   await _run_inject(types.METHOD.success, data);
// }
// export async function fail(...data: any): Promise<void> {
//   _print_full_objects(types.METHOD.fail, data);
//   await _run_inject(types.METHOD.fail, data);
// }

// async function _run_inject(method: types.Method, data: any) {
//   await config[method].inject(...data);
// }

// function _print_full_objects(method: types.Method, data: any): void {
//   let full_log: string[] = [];
//   for (const arg of data) {
//     full_log.push(_process_data(arg));
//   }
//   _print(method, full_log.join(' '));
// }

// function _process_data(data: any): string {
//   if (typeof data === 'object' && data !== null) {
//     return JSON.stringify(data, null, 2);
//   }
//   return data;
// }

// function _print(method: types.Method, data: any): void {
//   const method_prefix = _get_prefix_from_method(method);
//   const with_prefix = `${config.prefix}${method_prefix}${data}`;
//   const final_data = _paint(method, with_prefix);
//   const was_spinning = _stop_spinning();
//   _print_primitive(method, final_data);
//   _start_spinning(was_spinning);
// }

// function _stop_spinning() {
//   const was_spinning = spinner.is_spinning();
//   if (was_spinning) {
//     spinner.stop();
//   }
//   return was_spinning;
// }

// function _start_spinning(was_spinning: boolean) {
//   if (was_spinning) {
//     spinner.start();
//   }
// }

// function _paint(method: types.Method, str: string): string {
//   if (_env_no_color_is_true() || config.color === false) {
//     return str;
//   }
//   const style = _get_style_from_method(method);
//   const styled_log = style + str + _terminal_styles.reset;
//   return styled_log;
// }

// function _print_primitive(method: types.Method, data: any): void {
//   switch (method) {
//     case types.METHOD.trace: {
//       if (!log_utils._is_traceble(config.log_level)) {
//         break;
//       }
//       _use_console_method(types.METHOD.trace, data);
//       break;
//     }
//     case types.METHOD.debug: {
//       if (!log_utils._is_debugable(config.log_level)) {
//         break;
//       }
//       _use_console_method(types.METHOD.debug, data);
//       break;
//     }
//     case types.METHOD.info: {
//       if (!log_utils._is_infoble(config.log_level)) {
//         break;
//       }
//       _use_console_method(types.METHOD.info, data);
//       break;
//     }
//     case types.METHOD.warn: {
//       if (!log_utils._is_warnable(config.log_level)) {
//         break;
//       }
//       _use_console_method(types.METHOD.warn, data);
//       break;
//     }
//     case types.METHOD.error: {
//       if (!log_utils._is_errable(config.log_level)) {
//         break;
//       }
//       _use_console_method(types.METHOD.error, data);
//       break;
//     }
//     case types.METHOD.success: {
//       if (!log_utils._is_infoble(config.log_level)) {
//         break;
//       }
//       _use_console_method(types.METHOD.success, data);
//       break;
//     }
//     case types.METHOD.fail: {
//       if (!log_utils._is_infoble(config.log_level)) {
//         break;
//       }
//       _use_console_method(types.METHOD.fail, data);
//       break;
//     }
//   }
// }

// function _use_console_method(method: types.Method, data: any) {
//   const console_method: types.ConsoleMethod | undefined = config[method].method;
//   switch (console_method) {
//     case types.CONSOLE_METHOD.trace: {
//       console.trace(data);
//       break;
//     }
//     case types.CONSOLE_METHOD.debug: {
//       console.debug(data);
//       break;
//     }
//     case types.CONSOLE_METHOD.log: {
//       console.log(data);
//       break;
//     }
//     case types.CONSOLE_METHOD.info: {
//       console.info(data);
//       break;
//     }
//     case types.CONSOLE_METHOD.warn: {
//       console.warn(data);
//       break;
//     }
//     case types.CONSOLE_METHOD.error: {
//       console.error(data);
//       break;
//     }
//   }
// }

// function _env_no_color_is_true() {
//   const env_no_colors = process.env.NO_COLOR == 'true' ? true : false;
//   return env_no_colors;
// }

// function _get_style_from_color(color: types.Color): string {
//   return _style[color];
// }

// function _get_style_from_method(method: types.Method): string {
//   const color = config[method].color;
//   if (_is_base_color(color)) {
//     return _get_style_from_color(color as types.Color);
//   }
//   const custom_style = _get_style_from_hexadecimal_color(color);
//   if (!custom_style) {
//     return _style.DEFAULT;
//   }
//   return custom_style;
// }

// function _get_prefix_from_method(method: types.Method): string {
//   const prefix = config[method].prefix;
//   return prefix;
// }

// function _is_base_color(color: string): boolean {
//   for (const [_key, value] of Object.entries(types.COLOR)) {
//     if (value === color) {
//       return true;
//     }
//   }
//   return false;
// }

// function _get_style_from_hexadecimal_color(color: string): string | undefined {
//   const rgb = _hex_to_rgb(color);
//   const style = `\x1b[38;2;${rgb.r};${rgb.g};${rgb.b}m`;
//   return style;
// }

// function _hex_to_rgb(hex: string) {
//   if (hex[0] !== '#') {
//     throw new Error(`Hexadecimal color should start with #`);
//   }
//   if (!_is_valid_hex(hex)) {
//     throw new Error(`Invalid hexadecimal value`);
//   }
//   const processed_hex = _short_hex_to_full_hex(hex);
//   const bigint = parseInt(processed_hex.slice(1), 16);
//   const r = (bigint >> 16) & 255;
//   const g = (bigint >> 8) & 255;
//   const b = bigint & 255;
//   return {r, g, b};
// }

// function _is_valid_hex(hex: string): boolean {
//   if (
//     !/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(
//       hex
//     )
//   ) {
//     return false;
//   }
//   const numberic_value = parseInt(hex.slice(1), 16);
//   if (isNaN(numberic_value)) {
//     return false;
//   }
//   return true;
// }

// function _short_hex_to_full_hex(hex: string): string {
//   if (!/^#?([0-9A-Fa-f]{3})$/.test(hex)) {
//     return hex;
//   }
//   const r = hex[1];
//   const g = hex[2];
//   const b = hex[3];
//   const full_hex = `#${r}${r}${g}${g}${b}${b}`;
//   return full_hex;
// }

// const _terminal_styles = {
//   'reset': '\x1b[0m',
//   'bright': '\x1b[1m',
//   'dim': '\x1b[2m',
//   'underscore': '\x1b[4m',
//   'blink': '\x1b[5m',
//   'reverse': '\x1b[7m',
//   'hidden': '\x1b[8m',
//   'fgBlack': '\x1b[30m',
//   'fgRed': '\x1b[31m',
//   'fgGreen': '\x1b[32m',
//   'fgYellow': '\x1b[33m',
//   'fgBlue': '\x1b[34m',
//   'fgMagenta': '\x1b[35m',
//   'fgCyan': '\x1b[36m',
//   'fgWhite': '\x1b[37m',
//   'fgDefault': '\x1b[39m',
//   'fgLightGrey': '\x1b[90m',
//   'fgLightRed': '\x1b[91m',
//   'fgLightGreen': '\x1b[92m',
//   'fglightYellow': '\x1b[93m',
//   'fgLightBlue': '\x1b[94m',
//   'fgLightMagenta': '\x1b[95m',
//   'fgLightCyan': '\x1b[96m',
//   'fgLightWhite': '\x1b[97m',
//   'bgBlack': '\x1b[40m',
//   'bgRed': '\x1b[41m',
//   'bgGreen': '\x1b[42m',
//   'bgYellow': '\x1b[43m',
//   'bgBlue': '\x1b[44m',
//   'bgMagenta': '\x1b[45m',
//   'bgCyan': '\x1b[46m',
//   'bgWhite': '\x1b[47m',
//   'bgDefault': '\x1b[49m',
//   'Light Gray': '\x1b[100m',
//   'Light Red': '\x1b[101m',
//   'Light Green': '\x1b[102m',
//   'Light Yellow': '\x1b[103m',
//   'Light Blue': '\x1b[104m',
//   'Light Magenta': '\x1b[105m',
//   'Light Cyan': '\x1b[106m',
//   'Light White': '\x1b[107m',
// };

// type Style = {
//   [k in types.Color]: string;
// };

// const _style: Style = {
//   DIM: _terminal_styles.dim,
//   MAGENTA: _terminal_styles.fgMagenta,
//   CYAN: _terminal_styles.fgCyan,
//   YELLOW: _terminal_styles.fgYellow,
//   RED: _terminal_styles.fgRed,
//   BLACK: _terminal_styles.fgBlack,
//   GREEN: _terminal_styles.fgGreen,
//   DEFAULT: _terminal_styles.fgDefault,
// };
